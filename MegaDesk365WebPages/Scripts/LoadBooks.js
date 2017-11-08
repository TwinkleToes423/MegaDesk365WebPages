var volumes = {
   "Old Testament": [
      "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
      "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings",
      "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
      "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes",
      "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
      "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah",
      "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai",
      "Zechariah", "Malachi"
   ],
   "New Testament": [
      "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Revelation"
   ],
   "Book of Mormon": [
      "1 Nephi", "2 Nephi", "3 Nephi", "4 Nephi"
   ],
   "Doctrine and Covenants": [
      "1", "2", "3", "4", "5"
   ],
   "Pearl of Great Price": [
      "Moses", "Abraham", "Joseph Smith-Matthew", "Joseph Smith-History", "Articles of Faith"
   ]
}


function initializeNumbers() {
   // Get the selection box
   var chSel = document.getElementsByName("chapter")[0];
   // Append 99 numbers to the selection box
   for (var i = 1; i < 100; i++) {
      var option = document.createElement("option");
      option.text = i.toString();
      option.value = i;
      chSel.appendChild(option);
   }

   // Get the selection box
   var vsSel = document.getElementsByName("verse")[0];
   // Append 101 numbers to the selection box (most verses in any chapter, Psalm 119)
   for (var i = 1; i <= 176; i++) {
      var option = document.createElement("option");
      option.text = i.toString();
      option.value = i;
      vsSel.appendChild(option);
   }
}

function populateBooks() {
   // Get the selection box
   var bkSel = document.getElementsByName("book")[0];
   var volSel = document.getElementsByName("volume")[0];
   var vol = volumes[volSel.options[volSel.selectedIndex].text];

   // Clear all current options from the dropdown
   for (i = bkSel.length; i > -1; i--) {
      bkSel.options[i] = null;
   }
   // Append all books for that volume
   for (var i in vol) {
      var option = document.createElement("option");
      option.text = vol[i];
      option.value = vol[i];
      bkSel.appendChild(option);
   }

   bkSel.disabled = false;
}