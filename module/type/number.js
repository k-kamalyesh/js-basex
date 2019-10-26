const { eFlags } = require('./flags');
const { eBase, converter } = require('./base');

module.exports = class BXCNumber {

    constructor(value, base) {
        // set value
        if (value) this._value = value;
        else this._value = 0;
        // set base
        if (base) this._base = base;
        else this._base = eBase.A;
        this._process();
    }

    _process() {
        // convert number, if it is, to string
        this._value = this._value + '';
        // get left part and right part of number, splitted by .
        let splits = this._value.split('.');
        splits[0] ? this._leftValue = splits[0]+'' : this._leftValue = '0';
        splits[1] ? this._rightValue = splits[1]+'' : this._rightValue = '0';
        // set sign flags
        let flags = {};
        if (this._value.startsWith('-')) {
            flags._sign = eFlags.SET;
            this._leftValue = this._leftValue.substr(1);
        }else flags._sign = eFlags.RESET;
        // set zero flag
        if (this._value == 0 || (this._leftValue==0 && this._rightValue==0)) flags._zero = eFlags.SET;
        else flags._zero = eFlags.RESET;
        // set float flag
        splits[1]?flags._float = eFlags.SET: flags._float=eFlags.RESET;
        // set flags
        this._flags = flags;

        // set lengths
        this._length = flags._sign==eFlags.SET?this._value.length-1:this._value.length;
        this._length = flags._flags==eFlags.SET?this._length-1:this._length;
        this._leftLength = this._leftValue.length;
        this._rightLength = flags._flags==eFlags.SET?this._rightValue.length:0;

        this._leftPart = [];
        {
            let arr = [];
            if(this._leftValue){    
                for (let index = 0; index < this._leftValue.length; index++) {
                    const c = this._leftValue[index];
                    if(c!='-')  arr.push(converter.getBaseFromTextChar(c));
                }
            }
            this._leftPart = arr;
        }
        this._rightPart = [];
        {
            let arr = [];
            if(this._rightValue){
                for (let index = 0; index < this._rightValue.length; index++) {
                    const c = this._rightValue[index];
                    arr.push(converter.getBaseFromTextChar(c));
                }
            }
            this._rightPart = arr;
        }

    }

    _getValue() {
        return this._value;
    }

    _getInt() {
        return this._leftValue;
    }

    _getFlags() {
        return this._flags;
    }

    _getFaceValueAt(position) {
        if(position>=0){
            // look in left part
            return this._leftPart[this._leftLength-position-1];
        }else{
            // look in right part
            position = -position-1;
            return this._rightPart[position];
        }
    }
}