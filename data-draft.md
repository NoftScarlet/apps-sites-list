
Link: piano.uottawa.ca/apps
Description: This page. A list for PianoLab sites and applications.
SSG from JSON

Link: piano.uottawa.ca 
Description: PianoLab's main website. Find everything you want to know about the lab here!
Location: cws-p103.intra.uottawa.ca, /var/www/html/pianolab. 
Type: Static website
Implementation: WordPress
Plan: Migrate to Flatfile CMS (Grav) and SSG (Gatsby)
Source Code:

Link: piano.uottawa.ca/mwc 
Description: Main website of Musician Wellness Centre. 
Location: cws-p103.intra.uottawa.ca, /var/www/html/pianolab/mwc 
Type: Static website 
Implementation: Plan HTML, CSS and JS
Plan: Migrate to Flatfile CMS (Grav) and SSG (Gatsby)
Source Code:

Link: piano.uottawa.ca/ovl
Description: Online Video Library (for prof.Comeau's course only) and Research Survey management
Type: Static website and web application that gathers anonymous user information
Plan: Split out the research survey system. Use Google sheets and Apps script as backend solution.
piano.uottawa.ca/ovl
Source Code:


Link: piano.uottawa.ca/apps/music-reading-test
Description: 
Type: Web Application
Implementation: JS, React
Source Code:



Link: piano.uottawa.ca/apps/knot-tying-suturing
Description:  
Type: A web application that gathers information on how user played a video. The data will be stored both on the local machine and on a google spreadsheet.
Implementation: JS, Google Apps Script
Plan: Migrate from OVL; Is there a way to automate recording?
Link: piano.uottawa.ca/apps/jumping-ball
Link: piano.uottawa.ca/apps/midi-analyzer
Link: piano.uottawa.ca/apps/keydown-counter
Link: piano.uottawa.ca/apps/midi-recorder
Link: piano.uottawa.ca/apps/research-survey
Link: piano.uottawa.ca/apps/record-with-youtube-live
Link: piano.uottawa.ca/apps/batch-va-converter-splitter

{
  "data": [
    {
      "title": "Apps and Sites List",
      "link": "piano.uottawa.ca/apps",
      "description": "This page. A list for PianoLab sites and applications.",
      "location": "cws-p103.intra, pianolab/apps",
      "type": "Static Page",
      "implementation": "SSG (Gatsby), Static JSON and GraphQL from gatsby-transformer-json",
      "plan": "Will be actively maintained in the future",
      "source_code": "",
      "show log": []
    },
    {
      "title": "PianoLab Main Website",
      "link": "piano.uottawa.ca",
      "description": "The Lab's main website. Find everything you want to know about the lab here!",
      "location": "cws-p103.intra, pianolab",
      "type": "Static website",
      "implementation": "WordPress",
      "plan": "Migrate to Flatfile CMS (Grav) and SSG (Gatsby)",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Musician Wellness Centre",
      "link": "piano.uottawa.ca/mwc",
      "description": "Website for Musician Wellness Centre",
      "location": "cws-p103.intra, pianolab/mwc",
      "type": "Static website",
      "implementation": "Plan HTML, CSS and JS",
      "plan": "Migrate to Flatfile CMS (Grav) and SSG (Gatsby); Also a possibility to relocate files to other server",
      "source_code": "",
      "show log": []
    },
    {
      "title": "OVL (Online Video Library)",
      "link": "piano.uottawa.ca/ovl",
      "description": "Online Video Library (for prof.Comeau's course only) and Research Survey management system",
      "location": "rap-p45.rdc ovl",
      "type": "Acount Access Controlled video website",
      "implementation": "Drupal 8 and modules",
      "plan": "Split up the research survey system",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Music Reading Test",
      "link": "piano.uottawa.ca/apps/music-reading-test",
      "description": "A music reading test that shows user the notes to be played, and records their playing as CSV. A usb MIDI keyboard and Chrome browser is required. Can also run as a stand-alone desktop application.",
      "location": "cws-p103.intra pianolab/apps",
      "type": "Web Application, Desktop Application",
      "implementation": "JS, React, Electron, GraphQL",
      "plan": "Finish the GraphQL implementation; write document",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Surgical Training Video, Suturing and Knot Tying",
      "link": "piano.uottawa.ca/apps/knot-tying-suturing",
      "description": "For suturing and knot tying motor skill assesment across pianoists and non- pianoists.",
      "location": "cws-p103.intra pianolab/apps",
      "type": "Web Application that plays video and gathers non-sensitive data from anonymous users.",
      "implementation": "HTML, JS, Google Apps Script",
      "plan": "Migrate from OVL; Is there a way to automate recording?",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Jumping Ball",
      "link": "piano.uottawa.ca/apps/jumping-ball",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Midi Analysis Tool",
      "link": "piano.uottawa.ca/apps/midi-analyzer",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Keydown Counter",
      "link": "piano.uottawa.ca/apps/keydown-counter",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "MIDI Recorder",
      "link": "piano.uottawa.ca/apps/midi-recorder",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Research Survey",
      "link": "piano.uottawa.ca/apps/research-survey",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "Batch Video Audio Converter and Splitter",
      "link": "piano.uottawa.ca/apps/batch-va-converter-splitter",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    },
    {
      "title": "YouTube Live",
      "link": "piano.uottawa.ca/apps/youtube-live",
      "description": "",
      "location": "",
      "type": "",
      "implementation": "",
      "plan": "",
      "source_code": "",
      "show log": []
    }
  ]
}