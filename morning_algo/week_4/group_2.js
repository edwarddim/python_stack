function recursiveSigma(n, o=0) {


    // console.log(n+" "+o)

    if (n == 0){
        console.log(o)
    }


    o += n

    n--
    recursiveSigma(n, o)

    

}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
recursiveSigma(5)