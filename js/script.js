if ( false || null || undefined || "" || 0 || NaN) {
  console.log("Will this ever execute?");
} else {
  console.log ("All false");
}

if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
} else {
  console.log("Something was false");
}
