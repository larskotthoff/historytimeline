/* overviewTL.js - July 27, 2014 - works with historytimeline.html code */
d3.tl.overviewTL = {
  "dataOrigin": "overviewTL.js",
  "title": "The Biblical Narrative: Eras and Precipitating Events",
  "subtitle": "[independent support after about 800 BCE]",
  "borderColor": "#0404B4", // Emory blue;
  "erasArr": [
    {label: "Judges", start: -1100, stop: -1020,
       topY: 0, height: 1.0, bgcolor: "#A9BCF5"},
    {label: "United Kingdom", start: -1020, stop: -931,
       topY: 0, height: 1.0, bgcolor: "#F5BCA9"},
    {label: "Northern Kingdom (Israel)", start: -931, stop: -722,
       topY: 0, height: 0.7, bgcolor: "#F5A9E1"},
    {label: "Southern Kingdom (Judah)", start: -931, stop: -586,
       topY: 0.7, height: 0.3, bgcolor: "#F5A9BC"},
    {label: "Exile", start: -586, stop: -538,
       topY: 0, height: 1.0, bgcolor: "#F78181"},
    {label: "Persian Period", start: -538, stop: -332,
       topY: 0, height: 1.0, bgcolor: "#A9BCF5"},
    {label: "Hellenistic Period", start: -332, stop: -168,
       topY: 0, height: 1.0, bgcolor: "#A9E2F3"},
    {label: "Maccabean (Hasmonean) Rule", start: -168, stop: -63,
       topY: 0, height: 1.0, bgcolor: "#F5A9E1"},
    {label: "Rome: Temple", start: -63, stop: 70,
       topY: 0, height: 1.0, bgcolor: "#F5BCA9"}
  ],
  "precipEventsObj": {
    "-1100": "<p><b>1100 BCE</b> isn't a firm date: by scholarly convention, the Exodus occurred (if at all) about 1200 with Joshua's conquest of Caanan 40 years later.  So, 1100 seems to be a reasonable nominal date for the start of the period of <b>Judges</b>.</p>",
    "-1020": "<p>In <b>1020 BCE</b> (more or less) the monarchy began with the anointment by Samuel of <b>Saul</b> as King (followed by <b>David</b> and <b>Solomon</b>).</p>",
    "-931": "<p>In <b>931 BCE</b>, on the death of <b>Solomon</b>, his son and successor declined to lighten the heavy taxation imposed by his father and the ten northern tribes broke away to become the Kingdom of Israel.  The remaining two tribes (Judah and Benjamin) remained loyal to the Davidic house and formed the southern kingdom, the Kingdom of Judah.</p>",
    "-722": "<p>In <b>722 BCE</b>, Assyria conquered the Northern Kingdom and forced the people to resettle elsewhere.  Many fled to the Southern Kingdom but the others remain unaccounted for.</p>",
    "-586": "<p>In <b>586 BCE</b>, Babylonia under <b>King Nebuchadnezzar II</b> conquered the Southern Kingdom and destroyed the Temple. The elites had been sent into exile in Babylon ten years earlier (-597).</p>",
    "-538": "<p>In <b>539 BCE</b>, the Persians under <b>Cyrus</b> conquered Babylonia and in the following year Cyrus' famous edict gave permission to the Judeans to return to Jerusalem to rebuild their temple.</p>",
    "-332": "<p>In <b>334/332 BCE</b>, <b>Alexander the Great</b> conquered Judaea while passing through on his way to Persia and points east.  When he died ten years later (-323), Judaea became part of the Egyptian empire of the Ptolemies.  In <b>200 BCE</b> it came under the control of the Seleucid Empire.</p>",
    "-168": "<p>In <b>168 BCE</b>, the <b>Maccabean Revolt</b> began. It eventually established the first independent government in over 400 years.</p>",
    "-63": "<p>In <b>63 BCE</b>, the Roman Army under Pompey conquered Judea and in 37 BCE installed <b>Herod the Great</b> as client king; he was a great builder and dramatically enlarged and refurbished the Second Temple (d. 4 BCE).</p>",
    "70": "<p>In <b>70 CE</b>, the Romans ended the First Jewish War (66-70) by sacking Jerusalem and destroying the Temple.</p>"
  }
};





