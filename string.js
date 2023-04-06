const stringLength = (string) => {
    const length = string.length;
    if (length < 1){
        throw new Error('String is too small');
    }
    else if(length > 10){
        throw new Error('String is too long');
    } else {
      return length;
    }
}

module.exports = stringLength;