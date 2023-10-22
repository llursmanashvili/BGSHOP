import React from "react";
import "./contact.css";
import "react-native";
import call from "react-native-phone-call/index";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Contact() {
  const triggercall = () => {
    const args = {
      number: " + 995 557 61 11 44", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <div className="contact">
      <div className="contact1">
        <div className="call">
          <p className="text-primary">დაგვიკავშირდით მარტივად</p>
          <button className="box text-warning mb-3" onClick={triggercall}>
            <MDBIcon className="icon" fas icon="phone" />
            დაგვირეკეთ
          </button>
          <button className="box">
            <a
              className="text-warning"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmrTFBVZRFjcJwdSDLJWbqkRZZBFVnMHRVGbgFwWwwzjDVdHbxrVztzbWMblmlnxnLljB"
            >
              <MDBIcon className="icon" fas icon="envelope" />
              მოგვწერეთ
            </a>
          </button>
        </div>
        <div className="direction">
          <p className="text-primary">მოგვძებნეთ მარტივად</p>
          <button className="box">
            <a
              className="text-warning"
              href="https://www.google.com/maps/dir//BG+-+%E1%83%A7%E1%83%95%E1%83%94%E1%83%9A%E1%83%90%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98+%E1%83%94%E1%83%A0%E1%83%97+%E1%83%A1%E1%83%98%E1%83%95%E1%83%A0%E1%83%AA%E1%83%94%E1%83%A8%E1%83%98,+%E1%83%A0%E1%83%A3%E1%83%A1%E1%83%97%E1%83%90%E1%83%95%E1%83%94%E1%83%9A%E1%83%98%E1%83%A1+40+%E1%83%A5.+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98,+%E1%83%93%E1%83%90%E1%83%91%E1%83%90,+0181/@41.6980169,44.6987347,17z/data=!4m17!1m7!3m6!1s0x4044751211a98879:0x7869baa384a5a3e8!2zQkcgLSDhg6fhg5Xhg5Thg5rhg5Dhg6Thg5Thg6Dhg5gg4YOU4YOg4YOXIOGDoeGDmOGDleGDoOGDquGDlOGDqOGDmA!8m2!3d41.6980169!4d44.7013096!16s%2Fg%2F11q3cwcw49!4m8!1m0!1m5!1m1!1s0x4044751211a98879:0x7869baa384a5a3e8!2m2!1d44.7013096!2d41.6980169!3e3"
            >
              <MDBIcon className="icon" fas icon="map-marked-alt" />
              გვეწვიეთ
            </a>
          </button>
        </div>
      </div>

      <p className="schedule">
        <MDBIcon className="text-primary " far icon="calendar-alt" />
        <p className="text-primary pt-4">სამუშაო დღეები</p>
        <p className="text-warning"> ორშაბათი: 9:00 AM – 8:00 PM </p>
        <p className="text-warning"> სამშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> ოთხშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> ხუთშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> პარასკევი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> შაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> კვირა: 9:00 AM – 8:00 PM</p>
      </p>
    </div>
  );
}
