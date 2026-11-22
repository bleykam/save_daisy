import { Container, Row, Col, Alert} from "react-bootstrap";
import "./sms-bubbles.css";

/**
 * React-Bootstrap conversion of your Shayna Davies thread HTML.
 * Uses the same bubble styling you already have in sms-bubbles.css via:
 * - sms-chat / sms-divider / sms-row / sms-bubble / sms-meta / sms-text
 */
export default function SmsThreadShayna() {
  
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xl={9}>
          {/* Conversation header */}
          <Alert variant="info" className="text-center">
              <div className="fw-semibold">
                Conversation with Shayna Davies
              </div>
            </Alert>

          <div className="sms-chat" role="log" aria-label="Text message conversation">
            {/* Feb 4, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Feb 4, 2025</span>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  I think Penelope may have a UTI or something else wrong with her she is constantly squatting to
                  pee
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Nope she’s just tired of walking. We’ve had her checked out.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Oh. Ok</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">I think she's peeing blood now</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Whoa ok that’s weird. I’ll take her to the vet tomorrow. Dan should be back soon.
                </div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">He's just texted me</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Ok I texted him too.</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Ok yes I see.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">She's a very sweet dog. She was well behaved today</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">That’s great to hear. Thanks. He should be back soon.</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">{"❤️"} to “She's a very sweet dog. She was well behaved toda…”</div>
              </div>
            </div>

            {/* Jul 16, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Jul 16, 2025</span>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Also how do you not know how many nights I had you dog or that I have never charged you
                  $45/night for boarding
                </div>
              </div>
            </div>

            {/* Jul 21, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Jul 21, 2025</span>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Brittany, Penny is my dog. Please communicate with me directly moving forward. Also note you
                  are harassing me at this point. If you continue to contact me or have various non legal
                  authority contact me, my attorney will be in touch.
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  That includes animal rescue; this is not a legal group. You will need to hire a an attorney to
                  defend the X-rays you obtained illegally, if you intend to sue me over them, which you will
                  have to do if you expect to take action on my person property - Penny.
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Thanks, Shayna.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Dogs aren't property they're living creatures with feelings, but if you wanna play it this was
                  i've never once gotten in trouble for taking my friends car for a safety inspection
                </div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">And yes I have done that</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  The real question is why are you refusing to let your dog get the care she needs when there
                  are people offering to provide it for her
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Under New York State law, the dog is my property. That’s it. Beyond that, sue me, or my
                  attorney will be in touch. Thanks.
                </div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">For the lawsuit is your last name kim</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">No. Shayna Davies.</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Hope you’re ready for the counter suit Brittany Levyskam. Hope you can afford it on your dog
                  walking salary.
                </div>
              </div>
            </div>

            {/* Aug 18, 2025 */}
            <div className="sms-divider" aria-hidden="true">
              <span>Aug 18, 2025</span>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">
                  Brittany your lawsuit is addressed to the wrong person. Penny is not Dan’s dog. I’m going to
                  appear with him with proof of that and you will have to start again.
                </div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">I suggest you address your summons to the correct person.</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">That’s why I gave you my name.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">What's your address?</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Same as Dan’s.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">So you want me to send it to Dan's office again?</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">You and Dan are married, correct?</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">No.</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">We are not.</div>
              </div>
            </div>

            <div className="sms-row out">
              <div className="sms-bubble out">
                <div className="sms-meta">
                  <span className="sms-who">Me</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Then what's your address?</div>
              </div>
            </div>

            <div className="sms-row in">
              <div className="sms-bubble in">
                <div className="sms-meta">
                  <span className="sms-who">Shayna</span>
                  <span className="sms-time"></span>
                </div>
                <div className="sms-text">Just leave it. See you on the 18th.</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
SmsThreadShayna.displayName = "SmsThreadShayna";
