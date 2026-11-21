import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./sms-bubbles.css";

/**
 * React-Bootstrap render of your HTML SMS snippet.
 * Uses your existing sms-bubbles.css classes for bubble styling.
 */
export default function SmsBackupThread() {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xl={9}>
          <div className="sms-chat" role="log" aria-label="Text message conversation">
            {/* May 23, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>May 23, 2025</span>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">6:19 PM</span>
                </div>
                <div className="sms-text">
                  Hi! I really don't think Penelope is ok. She's constantly peeing and it frequently contains
                  blood. I used some urine test strips I had for Godzilla then video chatted with my aunt who is
                  a vet and she really thinks Penelope needs to be seen. Her thought was she probably has crystals
                  and it's uncomfortable for her. I can take Penelope to the vet tomorrow if you're ok with it
                </div>
              </div>
            </div>

            {/* May 27, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>May 27, 2025</span>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">6:36 PM</span>
                </div>
                <div className="sms-text">Do you know about what time you're picking Penny up tonight</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Dan And Penelope</span>
                  <span className="sms-time">6:53 PM</span>
                </div>
                <div className="sms-text">Is around 8pm ok?</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Dan And Penelope</span>
                  <span className="sms-time">6:54 PM</span>
                </div>
                <div className="sms-text">
                  {"❤️"} to “Hi! I really don't think Penelope is ok. She's constantly peeing and it frequently contains
                  blood. I used some urine test strips I had for Godzilla then video chatted with my aunt in Missouri who
                  is a vet and she really thinks Penelope needs to be seen. Her thought was she probably has crystals and
                  it's uncomfortable for her. I can take Penelope to the vet tomorrow if you're ok with it”
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Dan And Penelope</span>
                  <span className="sms-time">7:35 PM</span>
                </div>
                <div className="sms-text">Hi Brittany I’m downstairs if you’re ready to bring Penny down</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">7:36 PM</span>
                </div>
                <div className="sms-text">{"👍"} to “Hi Brittany I’m downstairs if you’re ready to bring Penny down”</div>
              </div>
            </div>

            {/* Jul 8, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Jul 8, 2025</span>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Dan And Penelope</span>
                  <span className="sms-time">7:17 PM</span>
                </div>
                <div className="sms-text">
                  Hi Brittany, can you take Penny from this Thursday morning to Sunday afternoon?
                </div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">8:19 PM</span>
                </div>
                <div className="sms-text">Yes</div>
              </div>
            </div>

            {/* Jul 10, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Jul 10, 2025</span>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Dan And Penelope</span>
                  <span className="sms-time">8:08 AM</span>
                </div>
                <div className="sms-text">Hi Brittany can we come by now?</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">8:15 AM</span>
                </div>
                <div className="sms-text">Sure 🙂</div>
              </div>
            </div>

            {/* Jul 13, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Jul 13, 2025</span>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time">6:12 PM</span>
                </div>
                <div className="sms-text">
                  Took your dog to the vet. She is not ok. She has and enlarged/round heart and a mass in her
                  stomach. I was told to take her to the emergency vet because she'll probably need surgery tomorrow
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
