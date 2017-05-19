module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.num()}
o) 平均值 = ${sequence.ave()}`);
};


class Sequence {
  constructor(input) {
    this.input=input;
  }

  minimum() {
    return Math.min.apply( Math, this.input );
    return min;
  }

  maxmum() {
    return Math.max.apply( Math, this.input );
  }
  
  num() {
    return this.input.length;
  }
  
  ave() {
    var sum=0;
    for(var i=0;i<this.input.length;i++){
        sum+=this.input[i];
    }
    var ave=sum/this.input.length;
    return ave.toFixed(2);
  }
}