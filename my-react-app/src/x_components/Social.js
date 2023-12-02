import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (

    <ul className="list-group">
      <SocialItem
      // اول قوس عشان افتح جافاسكربت التاني بتاع الاوبجكت
        p={{
          media: "Facebook",
          id: "facebook",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png",
        }}

      />
      <SocialItem
        p={{
          media: "Youtube",
          id: "youtube",
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        }}

      />
      <SocialItem
        p={{
          media: "Instagram",
          id: "instagram",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        }}

      />
    </ul>
  );
}
export default Social;