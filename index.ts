import round from "lodash/round";
import toNumber from "lodash/toNumber";

const num: number | null | undefined | string = null;

const lodashNum = num ? round(toNumber(num), 2) : undefined;

console.log(lodashNum);
