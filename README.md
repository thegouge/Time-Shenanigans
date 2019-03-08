# Timey-Wimey

An Application that resolves expressions of 'hms' formatted time strings
(also supports TypeScript!)

## Installation

```sh
npm i timey-wimey --save

yarn add timey-wimey
```

## Usage

### JavaScript

```JavaScript
const time = require('timey-wimey');
console.log(time.evaluateTimeExpression("1h6m15s + 60s"); // output: "1h7m15s"
```

### TypeScript

```TypeScript
import { resolveToHours } from 'timey-wimey';

console.log(resolveToHours("3600s"); // ouput: "1h"
```

### Usable Functions

#### evaluateTimeExpression(Expression: String) => String

resolves math expressions within formatted strings ("h m s" format)

```
evaluateTimeExpression("1m + 1s"); // output: "1m1s"
evaluateTimeExpression("1h - 1s"); // output: "59m59s"
evaluateTimeExpression("60m * 2"); // output: "2h"
evaluateTimeExpression("40m / 2"); // output: "20m"
```

#### resolveToHours/Minutes/Seconds(Expression: String) => String

Takes the input expression and converts it into a decimal base of the requested time measurement

```
resolveToHours("90m"); // output: "1.5h"
resolveToMinutes("1h + 1h"); // output: "120m"
resolveToSeconds("15h"); // output: "54000s"
```

### Coming Soon?

- Integration with JavaScript "Date" object
- Adding "Days" and "milliseconds" to functions

## Testing

I've set up the scripts to compile the typescript files, then testing the compiled Javascript, so if you'd like to improve upon this module, please make your adjustments to the .ts files and then run `npm run test`
