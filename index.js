createRoundedRectangle(x, y, width, height, topLeft, downLeft, topRight, downRight, angle = 15) {
    let res = '';

    res += `M${x},${y}`;

    let lineLength = width;
    if (topLeft) {
        lineLength -= angle;
    }
    res += ` h${lineLength}`;
    if (topRight) res += `a${angle},${angle} 1 0 1 ${angle},${angle}`;

    //-----------------
    lineLength = height;
    if (topRight) {
        lineLength -= angle;
    }
    if (downRight) {
        lineLength -= angle;
    }
    res += ` v${lineLength}`;
    if (downRight) res += `a${angle},${angle} 0 0 1 ${-angle},${angle}`;

    // -------------------
    lineLength = width;
    //if (downRight) {
    //    lineLength -= angle;
    //}
    if (downLeft) {
        lineLength -= angle;
    }
    res += ` h${-lineLength}`;
    if (downLeft) res += `a${angle},${angle} 0 0 1 ${-angle},${-angle}`;

    //----------------------
    lineLength = height;
    if (topLeft) {
        lineLength -= angle;
    }
    if (downLeft) {
        lineLength -= angle;
    }
    res += ` v${-lineLength}`;
    if (topLeft) res += `a${angle},${angle} 0 0 1 ${angle},${-angle}`;

    res += ' z';
    return res;
},