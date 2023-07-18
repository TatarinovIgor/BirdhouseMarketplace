import React, { useEffect, useState } from 'react';

const html_template = "<html lang=\"en\" class=\"wf-barlow-n7-inactive wf-lato-n4-inactive wf-montserratalternates-n8-inactive wf-poppins-n4-inactive wf-poppins-n5-inactive wf-poppins-n6-inactive wf-poppins-n7-inactive wf-poppins-i8-inactive wf-poppins-i4-inactive wf-barlow-n5-inactive wf-inactive\" style=\"height: 100%; --color_primary_default: rgba(2, 5, 211, 1); --color_primary_default_rgb: 2,5,211; --color_primary_contrast_default: rgba(255, 255, 255, 1); --color_primary_contrast_default_rgb: 255,255,255; --color_text_default: rgba(9, 23, 71, 1); --color_text_default_rgb: 9,23,71; --color_surface_default: rgba(255, 255, 255, 1); --color_surface_default_rgb: 255,255,255; --color_background_default: rgba(255, 255, 255, 0); --color_background_default_rgb: 255,255,255; --color_destructive_default: rgba(255, 0, 0, 1); --color_destructive_default_rgb: 255,0,0; --color_success_default: rgba(23, 219, 78, 1); --color_success_default_rgb: 23,219,78; --color_alert_default: rgba(250, 181, 21, 1); --color_alert_default_rgb: 250,181,21; --font_default: &quot;Lato&quot;;\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n" +
    "  <title>Withdraw Success</title>\n" +
    "  <meta name=\"referrer\" content=\"origin\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Barlow:500%7CBarlow:700%7CLato%7CLato:regular%7CLato:regular%7CMontserrat+Alternates:800%7CPoppins:regular%7CPoppins:500%7CPoppins:600%7CPoppins:700%7CPoppins:800italic%7CPoppins:italic%7CPoppins:regular\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://birdhouse-styles.s3.amazonaws.com/style.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://d2tf8y1b8kxrzw.cloudfront.net/serve_files/airalert/jquery.toast.min.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body style=\"height: 100%; display: flex; flex-direction: column;\" data-new-gr-c-s-check-loaded=\"14.1114.0\" data-gr-ext-installed=\"\">\n" +
    "<div class=\"main-page bubble-element Page bubble-r-container flex column\" style=\"width: 100%; margin-right: auto; margin-left: auto; position: relative; z-index: 1; min-height: max(0px, 100%); height: max-content; flex-shrink: 0; justify-content: flex-start; opacity: 1;\">\n" +
    "\n" +
    "  <!-- Header -->\n" +
    "  <div class=\"bubble-element CustomElement bubble-r-container flex row\" id=\"header\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 1; min-height: 80px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: center; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 25px 0px; opacity: 1;\">\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 15; align-self: center; min-width: 300px; max-width: 1180px; order: 3; min-height: 0px; width: 300px; flex-grow: 1; height: max-content; margin: 0px 10px; justify-content: space-between; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; opacity: 1;\">\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row clickable-element\" style=\"z-index: 2; align-self: center; min-width: 82px; max-width: 82px; order: 1; min-height: 28px; width: 82px; flex-grow: 1; height: max-content; margin: 0px; justify-content: center; overflow: visible; border-radius: 0px; opacity: 1; cursor: pointer;\" onclick=\"location.href='landing_'\">\n" +
    "        <div class=\"bubble-element Text\" style=\"align-self: flex-start; min-width: 74px; max-width: 74px; order: 1; min-height: 21px; width: 74px; flex-grow: 1; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: &quot;Montserrat Alternates&quot;; font-size: 40px; font-weight: 800; color: rgb(3, 180, 198); letter-spacing: -5px; line-height: 1.5; border-radius: 0px; opacity: 1;\"><font color=\"#00ffff\">B</font><font color=\"#000000\">H</font></div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container relative\" style=\"z-index: 4; align-self: center; min-width: 0px; max-width: 394px; order: 2; min-height: 40px; width: 0px; flex-grow: 1; height: max-content; margin: 0px 10px; overflow: visible; border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); border-radius: 10px; padding: 0px 10px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 2; place-self: center start; min-width: 25px; max-width: 25px; min-height: 23px; max-height: 23px; width: 25px; height: 23px; margin: 0px 14px 0px 0px; overflow: visible; border-radius: 0px; padding: 0px; opacity: 1; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387433266x621007601971848000/search.svg&quot;);\"></div>\n" +
    "        <input type=\"input\" class=\"bubble-element Input\" placeholder=\"Search ads, usernames, categories\" maxlength=\"\" style=\"z-index: 3; place-self: center end; min-width: 0px; max-width: 337px; min-height: 40px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px; border: none; background-color: transparent; border-radius: 0px; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row clickable-element\" style=\"z-index: 4; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1; cursor: pointer;\" ></div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 5; align-self: center; min-width: 0px; order: 3; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; justify-content: center; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 3; align-self: center; min-width: 0px; order: 3; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 20px 0px 0px; justify-content: center; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Text clickable-element\" id=\"\" style=\"z-index: 2; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 20px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\" onclick=\"location.href='explore_bloggers'\">Bloggers</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" id=\"\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 20px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\" onclick=\"location.href='explore_advertisers'\">Advertisers</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" id=\"\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; order: 4; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 20px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\" onclick=\"location.href='dashboard#create'\">Create</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" id=\"\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 20px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\" onclick=\"location.href='about'\">About us</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" id=\"gradient-text\" style=\"z-index: 3; align-self: flex-start; min-width: 83px; order: 6; min-height: 0px; width: 83px; flex-grow: 1; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\">Contact us</div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container fixed clickable-element\" style=\"z-index: 4; align-self: center; min-width: 40px; max-width: 40px; order: 4; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; overflow: visible; border-radius: 100px; padding: 0px; opacity: 1; cursor: pointer; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg&quot;);\" onclick=\"location.href='dashboard'\" ></div>\n" +
    "        <div class=\"bubble-element Text\" style=\"visibility: hidden; z-index: 4; align-self: center; min-width: 83px; order: 5; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 0px 0px 20px; display: none;\"></div>\n" +
    "        <div class=\"bubble-element Text clickable-element\" id=\"gradient-text\" style=\"z-index: 5; align-self: center; min-width: 83px; order: 6; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 0px 0px 20px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(33, 33, 33); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer; transition: color 300ms linear 0s;\" onclick=\"location.href='deposit'\"><p id=\"UserBalance\"></p> </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 7; align-self: center; min-width: 0px; order: 4; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; display: none; justify-content: space-between;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 4; align-self: center; min-width: 25px; max-width: 25px; order: 1; min-height: 23px; max-height: 23px; width: 25px; flex-grow: 1; height: 23px; margin: 0px 14px 0px 0px;\"></div>\n" +
    "        <div class=\"bubble-element Image\" style=\"z-index: 6; align-self: center; min-width: 18px; max-width: 18px; order: 2; min-height: 14px; max-height: 14px; width: 18px; flex-grow: 1; height: 14px; margin: 0px;\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Content -->\n" +
    "  <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 2; align-self: center; min-width: 300px; max-width: 560px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 20px); margin: 150px 10px 50px; justify-content: flex-start; overflow: visible; background-color: rgba(255, 255, 255, 0.8); border-radius: 15px; padding: 0px 10px; opacity: 1;\">\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 12; align-self: center; min-width: 0px; max-width: 370px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 2; align-self: center; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 38px 0px 40px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 28px; font-weight: 700; color: rgb(0, 0, 0); line-height: 1.5; border-radius: 0px; opacity: 1;\">Withdraw successful</div>\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 13; align-self: center; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 38px 0px 40px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 18px; font-weight: 400; color: rgb(0, 0, 0); text-align: center; line-height: 1.5; border-radius: 0px; opacity: 1;\">Thank you for using BirdHouse</div>\n" +
    "      <button class=\"bubble-element Button clickable-element\" style=\"z-index: 7; align-self: center; min-width: 0px; max-width: 150px; order: 11; min-height: 50px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 30px; padding: 0px; cursor: pointer; background: linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%); border: none; text-align: center; font-family: Poppins; font-size: 16px; font-weight: 500; color: rgb(255, 255, 255); letter-spacing: 1px; line-height: 1; border-radius: 5px; opacity: 1; transition: background 200ms ease 0s;\">Back home</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Footer starts here --->\n" +
    "  <div class=\"bubble-element CustomElement bubble-r-container flex column\" style=\"z-index: 6; align-self: center; min-width: 0px; max-width: 1200px; order: 8; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-top: 1px solid rgb(246, 246, 246); border-radius: 0px; opacity: 1;\" id=\"\">\n" +
    "    <div class=\"bubble-element CustomElement bubble-r-container flex column\" style=\"z-index: 3; align-self: center; min-width: 0px; max-width: 1200px; order: 6; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-top: 1px solid rgb(246, 246, 246); border-radius: 0px; opacity: 1;\">\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 9; align-self: flex-start; min-width: 300px; max-width: 1180px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 20px); margin: 46px 10px 36px; justify-content: space-between; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 8; align-self: stretch; min-width: 280px; max-width: 300px; order: 1; min-height: 0px; width: 280px; flex-grow: 1; height: auto; margin: 0px 0px 30px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; max-width: 266px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 30px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.1px; line-height: 1.5; border-radius: 0px; opacity: 1;\">BirdHouse</div>\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "            <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 2; align-self: flex-start; min-width: 35px; max-width: 35px; order: 1; min-height: 35px; max-height: 35px; width: 35px; flex-grow: 1; height: 35px; margin: 0px 10px 0px 0px; overflow: visible; border-radius: 0px; padding: 0px; opacity: 1; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387110450x225588365466711900/Group%20252.svg&quot;);\"></div>\n" +
    "            <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 3; align-self: flex-start; min-width: 35px; max-width: 35px; order: 2; min-height: 35px; max-height: 35px; width: 35px; flex-grow: 1; height: 35px; margin: 0px 10px 0px 0px; overflow: visible; border-radius: 0px; padding: 0px; opacity: 1; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387114934x751236047018641900/Group%20253.svg&quot;);\"></div>\n" +
    "            <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 3; align-self: flex-start; min-width: 35px; max-width: 35px; order: 3; min-height: 35px; max-height: 35px; width: 35px; flex-grow: 1; height: 35px; margin: 0px 10px 0px 0px; overflow: visible; border-radius: 0px; padding: 0px; opacity: 1; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387119622x631156546568235800/Group%20254.svg&quot;);\"></div>\n" +
    "            <div class=\"bubble-element Group bubble-r-container fixed\" style=\"z-index: 3; align-self: flex-start; min-width: 35px; max-width: 35px; order: 4; min-height: 35px; max-height: 35px; width: 35px; flex-grow: 1; height: 35px; margin: 0px; overflow: visible; border-radius: 0px; padding: 0px; opacity: 1; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-size: cover; background-image: url(&quot;https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647453372274x846150973190001900/Group%20255%20%281%29.svg&quot;);\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 6; align-self: stretch; min-width: 280px; max-width: 300px; order: 2; min-height: 0px; width: 280px; flex-grow: 1; height: auto; margin: 0px 0px 30px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <h3 class=\"bubble-element Text\" style=\"z-index: 2; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 18px; font-weight: 600; color: rgb(0, 0, 0); letter-spacing: 0.2px; line-height: 1; border-radius: 0px; opacity: 1;\">Navigation</h3>\n" +
    "          <div class=\"bubble-element Text clickable-element\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 18px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">About Us</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" style=\"z-index: 5; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 18px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1.5; border-radius: 0px; opacity: 1; cursor: pointer;\" onclick=\"location.href='contact_us'\">Contact Us</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" style=\"z-index: 5; align-self: flex-start; min-width: 0px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 18px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Terms &amp; Conditions</div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" style=\"z-index: 5; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 5px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Privacy Policy</div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 5; align-self: stretch; min-width: 280px; max-width: 300px; order: 3; min-height: 0px; width: 280px; flex-grow: 1; height: auto; margin: 0px 0px 30px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <h3 class=\"bubble-element Text\" style=\"z-index: 6; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 18px; font-weight: 600; color: rgb(0, 0, 0); letter-spacing: 0.2px; line-height: 1; border-radius: 0px; opacity: 1;\">Contact Us</h3>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 6; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 18px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1;\">+1 23 456 789 123</div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 6; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 5px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1;\">itatarinov@gmail.com</div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 7; align-self: stretch; min-width: 280px; max-width: 300px; order: 4; min-height: 0px; width: 280px; flex-grow: 1; height: auto; margin: 0px 0px 30px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <h3 class=\"bubble-element Text\" style=\"z-index: 7; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 18px; font-weight: 600; color: rgb(0, 0, 0); letter-spacing: 0.2px; line-height: 1; border-radius: 0px; opacity: 1;\">Soon available</h3>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 7; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 23px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1;\">Vulputate hac felis morbi egestas.</div>\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 6; align-self: center; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: space-between; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "            <div class=\"bubble-element Image\" style=\"z-index: 7; align-self: center; min-width: 132px; max-width: 45%; order: 3; width: 132px; flex-grow: 1; height: max-content; margin: 0px; border-radius: 0px; opacity: 1;\">\n" +
    "              <img alt=\"\" src=\"https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386772268x850938693558971400/Frame%20670.svg\" style=\"position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; border-radius: 0px;\">\n" +
    "              <div style=\"position: relative; padding-top: 34.0136%;\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element Image\" style=\"z-index: 6; align-self: center; min-width: 146px; max-width: 45%; order: 4; width: 146px; flex-grow: 1; height: max-content; margin: 0px; border-radius: 0px; opacity: 1;\">\n" +
    "              <img alt=\"\" src=\"https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386777421x635310095370716000/Frame%20669.svg\" style=\"position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; border-radius: 0px;\">\n" +
    "              <div style=\"position: relative; padding-top: 29.8137%;\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- Sticky Header -->\n" +
    "<div class=\"bubble-element GroupFocus bubble-r-container relative\" style=\"visibility: hidden; display: none; position: absolute; min-width: 0px; min-height: 500px; height: initial; right: 20px; bottom: 20px; z-index: 2019; margin-right: auto; overflow-y: auto;\">\n" +
    "  <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 5; place-self: start center; min-width: 0px; min-height: 0px; width: calc(100% - 20px); height: max-content; margin: 25px 20px 0px 0px; justify-content: flex-start;\">\n" +
    "    <div class=\"bubble-element HTML\" style=\"visibility: hidden; z-index: 16; align-self: flex-start; min-width: 0px; max-width: 1px; order: 2; min-height: 0px; max-height: 1px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; display: none;\">\n" +
    "      <style>\n" +
    "        #gradient-text {\n" +
    "          background: linear-gradient(94.7deg, #2D2DFF -29.74%, #00D4FF 121.45%, #00D4FF 121.45%);\n" +
    "          -webkit-background-clip: text;\n" +
    "          -webkit-text-fill-color: transparent;\n" +
    "          background-clip: text;\n" +
    "          text-fill-color: transparent;\n" +
    "        }\n" +
    "        #burger-bar{\n" +
    "          height: 100vh !important;\n" +
    "          left: inherit !important;\n" +
    "          right: 0 !important;\n" +
    "          top: 0 !important;\n" +
    "          width: 100% !important;\n" +
    "          overflow-y: scroll !important;\n" +
    "          position: fixed !important;\n" +
    "        }\n" +
    "        #burger-bar::-webkit-scrollbar {\n" +
    "          width: 0px;\n" +
    "        }\n" +
    "        #scrolling{\n" +
    "          overflow : scroll !important;\n" +
    "        }\n" +
    "        #scrolling::-webkit-scrollbar {\n" +
    "          height: 0px !important;\n" +
    "          width: 0px !important;\n" +
    "        }\n" +
    "        #RG{\n" +
    "          overflow: inherit !important;\n" +
    "        }\n" +
    "        #position-sticky{\n" +
    "          top: 100px !important;\n" +
    "          position: sticky;\n" +
    "        }\n" +
    "        @media only screen and (max-width: 410px) {\n" +
    "          #focus {\n" +
    "            left: auto;\n" +
    "            max-width: 100%;\n" +
    "            width: calc(100% - 20px);\n" +
    "            margin: 0px 10px;\n" +
    "          }\n" +
    "        }\n" +
    "        #repeating-center{\n" +
    "          max-width: fit-content !important;\n" +
    "        }\n" +
    "        #repeating-scroll::-webkit-scrollbar {\n" +
    "          width: 2px;\n" +
    "        }\n" +
    "        #repeating-scroll::-webkit-scrollbar-track {\n" +
    "          background: #ffffff;\n" +
    "        }\n" +
    "        #repeating-scroll::-webkit-scrollbar-thumb {\n" +
    "          background: linear-gradient(180deg, #2D2DFF 0.38%, #00D4FF 99.62%, #00D4FF 99.62%);\n" +
    "        }\n" +
    "        .jquery-slider.ui-slider.ui-corner-all.ui-widget.ui-widget-content.ui-slider-horizontal{\n" +
    "          background: #DEDEDE !important;\n" +
    "          border-color: #DEDEDE !important;\n" +
    "          height: 1px !important;\n" +
    "        }\n" +
    "        .ui-slider-range.ui-corner-all.ui-widget-header{\n" +
    "          top: -1px !important;\n" +
    "          height: 2px !important;\n" +
    "          background: linear-gradient(94.7deg, #2D2DFF -29.74%, #00D4FF 121.45%, #00D4FF 121.45%) !important;\n" +
    "        }\n" +
    "        .ui-slider-handle.ui-corner-all.ui-state-default{\n" +
    "          border-color: #2D2DFF !important;\n" +
    "          border-radius: 100% !important;\n" +
    "          border-width: 1.5px !important;\n" +
    "          top: -7px !important;\n" +
    "          height: 14px !important;\n" +
    "          width: 14px !important;\n" +
    "          background: rgb(255, 255, 255) !important;\n" +
    "        }\n" +
    "        #floating-stiky{\n" +
    "          position: sticky !important;\n" +
    "          top: 100px;\n" +
    "        }\n" +
    "        #fixed-bottom{\n" +
    "          position: fixed !important;\n" +
    "          bottom: 0;\n" +
    "        }\n" +
    "        #header{\n" +
    "          position: sticky;\n" +
    "          top: 0px;\n" +
    "        }\n" +
    "      </style>\n" +
    "    </div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 2; align-self: flex-end; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-end; min-width: 0px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: flex-end; min-width: 0px; order: 11; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: flex-end; min-width: 0px; order: 12; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: flex-end; min-width: 0px; order: 13; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 18; align-self: flex-end; min-width: 0px; order: 14; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 18; align-self: flex-end; min-width: 0px; order: 15; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 19; align-self: flex-end; min-width: 0px; order: 16; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 20; align-self: flex-end; min-width: 0px; order: 17; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 21; align-self: flex-end; min-width: 0px; order: 18; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "    <div class=\"bubble-element Text\" style=\"z-index: 23; align-self: flex-end; min-width: 0px; order: 19; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px;\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"bubble-element Group bubble-r-container relative\" style=\"z-index: 28; place-self: start; min-width: 24px; max-width: 24px; min-height: 24px; max-height: 24px; width: 24px; height: 24px; margin: 20px 0px 0px 20px;\">\n" +
    "    <div class=\"bubble-element HTML\" style=\"z-index: 2; place-self: center; min-width: 24px; min-height: 24px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\">\n" +
    "      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <path d=\"M16.7437 8.49378C17.0854 8.15206 17.0854 7.59802 16.7437 7.25629C16.402 6.91457 15.8479 6.91457 15.5062 7.25629L12 10.7625L8.49379 7.25629C8.15207 6.91457 7.59803 6.91457 7.2563 7.25629C6.91458 7.59802 6.91458 8.15206 7.2563 8.49378L10.7625 12L7.25629 15.5062C6.91457 15.8479 6.91457 16.402 7.25629 16.7437C7.59801 17.0854 8.15206 17.0854 8.49378 16.7437L12 13.2375L15.5062 16.7437C15.8479 17.0854 16.402 17.0854 16.7437 16.7437C17.0854 16.402 17.0854 15.8479 16.7437 15.5062L13.2375 12L16.7437 8.49378Z\" fill=\"#212121\"></path>\n" +
    "      </svg>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "<script>\n" +
    "  window.onload = function() {\n" +
    "    // Get the value\n" +
    "    var Balance = \"0\";\n" +
    "\n" +
    "    // Display the value on the page\n" +
    "    var outputBalance = document.getElementById('UserBalance');\n" +
    "    outputBalance.innerText = \"Balance: \" + Balance;\n" +
    "\n" +
    "  };\n" +
    "</script>\n" +
    "</html>\n"

const WithdrawSuccess = () => {
    return <div dangerouslySetInnerHTML={{ __html: html_template }} />;
};

export default WithdrawSuccess;