import React, { useEffect, useState } from 'react';

const html_template = "<html lang=\"en\" class=\"wf-barlow-n5-active wf-barlow-n7-active wf-lato-n4-active wf-montserratalternates-n8-active wf-poppins-n4-active wf-poppins-n5-active wf-poppins-n6-active wf-poppins-n7-active wf-poppins-i8-active wf-poppins-i4-active wf-active\" style=\"height: 100%; --color_primary_default: rgba(2, 5, 211, 1); --color_primary_default_rgb: 2,5,211; --color_primary_contrast_default: rgba(255, 255, 255, 1); --color_primary_contrast_default_rgb: 255,255,255; --color_text_default: rgba(9, 23, 71, 1); --color_text_default_rgb: 9,23,71; --color_surface_default: rgba(255, 255, 255, 1); --color_surface_default_rgb: 255,255,255; --color_background_default: rgba(255, 255, 255, 0); --color_background_default_rgb: 255,255,255; --color_destructive_default: rgba(255, 0, 0, 1); --color_destructive_default_rgb: 255,0,0; --color_success_default: rgba(23, 219, 78, 1); --color_success_default_rgb: 23,219,78; --color_alert_default: rgba(250, 181, 21, 1); --color_alert_default_rgb: 250,181,21; --font_default: &quot;Lato&quot;;\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n" +
    "  <title>Product Page</title>\n" +
    "  <meta name=\"referrer\" content=\"origin\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Barlow:500%7CBarlow:700%7CLato%7CLato:regular%7CLato:regular%7CMontserrat+Alternates:800%7CPoppins:regular%7CPoppins:500%7CPoppins:600%7CPoppins:700%7CPoppins:800italic%7CPoppins:italic%7CPoppins:regular\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://birdhouse-styles.s3.amazonaws.com/style.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://d2tf8y1b8kxrzw.cloudfront.net/serve_files/airalert/jquery.toast.min.css\">\n" +
    "</head>\n" +
    "<body style=\"height: 100%; display: flex; flex-direction: column;\" data-new-gr-c-s-check-loaded=\"14.1114.0\" data-gr-ext-installed=\"\">\n" +
    "<img style=\"display: none;\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\">\n" +
    "<div class=\"main-page bubble-element Page bubble-r-container flex column\" style=\"width: 100%; margin-right: auto; margin-left: auto; position: relative; z-index: 1; min-height: max(0px, 100%); height: max-content; flex-shrink: 0; justify-content: flex-start; opacity: 1; background: url(&quot;https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648041880300x169707593944904420%2FGroup%25201000000957.png?w=1536&amp;h=&amp;auto=compress&amp;dpr=2&amp;fit=max&quot;) center top / cover repeat-y rgba(255, 255, 255, 0);\">\n" +
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
    "  <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 6; align-self: center; min-width: 0px; max-width: 1200px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 145px 0px 60px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 3; align-self: center; min-width: 320px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 60px; justify-content: space-between; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "      <div class=\"bubble-element Image\" style=\"z-index: 9; align-self: flex-start; min-width: 300px; max-width: 360px; order: 1; width: 300px; flex-grow: 1; height: max-content; margin: 0px 10px 20px; border-style: solid; border-width: 1px; border-color: rgb(9, 23, 71); border-radius: 20px; opacity: 1;\">\n" +
    "        <img alt=\"\" src=\"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688368811224x263609441702520770%2F14f6944b242eef8884e860f46c01a291.png?w=512&amp;h=512&amp;auto=compress&amp;dpr=2&amp;fit=crop&amp;q=100\" style=\"border-radius: 20px; position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; object-fit: contain;\">\n" +
    "        <div style=\"position: relative; padding-top: 100%;\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 13; align-self: center; min-width: 300px; order: 3; min-height: 0px; width: 300px; flex-grow: 1; height: max-content; margin: 0px 10px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Text clickable-element\" id=\"gradient-text\" style=\"z-index: 10; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 15px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 14px; font-weight: 600; color: rgb(5, 5, 5); line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer; word-break: break-word;\">Advertiser: IgorTatarinov</div>\n" +
    "        <div class=\"bubble-element Text\" id=\"\" style=\"z-index: 12; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 25px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 24px; font-weight: 600; color: rgb(0, 0, 0); line-height: 1; border-radius: 0px; opacity: 1; word-break: break-word;\">Costa Coffe</div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 20; align-self: flex-start; min-width: 0px; order: 3; min-height: 17px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 10px 0px 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 13; align-self: center; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 18px; font-weight: 500; color: rgb(123, 123, 123); line-height: 1; border-radius: 0px; opacity: 1;\">Category: </div>\n" +
    "          <div class=\"bubble-element Image clickable-element\" id=\"gradient-text\" style=\"align-self: flex-start; min-width: 0px; order: 2; min-height: 17px; width: 0px; flex-grow: 1; height: max-content; margin: 0px; border-radius: 0px; opacity: 1; cursor: pointer;\">\n" +
    "            <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" style=\"position: relative; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; border-radius: 0px;\">\n" +
    "            <div style=\"display: none;\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" id=\"gradient-text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 4; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 18px; font-weight: 500; color: rgb(123, 123, 123); line-height: 1; border-radius: 0px; opacity: 1; word-break: break-word;\"> Lifestyle</div>\n" +
    "          <div class=\"bubble-element Image\" style=\"align-self: flex-start; min-width: 48px; order: 5; width: 48px; flex-grow: 1; height: max-content; margin: 0px; border-radius: 0px; opacity: 1;\">\n" +
    "            <img alt=\"\" style=\"border-radius: 0px; position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; object-fit: contain;\" src=\"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617335996x289766229915394050%2Fsun.png?w=64&amp;h=64&amp;auto=compress&amp;dpr=2&amp;fit=max\">\n" +
    "            <div style=\"position: relative; padding-top: 100%;\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: flex-start; min-width: 0px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 15px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(123, 123, 123); line-height: 1; border-radius: 0px; opacity: 1;\">Price</div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 20; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 10px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Image\" style=\"z-index: 18; align-self: flex-start; min-width: 20px; max-width: 20px; order: 1; min-height: 32px; max-height: 32px; width: 20px; flex-grow: 1; height: 32px; margin: 0px 10px 0px 0px; border-radius: 0px; opacity: 1;\">\n" +
    "            <img alt=\"\" style=\"border-radius: 0px; position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; object-fit: contain;\" src=\"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=24&amp;h=38&amp;auto=compress&amp;dpr=2&amp;fit=max\">\n" +
    "            <div style=\"display: none;\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" id=\"\" style=\"z-index: 19; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 24px; font-weight: 600; color: rgb(0, 0, 0); line-height: 1; border-radius: 0px; opacity: 1; word-break: break-word;\">0</div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 21; align-self: flex-start; min-width: 0px; order: 6; min-height: 30px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; justify-content: flex-start; overflow: visible;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 14; align-self: center; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap;\"></div>\n" +
    "          <div class=\"bubble-element Text clickable-element\" style=\"z-index: 16; align-self: center; min-width: 0px; order: 2; min-height: 20px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 25; align-self: flex-start; min-width: 200px; order: 7; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 15px 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 7px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 16px; font-weight: 500; color: rgb(0, 0, 0); text-align: center; line-height: 1; border-radius: 0px; opacity: 1; word-break: break-word;\">Debug: current state is: 200000</div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 29; align-self: flex-start; min-width: 200px; order: 8; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 15px 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 7px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"visibility: hidden; z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 28; align-self: flex-start; min-width: 200px; max-width: 200px; order: 9; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 21; align-self: flex-start; min-width: 200px; max-width: 200px; order: 10; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 22; align-self: flex-start; min-width: 200px; max-width: 200px; order: 11; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 24; align-self: flex-start; min-width: 200px; max-width: 200px; order: 12; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 27; align-self: flex-start; min-width: 200px; max-width: 200px; order: 13; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 23; align-self: flex-start; min-width: 200px; max-width: 200px; order: 14; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 23; align-self: flex-start; min-width: 200px; max-width: 200px; order: 15; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 26; align-self: flex-start; min-width: 200px; max-width: 200px; order: 16; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 15px 0px 0px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 1; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 4; align-self: center; min-width: 300px; order: 2; min-height: 300px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 20px); margin: 0px 10px; justify-content: flex-start; overflow: visible; background-color: rgba(255, 255, 255, 0.7); border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); border-radius: 20px; opacity: 1;\">\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 8; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 50px); margin: 20px 25px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 6; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; padding: 0px 0px 25px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" id=\"scrolling\" style=\"z-index: 7; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "            <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 6; align-self: flex-start; min-width: 430px; order: 1; min-height: 0px; width: 430px; flex-grow: 1; height: max-content; margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "              <div class=\"bubble-element Text clickable-element\" id=\"gradient-text\" style=\"z-index: 2; align-self: flex-start; min-width: 0px; order: 1; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 35px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Description</div>\n" +
    "              <div class=\"bubble-element Text clickable-element\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; order: 2; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 35px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Price History</div>\n" +
    "              <div class=\"bubble-element Text clickable-element\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 3; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 35px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Details</div>\n" +
    "              <div class=\"bubble-element Text clickable-element\" style=\"z-index: 5; align-self: flex-start; min-width: 0px; order: 4; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 500; color: rgb(123, 123, 123); letter-spacing: 0.5px; line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer;\">Item Activity</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 8; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 24; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 25px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "            <div class=\"bubble-element Text\" id=\"\" style=\"z-index: 22; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 5px 0px 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: Poppins; font-size: 14px; font-weight: 600; color: rgb(123, 123, 123); line-height: 1; border-radius: 0px; opacity: 1;\">Created by </div>\n" +
    "            <div class=\"bubble-element Text clickable-element\" id=\"gradient-text\" style=\"z-index: 23; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 14px; font-weight: 700; color: rgb(123, 123, 123); line-height: 1; border-radius: 0px; opacity: 1; cursor: pointer; word-break: break-word;\">IgorTatarinov</div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 20; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: Poppins; font-size: 14px; font-weight: 400; color: rgb(123, 123, 123); line-height: 1.5; border-radius: 0px; opacity: 1; word-break: break-word;\"></div>\n" +
    "          <a class=\"bubble-element Link\" style=\"visibility: hidden; align-self: flex-start; min-width: 0px; order: 4; min-height: 20px; height: 20px; flex-grow: 1; width: calc(100% - 0px); margin: 0px 0px 30px; display: none;\"></a>\n" +
    "          <div class=\"bubble-element RepeatingGroup bubble-rg\" style=\"z-index: 8; align-self: center; min-width: 0px; order: 5; min-height: 50px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 30px; gap: 1px; grid-template-rows: repeat(1, minmax(max-content, auto)); grid-auto-columns: minmax(max-content, 44px); grid-auto-flow: column; overflow: auto; border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); border-radius: 15px; background-color: rgba(255, 255, 255, 0.7); opacity: 1;\" id=\"repeating-center\">\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-1\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left-style: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px; border-radius: 0px; opacity: 1;\">\n" +
    "                <img alt=\"\" src=\"https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647536889240x427907597683149250/website.svg\" style=\"border-radius: 0px; position: absolute; top: 0px; left: 0px; display: block; width: 100%; height: 100%; margin: 0px; object-fit: contain;\">\n" +
    "                <div style=\"position: relative; padding-top: 100%;\"></div>\n" +
    "              </div>\n" +
    "              <a class=\"bubble-element Link clickable-element\" target=\"_blank\" href=\"//birdhouse.technology\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px; white-space: pre-wrap; text-decoration: none; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: Barlow; font-size: 10px; font-weight: 500; color: rgba(2, 179, 199, 0); line-height: 0.5; border-radius: 0px; opacity: 1;\">\n" +
    "                <div>...edit me...</div>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-2\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-3\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-4\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-5\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-6\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-7\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-8\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-9\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-10\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-11\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-12\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-13\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-14\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-15\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-16\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-17\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-18\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-19\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-20\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-21\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-22\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-23\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-24\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element GroupItem bubble-r-container relative group-item entry-25\" style=\"box-sizing: content-box; min-width: 44px; border-top-style: none; border-left: 1px solid rgb(238, 238, 238); margin-left: -1px; display: none;\">\n" +
    "              <div class=\"bubble-element Image\" style=\"z-index: 2; place-self: center; min-width: 34px; max-width: 34px; width: 34px; height: max-content; margin: 5px;\"></div>\n" +
    "              <a class=\"bubble-element Link\" style=\"z-index: 3; place-self: center; min-width: 0px; min-height: 0px; width: calc(100% - 0px); height: calc(100% - 0px); margin: 0px;\"></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"visibility: hidden; z-index: 9; align-self: flex-start; min-width: 0px; max-width: 600px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-start; min-width: 280px; order: 1; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-start; min-width: 280px; order: 2; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"align-self: flex-start; min-width: 0px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-start; min-width: 280px; order: 1; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 23; align-self: flex-start; min-width: 280px; order: 2; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"align-self: flex-start; min-width: 0px; order: 5; min-height: 34px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-start; min-width: 280px; order: 1; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 23; align-self: flex-start; min-width: 280px; order: 2; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px 0px 20px;\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"align-self: flex-start; min-width: 0px; order: 6; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 22; align-self: flex-start; min-width: 280px; order: 1; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "            <div class=\"bubble-element Text\" style=\"z-index: 23; align-self: flex-start; min-width: 280px; order: 2; min-height: 0px; width: 280px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"visibility: hidden; z-index: 12; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 25; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: space-between; gap: 0px 20px;\">\n" +
    "            <select class=\"bubble-element Dropdown\" style=\"z-index: 14; align-self: center; min-width: 200px; max-width: 200px; order: 1; min-height: 25px; max-height: 25px; width: 200px; flex-grow: 1; height: 25px; margin: 0px 0px 20px;\"></select>\n" +
    "            <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 25; align-self: center; min-width: 0px; order: 2; min-height: 24px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 0px 20px; justify-content: space-between; gap: 0px 10px;\">\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 24; align-self: center; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 18; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"bubble-element chartjs-LineBarChart\" style=\"visibility: hidden; z-index: 6; align-self: flex-start; min-width: 120px; order: 4; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; height: 250px;\"></div>\n" +
    "          <div class=\"bubble-element chartjs-LineBarChart\" style=\"visibility: hidden; z-index: 15; align-self: flex-start; min-width: 120px; order: 5; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; height: 250px;\"></div>\n" +
    "          <div class=\"bubble-element chartjs-LineBarChart\" style=\"visibility: hidden; z-index: 16; align-self: flex-start; min-width: 120px; order: 6; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; height: 250px;\"></div>\n" +
    "          <div class=\"bubble-element chartjs-LineBarChart\" style=\"visibility: hidden; z-index: 17; align-self: flex-start; min-width: 120px; order: 7; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; height: 250px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"visibility: hidden; z-index: 13; align-self: flex-start; min-width: 0px; order: 13; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; display: none;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" id=\"scrolling\" style=\"z-index: 13; align-self: flex-start; min-width: 0px; order: 6; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 0px; opacity: 1;\">\n" +
    "          <div class=\"bubble-element Group bubble-r-container flex column\" style=\"visibility: hidden; z-index: 11; align-self: flex-start; min-width: 950px; order: 1; min-height: 100px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; justify-content: flex-start;\">\n" +
    "            <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 8; align-self: flex-start; min-width: 0px; order: 1; min-height: 60px; max-height: 60px; height: 60px; flex-grow: 1; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 2; align-self: center; min-width: 0px; order: 1; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 4; align-self: center; min-width: 0px; order: 3; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 5; align-self: center; min-width: 0px; order: 4; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 6; align-self: center; min-width: 0px; order: 5; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "              <div class=\"bubble-element Text\" style=\"z-index: 7; align-self: center; min-width: 0px; order: 6; min-height: 0px; width: 0px; flex-grow: 1; height: max-content; margin: 0px;\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"bubble-element RepeatingGroup\" style=\"visibility: hidden; z-index: 12; align-self: flex-start; min-width: 0px; order: 6; min-height: 100px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px;\"></div>\n" +
    "            <div class=\"bubble-element Text\" style=\"visibility: hidden; z-index: 9; align-self: flex-start; min-width: 0px; order: 7; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px; display: none;\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 7; align-self: center; min-width: 0px; max-width: 1200px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 155px 0px 176px; display: none; justify-content: space-between;\">\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 5; align-self: flex-start; min-width: 300px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 10px; justify-content: flex-start;\">\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 20px; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: flex-start; min-width: 20px; max-width: 20px; order: 1; min-height: 20px; max-height: 20px; width: 20px; flex-grow: 1; height: 20px; margin: 0px 5px 0px 0px;\">\n" +
    "          <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <path d=\"M6.30055 10.4167L8.56694 12.6831C8.81102 12.9272 8.81102 13.3229 8.56694 13.567C8.32286 13.8111 7.92714 13.8111 7.68306 13.567L4.34972 10.2336C4.10565 9.98957 4.10565 9.59384 4.34972 9.34977L7.68306 6.01643C7.92714 5.77235 8.32286 5.77235 8.56694 6.01643C8.81102 6.26051 8.81102 6.65624 8.56694 6.90032L6.30055 9.16671L14.375 9.16671C14.7202 9.16671 15 9.44653 15 9.79171C15 10.1369 14.7202 10.4167 14.375 10.4167L6.30055 10.4167Z\" fill=\"black\"></path>\n" +
    "          </svg>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 35px;\"></div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 26; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px 0px 42px; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 27; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; justify-content: flex-start;\"></div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 25; align-self: flex-start; min-width: 60px; max-width: 60px; order: 4; min-height: 62px; width: 60px; flex-grow: 1; height: max-content; margin: 0px 0px 0px 10px; display: none; justify-content: center;\">\n" +
    "          <div class=\"bubble-element HTML\" style=\"z-index: 18; align-self: center; min-width: 20px; max-width: 20px; order: 4; min-height: 20px; max-height: 20px; width: 20px; flex-grow: 1; height: 20px; margin: 0px;\">\n" +
    "            <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <g clip-path=\"url(#clip0_267_2288)\">\n" +
    "                <path d=\"M12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18Z\" fill=\"black\"></path>\n" +
    "                <path d=\"M12 10C12 8.89547 11.1046 8.00004 10 8.00004C8.89543 8.00004 8 8.89547 8 10C8 11.1046 8.89543 12.0001 10 12.0001C11.1046 12.0001 12 11.1046 12 10Z\" fill=\"black\"></path>\n" +
    "                <path d=\"M12 2.00001C12 0.895435 11.1046 0 10 0C8.89543 0 8 0.895435 8 2.00001C8 3.10459 8.89543 4.00003 10 4.00003C11.1046 4.00003 12 3.10459 12 2.00001Z\" fill=\"black\"></path>\n" +
    "              </g>\n" +
    "              <defs>\n" +
    "                <clipPath id=\"clip0_267_2288\">\n" +
    "                  <rect width=\"20\" height=\"20\" fill=\"white\"></rect>\n" +
    "                </clipPath>\n" +
    "              </defs>\n" +
    "            </svg>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 27; align-self: flex-start; min-width: 0px; order: 4; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 29; align-self: center; min-width: 555px; max-width: 555px; order: 2; min-height: 200px; width: 555px; flex-grow: 1; height: max-content; margin: 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 28; align-self: flex-start; min-width: 555px; max-width: 555px; order: 1; min-height: 35px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 555px; margin: 0px 0px 5px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 19; align-self: flex-start; min-width: 555px; max-width: 555px; order: 2; min-height: 44px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 555px; margin: 0px 0px 25px;\"></div>\n" +
    "          <textarea class=\"bubble-element MultiLineInput\" style=\"z-index: 30; align-self: flex-start; min-width: 555px; max-width: 555px; order: 4; min-height: 200px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 555px; margin: 0px;\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 28; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Image\" style=\"z-index: 2; align-self: flex-start; min-width: 257px; max-width: 257px; order: 1; width: 257px; flex-grow: 1; height: max-content; margin: 0px 20px 20px 0px;\"></div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 29; align-self: center; min-width: 0px; order: 3; min-height: 53px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 28; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 25px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 19; align-self: flex-start; min-width: 0px; max-width: 269px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"visibility: hidden; z-index: 29; align-self: flex-start; min-width: 0px; order: 6; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; display: none; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 2; align-self: flex-start; min-width: 180px; max-width: 180px; order: 1; min-height: 0px; width: 180px; flex-grow: 1; height: max-content; margin: 0px 20px 0px 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Image\" style=\"z-index: 2; align-self: flex-start; min-width: 0px; max-width: 180px; order: 1; width: 0px; flex-grow: 1; height: max-content; margin: 15px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 29; align-self: center; min-width: 0px; order: 2; min-height: 53px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 28; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 25px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 19; align-self: flex-start; min-width: 0px; max-width: 299px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 30; align-self: flex-start; min-width: 150px; max-width: 150px; order: 11; min-height: 54px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 150px; margin: 20px 0px; justify-content: center;\">\n" +
    "        <div class=\"bubble-element HTML\" style=\"z-index: 2; align-self: center; min-width: 24px; max-width: 24px; order: 2; min-height: 24px; max-height: 24px; width: 24px; flex-grow: 1; height: 24px; margin: 0px 10px 0px 0px;\">\n" +
    "          <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <path d=\"M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z\" fill=\"white\"></path>\n" +
    "          </svg>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Text\" style=\"z-index: 17; align-self: center; min-width: 0px; order: 3; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"bubble-element Group bubble-r-container flex column\" style=\"z-index: 8; align-self: flex-start; min-width: 300px; max-width: 380px; order: 2; min-height: 0px; width: 300px; flex-grow: 1; height: max-content; margin: 0px 10px; justify-content: flex-start;\">\n" +
    "      <div class=\"bubble-element Image\" style=\"z-index: 7; align-self: center; min-width: 300px; max-width: 350px; order: 1; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px;\"></div>\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 2; align-self: flex-start; min-width: 0px; order: 2; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 15px 0px;\"></div>\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 3; align-self: flex-start; min-width: 0px; order: 3; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 31px;\"></div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 4; align-self: flex-start; min-width: 0px; order: 5; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 31px; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 20; align-self: flex-start; min-width: 0px; order: 1; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px 10px 0px 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 13; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 16; align-self: flex-start; min-width: 0px; order: 2; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"bubble-element Image\" style=\"z-index: 17; align-self: flex-start; min-width: 4px; max-width: 4px; order: 4; min-height: 4px; max-height: 4px; width: 4px; flex-grow: 1; height: 4px; margin: 5px 10px 0px 0px;\"></div>\n" +
    "        <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 21; align-self: flex-start; min-width: 0px; order: 5; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px; justify-content: flex-start;\">\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 14; align-self: flex-start; min-width: 0px; order: 1; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "          <div class=\"bubble-element Text\" style=\"z-index: 16; align-self: flex-start; min-width: 0px; order: 2; min-height: 17px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"bubble-element Text\" style=\"z-index: 5; align-self: flex-start; min-width: 0px; order: 6; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 15px;\"></div>\n" +
    "      <div class=\"bubble-element Group bubble-r-container flex row\" style=\"z-index: 6; align-self: flex-start; min-width: 0px; order: 8; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: auto; margin: 0px 0px 25px; justify-content: flex-start;\">\n" +
    "        <div class=\"bubble-element Image\" style=\"z-index: 18; align-self: flex-start; min-width: 32px; max-width: 32px; order: 1; min-height: 32px; max-height: 32px; width: 32px; flex-grow: 1; height: 32px; margin: 0px 10px 0px 0px;\"></div>\n" +
    "        <div class=\"bubble-element Text\" style=\"z-index: 19; align-self: center; min-width: 0px; order: 2; min-height: 0px; width: max-content; flex-grow: 0; height: max-content; margin: 0px;\"></div>\n" +
    "      </div>\n" +
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
    "</body>\n" +
    "</html>"

const ProductPage = () => {
    return <div dangerouslySetInnerHTML={{ __html: html_template }} />;
};

export default ProductPage;