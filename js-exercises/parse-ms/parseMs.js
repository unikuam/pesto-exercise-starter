const parseMs = ms => {
  return {
    days: ms/(1000*24*60*60),
  	hours: ms/(1000*60*60),
  	minutes: ms/(1000*60),
  	seconds: ms/(1000),
  	milliseconds: ms,
  	microseconds: ms*1000,
  	nanoseconds: ms*1000000,
  }
};
export { parseMs };
