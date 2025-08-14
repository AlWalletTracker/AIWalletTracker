// Paste this into Google Apps Script and deploy as Web App.
// This is a trimmed-down version; use the full script provided earlier.
const SHEET_ID = '1rf4wiZD-VLpJJV02A5IA9tNHCjZCtck723WGg-7zuxc';
function doGet(e){ return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON); }
