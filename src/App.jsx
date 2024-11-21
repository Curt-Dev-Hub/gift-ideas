import { library } from "@fortawesome/fontawesome-svg-core"
import { faGifts, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import TopPageMessage from "./components/TopPageMessage"
import { Stack, Container, Row, Col } from "react-bootstrap"
import ButtonPink from "./components/ButtonPink"
import FeatureNavigation from "./components/FeatureNavigation"
import { NormalParagraphText } from "./components/NormalParagraphText"

// will integrate this with backend 
const authenticated = false

const isLoggedIn = authenticated ? "Log out" : "Login / Register"

// Add the icons to the library
library.add(faGifts)
library.add(faRightToBracket);

// Add featureNavigation components images and text content from this object
const featureCardContent = [
  {
    image: '/wallE.jpg',
    title: 'AI Gift Assistant',
    shortText: 'Discover the perfect gift with our AI-powered assistant. Personalized recommendations at your fingertips.'
  },
  {
    image: '/giftPic.jpg',
    title: 'Instant Gift',
    shortText: 'Let our AI recommend the perfect instant gift for your loved ones based on their age. Quick and easy gifting!'
  },
  {
    image: '/birthdayImg.jpg',
    title: 'Birthdays',
    shortText: 'Create and store a list of birthdays for your loved ones. Never forget a special day again.'
  }
];

export default function App() {
    return (
      <div id="home-container">
        <Stack direction="vertical" gap={3}>
          <TopPageMessage />
          <Container style={{ marginTop: "100px" }}>
            <Row>
              <Col>
                <h1
                  id="home-h1"
                  style={{
                    fontFamily: "'Seymour One', sans-serif",
                    fontWeight: "400",
                    color: "blueviolet",
                    textShadow: "8px 5px 3px #111",
                    transform: "skewX(-25deg)",
                    fontSize: "8.5rem",
                  }}
                >
                  Awesome Gift<br></br>Ideas
                </h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={true} style={{ textAlign: "center" }}>
                <ButtonPink text={isLoggedIn}>
                  <FontAwesomeIcon
                    id="login-icon"
                    icon="fa-solid fa-right-to-bracket"
                    style={{ position: "relative" }}
                  />
                </ButtonPink>
              </Col>
            </Row>
            <Row>
              <h2 style={{ margin: "60px 0 60px 0" }}>
                Gift Finding Support ✅
              </h2>
            </Row>
            <Row>
              <NormalParagraphText className="paragraphNormal" 
                textContent={
                  `Using our gift-finding application offers users a streamlined and personalized gift-selection 
                  experience, saving both time and effort. By leveraging advanced AI technology, the app provides 
                  tailored recommendations that align with the recipient's preferences and age, ensuring each gift is 
                  meaningful and thoughtful. Users can effortlessly manage important dates with the birthday reminder 
                  feature, making sure no special occasion is ever forgotten. 
                  Committing to our app guarantees a coherent and organized approach to gifting, 
                  transforming what can often be a stressful task into a delightful and efficient process.`
                }
              />
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <FeatureNavigation
                    image={featureCardContent[idx].image}
                    title={featureCardContent[idx].title}
                    shortText={featureCardContent[idx].shortText}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Link to={"/"}>
            <FontAwesomeIcon
              id="gifts-icon"
              title="Return To Home Logo"
              icon="gifts"
            />
          </Link>
        </Stack>
      </div>
    );
}