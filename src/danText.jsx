import { useMemo, useState } from 'react';
import {
  Badge,
  Button,
  Container,
  Image,
  Modal,
  Stack,
} from 'react-bootstrap';
import smsHtml from "./assets/Dan_Pennny_Texts.html?raw";
import "./SMSConversation.css";
/**
 * Renders the supplied SMSBackUp HTML export as a responsive React-Bootstrap
 * conversation. The original export is imported as a Vite raw string so its
 * embedded base64 images remain self-contained.
 *
 * Props:
 *   title       Optional conversation heading (default: "SMS Conversation")
 *   html        Optional replacement HTML export string
 *   className   Optional class applied to the outer container
 */
export default function SMSConversation({
  title = 'SMS Conversation',
  html = smsHtml,
  className = '',
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const entries = useMemo(() => parseSmsExport(html), [html]);

  return (
    <Container fluid className={`sms-page py-3 py-md-4 ${className}`}>
      <section className="sms-viewer mx-auto" aria-label={title}>
        <header className="sms-header">
          <div>
            <div className="sms-eyebrow">Message history</div>
            <h1 className="sms-title">{title}</h1>
            <div className="sms-subtitle">
              {entries.reduce((count, item) => count + (item.type === 'message' ? 1 : 0), 0)} messages
              <span aria-hidden="true"> · </span>
              {entries.filter((item) => item.type === 'image').length} attachments
            </div>
          </div>
          <Badge bg="light" text="dark" className="sms-export-badge">
            SMS export
          </Badge>
        </header>

        <main className="sms-thread" aria-label="Conversation messages">
          {entries.map((entry) => {
            if (entry.type === 'date') {
              return (
                <div className="sms-date-row" key={entry.id}>
                  <span>{entry.date}</span>
                </div>
              );
            }

            if (entry.type === 'image') {
              return (
                <div className={`sms-message-row ${entry.side}`} key={entry.id}>
                  <button
                    type="button"
                    className="sms-attachment-button"
                    onClick={() => setSelectedImage(entry)}
                    aria-label={`Open image attachment ${entry.index}`}
                  >
                    <Image
                      src={entry.src}
                      alt={entry.alt || `Image attachment ${entry.index}`}
                      fluid
                      className="sms-attachment"
                    />
                    <span className="sms-attachment-caption">Image attachment</span>
                  </button>
                </div>
              );
            }

            return <MessageBubble key={entry.id} message={entry} />;
          })}
        </main>
      </section>

      <Modal
        show={Boolean(selectedImage)}
        onHide={() => setSelectedImage(null)}
        centered
        size="lg"
        contentClassName="sms-image-modal"
        aria-label="Image attachment preview"
      >
        <Modal.Header closeButton>
          <Modal.Title>Image attachment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <Image src={selectedImage.src} alt={selectedImage.alt || 'Conversation attachment'} fluid />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedImage(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

function MessageBubble({ message }) {
  return (
    <div className={`sms-message-row ${message.side}`}>
      <article className={`sms-bubble ${message.side} ${message.isReaction ? 'is-reaction' : ''}`}>
        <div className="sms-sender">{message.sender}</div>
        <div className="sms-message-text">{message.text}</div>
        {message.time && <time className="sms-time">{message.time}</time>}
      </article>
    </div>
  );
}

/** Convert the original export's ordered body children into date/message/media entries. */
function parseSmsExport(source) {
  if (typeof window === 'undefined' || !source) return [];

  const doc = new window.DOMParser().parseFromString(source, 'text/html');
  const entries = [];
  let currentDate = '';
  let imageIndex = 0;
  let id = 0;

  Array.from(doc.body.children).forEach((element) => {
    const classes = element.classList;

    if (classes.contains('date')) {
      currentDate = element.textContent.trim();
      entries.push({ type: 'date', date: currentDate, id: `date-${id++}` });
      return;
    }

    if (!classes.contains('messages')) return;

    const side = classes.contains('right') ? 'sent' : 'received';

    Array.from(element.children).forEach((child) => {
      if (child.tagName === 'IMG') {
        imageIndex += 1;
        entries.push({
          type: 'image',
          id: `image-${id++}`,
          date: currentDate,
          side,
          index: imageIndex,
          src: child.getAttribute('src') || '',
          alt: child.getAttribute('alt') || `Image attachment ${imageIndex}`,
        });
        return;
      }

      if (!child.classList.contains('bubble')) return;

      const sender = child.querySelector('strong')?.textContent.trim() ||
        (side === 'sent' ? 'Me' : 'Other participant');
      const time = child.querySelector('.time')?.textContent.trim() || '';
      const content = child.cloneNode(true);
      content.querySelector('strong')?.remove();
      content.querySelector('.time')?.remove();

      // Keep line breaks, text, emoji, and reaction quotations without injecting HTML.
      content.querySelectorAll('br').forEach((br) => br.replaceWith('\n'));
      const text = content.textContent
        .replace(/^[\s:：]+/, '')
        .replace(/[\u200a\u200b\u200c\u200d\ufeff]/g, '')
        .trim();

      entries.push({
        type: 'message',
        id: `message-${id++}`,
        date: currentDate,
        side,
        sender,
        time,
        text,
        isReaction: /(?:❤️|♥️|👍|👎|😂|‼️|‼|❗|❓|😮|😢|😡|💕|💯)\s*to\s*[“"]?/u.test(text),
      });
    });
  });

  return entries;
}
