let leafArray = [];
let leafArrayMove = [];
let leafArrayMoveLine0 = [];
let leafArrayMoveLine1 = [];

let widhtCanvas = 1000;
let heightCanvas = 600;

let treeNo3Array = [];

// kształ gór - start
let s4l3x1 = 120;
let s4l3y1 = 263;
let s4l3x2 = 135;
let s4l3y2 = 248;
let s4l3x3 = 138;
let s4l3y3 = 233;

let s4l4x1 = 138;
let s4l4y1 = 233;
let s4l4x2 = 147;
let s4l4y2 = 231;
let s4l4x3 = 150;
let s4l4y3 = 228;

let s4l5bx1 = 150;
let s4l5by1 = 228;
let s4l5bx2 = 172;
let s4l5by2 = 198;
let s4l5bx3 = 180;
let s4l5by3 = 185;

let s4l6ax1 = 180;
let s4l6ay1 = 185;
let s4l6ax2 = 188;
let s4l6ay2 = 188;
let s4l6ax3 = 195;
let s4l6ay3 = 190;

let s4l7x1 = 195;
let s4l7y1 = 190;
let s4l7x2 = 204;
let s4l7y2 = 179;
let s4l7x3 = 210;
let s4l7y3 = 175;

let s4l8x1 = 210;
let s4l8y1 = 175;
let s4l8x2 = 240;
let s4l8y2 = 174;
let s4l8x3 = 255;
let s4l8y3 = 180;

let s4l9x1 = 255;
let s4l9y1 = 180;
let s4l9x2 = 258;
let s4l9y2 = 184;
let s4l9x3 = 260;
let s4l9y3 = 190;

let s4l10x1 = 260;
let s4l10y1 = 190;
let s4l10x2 = 267;
let s4l10y2 = 188;
let s4l10x3 = 273;
let s4l10y3 = 202;

let s4l11x1 = 273;
let s4l11y1 = 202;
let s4l11x2 = 276;
let s4l11y2 = 208;
let s4l11x3 = 300;
let s4l11y3 = 220;

let s4er1x1 = 300;
let s4er1y1 = 220;
let s4er1x2 = 300;
let s4er1y2 = 220;
let s4er1x3 = 300;
let s4er1y3 = 600;

let s4eh1x1 = 300;
let s4eh1y1 = 600;
let s4eh1x2 = 300;
let s4eh1y2 = 600;
let s4eh1x3 = 120;
let s4eh1y3 = 600;

let s4el1x1 = 120;
let s4el1y1 = 600;
let s4el1x2 = 120;
let s4el1y2 = 600;
let s4el1x3 = 120;
let s4el1y3 = 263;
// kształt góry - s4 - end	

// linie - kształt góry - s4 - start
let s4l6bx1 = 195;
let s4l6by1 = 190;
let s4l6bx2 = 209;
let s4l6by2 = 190;
let s4l6bx3 = 215;
let s4l6by3 = 195;

let s4l5ax1 = 150;
let s4l5ay1 = 228;
let s4l5ax2 = 146;
let s4l5ay2 = 235;
let s4l5ax3 = 140;
let s4l5ay3 = 245;
// linie - kształt góry - s4 - end

// kształt góry - s1 - start
let s1l26x1 = 670;
let s1l26y1 = 150;
let s1l26x2 = 688;
let s1l26y2 = 157;
let s1l26x3 = 750;
let s1l26y3 = 100;

let s1l27x1 = 750;
let s1l27y1 = 100;
let s1l27x2 = 758;
let s1l27y2 = 105;
let s1l27x3 = 765;
let s1l27y3 = 105;

let s1l28x1 = 765;
let s1l28y1 = 105;
let s1l28x2 = 783;
let s1l28y2 = 82;
let s1l28x3 = 785;
let s1l28y3 = 60;

let s1l29x1 = 785;
let s1l29y1 = 60;
let s1l29x2 = 805;
let s1l29y2 = 55;
let s1l29x3 = 825;
let s1l29y3 = 40;

let s1l30x1 = 825;
let s1l30y1 = 40;
let s1l30x2 = 849;
let s1l30y2 = 56;
let s1l30x3 = 850;
let s1l30y3 = 70;

let s1l31x1 = 850;
let s1l31y1 = 70;
let s1l31x2 = 856;
let s1l31y2 = 66;
let s1l31x3 = 860;
let s1l31y3 = 65;

let s1l32ax1 = 860;
let s1l32ay1 = 65;
let s1l32ax2 = 856;
let s1l32ay2 = 66;
let s1l32ax3 = 880;
let s1l32ay3 = 90;

let s1l33x1 = 880;
let s1l33y1 = 90;
let s1l33x2 = 890;
let s1l33y2 = 83;
let s1l33x3 = 905;
let s1l33y3 = 85;

let s1l34ax1 = 905;
let s1l34ay1 = 85;
let s1l34ax2 = 918;
let s1l34ay2 = 104;
let s1l34ax3 = 945;
let s1l34ay3 = 120;

let s1l34bx1 = 945;
let s1l34by1 = 120;
let s1l34bx2 = 981;
let s1l34by2 = 147;
let s1l34bx3 = 1000;
let s1l34by3 = 150;

let s1er1x1 = 1000;
let s1er1y1 = 150;
let s1er1x2 = 1000;
let s1er1y2 = 600;
let s1er1x3 = 1000;
let s1er1y3 = 600;

let s1eh1x1 = 1000;
let s1eh1y1 = 600;
let s1eh1x2 = 1000;
let s1eh1y2 = 600;
let s1eh1x3 = 670;
let s1eh1y3 = 600;

let s1el1x1 = 670;
let s1el1y1 = 600;
let s1el1x2 = 670;
let s1el1y2 = 600;
let s1el1x3 = 670;
let s1el1y3 = 150;
// kształt góry - s1 - end	

// linie - kształt góry - s1 - start
let s1l39x1 = 755;
let s1l39y1 = 155;
let s1l39x2 = 784;
let s1l39y2 = 136;
let s1l39x3 = 795;
let s1l39y3 = 120;

let s1l38ax1 = 795;
let s1l38ay1 = 120;
let s1l38ax2 = 820;
let s1l38ay2 = 142;
let s1l38ax3 = 835;
let s1l38ay3 = 145;

let s1l38bx1 = 835;
let s1l38by1 = 145;
let s1l38bx2 = 848;
let s1l38by2 = 155;
let s1l38bx3 = 850;
let s1l38by3 = 160;

let s1l41x1 = 795;
let s1l41y1 = 200;
let s1l41x2 = 815;
let s1l41y2 = 184;
let s1l41x3 = 815;
let s1l41y3 = 180;

let s1l40x1 = 815;
let s1l40y1 = 180;
let s1l40x2 = 834;
let s1l40y2 = 172;
let s1l40x3 = 850;
let s1l40y3 = 180;

let s1l37x1 = 825;
let s1l37y1 = 125;
let s1l37x2 = 847;
let s1l37y2 = 112;
let s1l37x3 = 860;
let s1l37y3 = 105;

let s1l36x1 = 860;
let s1l36y1 = 105;
let s1l36x2 = 876;
let s1l36y2 = 111;
let s1l36x3 = 890;
let s1l36y3 = 120;

let s1l35x1 = 905;
let s1l35y1 = 85;
let s1l35x2 = 908;
let s1l35y2 = 97;
let s1l35x3 = 895;
let s1l35y3 = 110;

let s1l32bx1 = 880;
let s1l32by1 = 90;
let s1l32bx2 = 885;
let s1l32by2 = 96;
let s1l32bx3 = 890;
let s1l32by3 = 100;
// linie - kształt góry - s1 - end

// kształt góry - s3 - start
let s3l12ax1 = 260;
let s3l12ay1 = 223;
let s3l12ax2 = 288;
let s3l12ay2 = 208;
let s3l12ax3 = 300;
let s3l12ay3 = 200;

let s3l12bx1 = 300;
let s3l12by1 = 200;
let s3l12bx2 = 319;
let s3l12by2 = 192;
let s3l12bx3 = 370;
let s3l12by3 = 150;

let s3l13x1 = 370;
let s3l13y1 = 150;
let s3l13x2 = 378;
let s3l13y2 = 151;
let s3l13x3 = 380;
let s3l13y3 = 155;

let s3l14x1 = 380;
let s3l14y1 = 155;
let s3l14x2 = 390;
let s3l14y2 = 144;
let s3l14x3 = 400;
let s3l14y3 = 115;

let s3l15x1 = 400;
let s3l15y1 = 115;
let s3l15x2 = 420;
let s3l15y2 = 107;
let s3l15x3 = 435;
let s3l15y3 = 105;

let s3l16x1 = 435;
let s3l16y1 = 105;
let s3l16x2 = 447;
let s3l16y2 = 109;
let s3l16x3 = 460;
let s3l16y3 = 120;

let s3l17ax1 = 460;
let s3l17ay1 = 120;
let s3l17ax2 = 469;
let s3l17ay2 = 119;
let s3l17ax3 = 470;
let s3l17ay3 = 120;

let s3l18x1 = 470;
let s3l18y1 = 120;
let s3l18x2 = 469;
let s3l18y2 = 119;
let s3l18x3 = 485;
let s3l18y3 = 145;

let s3l19x1 = 485;
let s3l19y1 = 145;
let s3l19x2 = 505;
let s3l19y2 = 141;
let s3l19x3 = 510;
let s3l19y3 = 137;

let s3l20x1 = 510;
let s3l20y1 = 137;
let s3l20x2 = 505;
let s3l20y2 = 141;
let s3l20x3 = 550;
let s3l20y3 = 160;

let s3er1x1 = 550;
let s3er1y1 = 160;
let s3er1x2 = 550;
let s3er1y2 = 160;
let s3er1x3 = 550;
let s3er1y3 = 600;

let s3eh1x1 = 550;
let s3eh1y1 = 600;
let s3eh1x2 = 550;
let s3eh1y2 = 600;
let s3eh1x3 = 260;
let s3eh1y3 = 600;

let s3el1x1 = 260;
let s3el1y1 = 600;
let s3el1x2 = 260;
let s3el1y2 = 600;
let s3el1x3 = 260;
let s3el1y3 = 223;
// kształt góry - s3 - end

// linie - kształt góry - s3 - start
let s3l62x1 = 380;
let s3l62y1 = 155;
let s3l62x2 = 375;
let s3l62y2 = 166;
let s3l62x3 = 373;
let s3l62y3 = 180;

let s3l17bx1 = 460;
let s3l17by1 = 120;
let s3l17bx2 = 451;
let s3l17by2 = 119;
let s3l17bx3 = 435;
let s3l17by3 = 130;

let s3l19bx1 = 485;
let s3l19by1 = 145;
let s3l19bx2 = 478;
let s3l19by2 = 147;
let s3l19bx3 = 470;
let s3l19by3 = 160;
// linie - kształt góry - s3 - end

// kształt góry - s2 - start
let s2l1x1 = 0;
let s2l1y1 = 280;
let s2l1x2 = 40;
let s2l1y2 = 268;
let s2l1x3 = 80;
let s2l1y3 = 278;

let s2l2x1 = 80;
let s2l2y1 = 278;
let s2l2x2 = 119;
let s2l2y2 = 264;
let s2l2x3 = 150;
let s2l2y3 = 250;

let s2l72x1 = 150;
let s2l72y1 = 250;
let s2l72x2 = 153;
let s2l72y2 = 245;
let s2l72x3 = 155;
let s2l72y3 = 240;

let s2l71ax1 = 155;
let s2l71ay1 = 240;
let s2l71ax2 = 164;
let s2l71ay2 = 250;
let s2l71ax3 = 225;
let s2l71ay3 = 205;

let s2l71bx1 = 225;
let s2l71by1 = 205;
let s2l71bx2 = 234;
let s2l71by2 = 208;
let s2l71bx3 = 235;
let s2l71by3 = 203;

let s2l70x1 = 235;
let s2l70y1 = 203;
let s2l70x2 = 245;
let s2l70y2 = 216;
let s2l70x3 = 260;
let s2l70y3 = 223;

let s2l68x1 = 260;
let s2l68y1 = 223;
let s2l68x2 = 280;
let s2l68y2 = 225;
let s2l68x3 = 280;
let s2l68y3 = 220;

let s2l67x1 = 280;
let s2l67y1 = 220;
let s2l67x2 = 294;
let s2l67y2 = 237;
let s2l67x3 = 330;
let s2l67y3 = 230;

let s2l63x1 = 330;
let s2l63y1 = 230;
let s2l63x2 = 347;
let s2l63y2 = 216;
let s2l63x3 = 375;
let s2l63y3 = 209;

let s2l61x1 = 375;
let s2l61y1 = 209;
let s2l61x2 = 392;
let s2l61y2 = 202;
let s2l61x3 = 395;
let s2l61y3 = 180;

let s2l60ax1 = 395;
let s2l60ay1 = 180;
let s2l60ax2 = 405;
let s2l60ay2 = 188;
let s2l60ax3 = 420;
let s2l60ay3 = 190;

let s2l60bx1 = 420;
let s2l60by1 = 190;
let s2l60bx2 = 443;
let s2l60by2 = 189;
let s2l60bx3 = 465;
let s2l60by3 = 195;

let s2l57ax1 = 465;
let s2l57ay1 = 195;
let s2l57ax2 = 473;
let s2l57ay2 = 194;
let s2l57ax3 = 475;
let s2l57ay3 = 190;

let s2l57bx1 = 475;
let s2l57by1 = 190;
let s2l57bx2 = 474;
let s2l57by2 = 194;
let s2l57bx3 = 520;
let s2l57by3 = 185;

let s2l56ax1 = 520;
let s2l56ay1 = 185;
let s2l56ax2 = 525;
let s2l56ay2 = 174;
let s2l56ax3 = 530;
let s2l56ay3 = 170;

let s2l21x1 = 530;
let s2l21y1 = 170;
let s2l21x2 = 560;
let s2l21y2 = 144;
let s2l21x3 = 570;
let s2l21y3 = 120;

let s2l22ax1 = 570;
let s2l22ay1 = 120;
let s2l22ax2 = 576;
let s2l22ay2 = 123;
let s2l22ax3 = 585;
let s2l22ay3 = 125;

let s2l23x1 = 585;
let s2l23y1 = 125;
let s2l23x2 = 595;
let s2l23y2 = 113;
let s2l23x3 = 605;
let s2l23y3 = 105;

let s2l24x1 = 605;
let s2l24y1 = 105;
let s2l24x2 = 623;
let s2l24y2 = 109;
let s2l24x3 = 640;
let s2l24y3 = 115;

let s2l25x1 = 640;
let s2l25y1 = 115;
let s2l25x2 = 660;
let s2l25y2 = 134;
let s2l25x3 = 675;
let s2l25y3 = 160;

let s2l42ax1 = 675;
let s2l42ay1 = 160;
let s2l42ax2 = 700;
let s2l42ay2 = 178;
let s2l42ax3 = 725;
let s2l42ay3 = 175;

let s2l42bx1 = 725;
let s2l42by1 = 175;
let s2l42bx2 = 730;
let s2l42by2 = 182;
let s2l42bx3 = 750;
let s2l42by3 = 195;

let s2l43bx1 = 750;
let s2l43by1 = 195;
let s2l43bx2 = 758;
let s2l43by2 = 189;
let s2l43bx3 = 760;
let s2l43by3 = 185;

let s2l44x1 = 760;
let s2l44y1 = 185;
let s2l44x2 = 803;
let s2l44y2 = 227;
let s2l44x3 = 815;
let s2l44y3 = 230;

let s2l45x1 = 815;
let s2l45y1 = 230;
let s2l45x2 = 821;
let s2l45y2 = 227;
let s2l45x3 = 825;
let s2l45y3 = 225;

let s2l46ax1 = 825;
let s2l46ay1 = 225;
let s2l46ax2 = 862;
let s2l46ay2 = 236;
let s2l46ax3 = 885;
let s2l46ay3 = 260;

let s2l46bx1 = 885;
let s2l46by1 = 260;
let s2l46bx2 = 974;
let s2l46by2 = 232;
let s2l46bx3 = 1000;
let s2l46by3 = 250;

let s2er1x1 = 1000;
let s2er1y1 = 250;
let s2er1x2 = 1000;
let s2er1y2 = 600;
let s2er1x3 = 1000;
let s2er1y3 = 600;

let s2eh1x1 = 1000;
let s2eh1y1 = 600;
let s2eh1x2 = 1000;
let s2eh1y2 = 600;
let s2eh1x3 = 0;
let s2eh1y3 = 600;

let s2el1x1 = 0;
let s2el1y1 = 600;
let s2el1x2 = 0;
let s2el1y2 = 600;
let s2el1x3 = 0;
let s2el1y3 = 280;
// kształt góry - s2 - end

// linie - kształt góry - s2 - start
let s2l22bx1 = 585;
let s2l22by1 = 125;
let s2l22bx2 = 576;
let s2l22by2 = 123;
let s2l22bx3 = 600;
let s2l22by3 = 130;

let s2l47x1 = 600;
let s2l47y1 = 165;
let s2l47x2 = 589;
let s2l47y2 = 177;
let s2l47x3 = 570;
let s2l47y3 = 190;

let s2l48x1 = 600;
let s2l48y1 = 165;
let s2l48x2 = 624;
let s2l48y2 = 175;
let s2l48x3 = 635;
let s2l48y3 = 190;

let s2l58ax1 = 465;
let s2l58ay1 = 195;
let s2l58ax2 = 452;
let s2l58ay2 = 204;
let s2l58ax3 = 435;
let s2l58ay3 = 225;

let s2l58bx1 = 435;
let s2l58by1 = 225;
let s2l58bx2 = 415;
let s2l58by2 = 247;
let s2l58bx3 = 395;
let s2l58by3 = 250;

let s2l59x1 = 416;
let s2l59y1 = 240;
let s2l59x2 = 393;
let s2l59y2 = 238;
let s2l59x3 = 360;
let s2l59y3 = 250;

let s2l64ax1 = 330;
let s2l64ay1 = 230;
let s2l64ax2 = 324;
let s2l64ay2 = 243;
let s2l64ax3 = 290;
let s2l64ay3 = 250;

let s2l64bx1 = 290;
let s2l64by1 = 250;
let s2l64bx2 = 258;
let s2l64by2 = 258;
let s2l64bx3 = 250;
let s2l64by3 = 265;

let s2l65ax1 = 250;
let s2l65ay1 = 265;
let s2l65ax2 = 237;
let s2l65ay2 = 273;
let s2l65ax3 = 225;
let s2l65ay3 = 285;

let s2l65bx1 = 225;
let s2l65by1 = 285;
let s2l65bx2 = 204;
let s2l65by2 = 301;
let s2l65bx3 = 175;
let s2l65by3 = 310;

let s2l55bx1 = 445;
let s2l55by1 = 270;
let s2l55bx2 = 427;
let s2l55by2 = 264;
let s2l55bx3 = 395;
let s2l55by3 = 290;

let s2l55ax1 = 395;
let s2l55ay1 = 290;
let s2l55ax2 = 378;
let s2l55ay2 = 305;
let s2l55ax3 = 330;
let s2l55ay3 = 325;

let s2l49x1 = 570;
let s2l49y1 = 210;
let s2l49x2 = 549;
let s2l49y2 = 217;
let s2l49x3 = 505;
let s2l49y3 = 255;

let s2l50x1 = 570;
let s2l50y1 = 210;
let s2l50x2 = 601;
let s2l50y2 = 229;
let s2l50x3 = 620;
let s2l50y3 = 235;

let s2l51x1 = 570;
let s2l51y1 = 210;
let s2l51x2 = 566;
let s2l51y2 = 228;
let s2l51x3 = 565;
let s2l51y3 = 255;

let s2l52x1 = 565;
let s2l52y1 = 255;
let s2l52x2 = 572;
let s2l52y2 = 264;
let s2l52x3 = 575;
let s2l52y3 = 275;

let s2l53x1 = 575;
let s2l53y1 = 275;
let s2l53x2 = 591;
let s2l53y2 = 285;
let s2l53x3 = 595;
let s2l53y3 = 295;

let s2l54x1 = 595;
let s2l54y1 = 295;
let s2l54x2 = 601;
let s2l54y2 = 304;
let s2l54x3 = 615;
let s2l54y3 = 310;

let s2l43ax1 = 750;
let s2l43ay1 = 195;
let s2l43ax2 = 740;
let s2l43ay2 = 201;
let s2l43ax3 = 730;
let s2l43ay3 = 200;

let s2l46cx1 = 885;
let s2l46cy1 = 260;
let s2l46cx2 = 904;
let s2l46cy2 = 274;
let s2l46cx3 = 920;
let s2l46cy3 = 275;

let s2l74x1 = 80;
let s2l74y1 = 278;
let s2l74x2 = 65;
let s2l74y2 = 283;
let s2l74x3 = 60;
let s2l74y3 = 290;
// linie - kształt góry - s2 - end

// kształt góry - s6 - start
let s6l76x1 = 220;
let s6l76y1 = 430;
let s6l76x2 = 350;
let s6l76y2 = 373;
let s6l76x3 = 380;
let s6l76y3 = 420;

let s6er1x1 = 380;
let s6er1y1 = 420;
let s6er1x2 = 380;
let s6er1y2 = 420;
let s6er1x3 = 380;
let s6er1y3 = 600;

let s6eh1x1 = 380;
let s6eh1y1 = 600;
let s6eh1x2 = 380;
let s6eh1y2 = 600;
let s6eh1x3 = 220;
let s6eh1y3 = 600;

let s6el1x1 = 220;
let s6el1y1 = 600;
let s6el1x2 = 220;
let s6el1y2 = 600;
let s6el1x3 = 220;
let s6el1y3 = 430;
// kształt góry - s6 - end

// kształt góry - s8 - start
let s8l82x1 = 680;
let s8l82y1 = 380;
let s8l82x2 = 752;
let s8l82y2 = 318;
let s8l82x3 = 760;
let s8l82y3 = 335;

let s8l83x1 = 760;
let s8l83y1 = 335;
let s8l83x2 = 795;
let s8l83y2 = 324;
let s8l83x3 = 820;
let s8l83y3 = 340;

let s8er1x1 = 820;
let s8er1y1 = 340;
let s8er1x2 = 820;
let s8er1y2 = 340;
let s8er1x3 = 820;
let s8er1y3 = 600;

let s8eh1x1 = 820;
let s8eh1y1 = 600;
let s8eh1x2 = 820;
let s8eh1y2 = 600;
let s8eh1x3 = 680;
let s8eh1y3 = 600;

let s8el1x1 = 680;
let s8el1y1 = 600;
let s8el1x2 = 680;
let s8el1y2 = 600;
let s8el1x3 = 680;
let s8el1y3 = 380;
// kształt góry - s8- end

// kształt góry - s5 - start
let s5l75x1 = 0;
let s5l75y1 = 400;
let s5l75x2 = 156;
let s5l75y2 = 379;
let s5l75x3 = 300;
let s5l75y3 = 450;

let s5er1x1 = 300;
let s5er1y1 = 450;
let s5er1x2 = 300;
let s5er1y2 = 450;
let s5er1x3 = 300;
let s5er1y3 = 600;

let s5eh1x1 = 300;
let s5eh1y1 = 600;
let s5eh1x2 = 300;
let s5eh1y2 = 600;
let s5eh1x3 = 0;
let s5eh1y3 = 600;

let s5el1x1 = 0;
let s5el1y1 = 600;
let s5el1x2 = 0;
let s5el1y2 = 600;
let s5el1x3 = 0;
let s5el1y3 = 400;
// kształt góry - s5 - end

// kształt góry - s9 - start
let s9l85x1 = 740;
let s9l85y1 = 390;
let s9l85x2 = 786;
let s9l85y2 = 382;
let s9l85x3 = 800;
let s9l85y3 = 335;

let s9l87x1 = 800;
let s9l87y1 = 335;
let s9l87x2 = 806;
let s9l87y2 = 314;
let s9l87x3 = 840;
let s9l87y3 = 310;

let s9l88x1 = 840;
let s9l88y1 = 310;
let s9l88x2 = 885;
let s9l88y2 = 310;
let s9l88x3 = 942;
let s9l88y3 = 270;

let s9l89bx1 = 942;
let s9l89by1 = 270;
let s9l89bx2 = 961;
let s9l89by2 = 255;
let s9l89bx3 = 1000;
let s9l89by3 = 270;

let s9er1x1 = 1000;
let s9er1y1 = 270;
let s9er1x2 = 1000;
let s9er1y2 = 270;
let s9er1x3 = 1000;
let s9er1y3 = 600;

let s9eh1x1 = 1000;
let s9eh1y1 = 600;
let s9eh1x2 = 1000;
let s9eh1y2 = 600;
let s9eh1x3 = 740;
let s9eh1y3 = 600;

let s9el1x1 = 740;
let s9el1y1 = 600;
let s9el1x2 = 740;
let s9el1y2 = 600;
let s9el1x3 = 740;
let s9el1y3 = 390;
// kształt góry - s9 - end

// kształt góry - s9 - start
let s7l78ex1 = 170;
let s7l78ey1 = 520;
let s7l78ex2 = 194;
let s7l78ey2 = 488;
let s7l78ex3 = 220;
let s7l78ey3 = 480;

let s7l78dx1 = 220;
let s7l78dy1 = 480;
let s7l78dx2 = 272;
let s7l78dy2 = 469;
let s7l78dx3 = 280;
let s7l78dy3 = 455;

let s7l78bcx1 = 280;
let s7l78bcy1 = 455;
let s7l78bcx2 = 311;
let s7l78bcy2 = 424;
let s7l78bcx3 = 350;
let s7l78bcy3 = 410;

let s7l78ax1 = 350;
let s7l78ay1 = 410;
let s7l78ax2 = 430;
let s7l78ay2 = 382;
let s7l78ax3 = 460;
let s7l78ay3 = 360;

let s7l79x1 = 460;
let s7l79y1 = 360;
let s7l79x2 = 507;
let s7l79y2 = 315;
let s7l79x3 = 560;
let s7l79y3 = 370;

let s7l80ax1 = 560;
let s7l80ay1 = 370;
let s7l80ax2 = 600;
let s7l80ay2 = 361;
let s7l80ax3 = 620;
let s7l80ay3 = 350;

let s7l81x1 = 620;
let s7l81y1 = 350;
let s7l81x2 = 648;
let s7l81y2 = 358;
let s7l81x3 = 680;
let s7l81y3 = 360;

let s7l84x1 = 680;
let s7l84y1 = 360;
let s7l84x2 = 724;
let s7l84y2 = 362;
let s7l84x3 = 760;
let s7l84y3 = 390;

let s7l86x1 = 760;
let s7l86y1 = 390;
let s7l86x2 = 792;
let s7l86y2 = 357;
let s7l86x3 = 900;
let s7l86y3 = 490;

let s7er1x1 = 900;
let s7er1y1 = 490;
let s7er1x2 = 900;
let s7er1y2 = 490;
let s7er1x3 = 900;
let s7er1y3 = 600;

let s7eh1x1 = 900;
let s7eh1y1 = 600;
let s7eh1x2 = 900;
let s7eh1y2 = 600;
let s7eh1x3 = 170;
let s7eh1y3 = 600;

let s7el1x1 = 170;
let s7el1y1 = 600;
let s7el1x2 = 170;
let s7el1y2 = 600;
let s7el1x3 = 170;
let s7el1y3 = 520;
// kształt góry - s7 - end

// linie - kształt góry - s7 - start
let s7l80bx1 = 560;
let s7l80by1 = 370;
let s7l80bx2 = 528;
let s7l80by2 = 378;
let s7l80bx3 = 510;
let s7l80by3 = 410;
// linie - kształt góry - s7 - end

// kształt góry - s9 - start
let s10l90x1 = 0;
let s10l90y1 = 540;
let s10l90x2 = 674;
let s10l90y2 = 376;
let s10l90x3 = 1000;
let s10l90y3 = 460;

let s10er1x1 = 1000;
let s10er1y1 = 460;
let s10er1x2 = 1000;
let s10er1y2 = 460;
let s10er1x3 = 1000;
let s10er1y3 = 600;

let s10eh1x1 = 1000;
let s10eh1y1 = 600;
let s10eh1x2 = 1000;
let s10eh1y2 = 600;
let s10eh1x3 = 0;
let s10eh1y3 = 600;

let s10el1x1 = 0;
let s10el1y1 = 600;
let s10el1x2 = 0;
let s10el1y2 = 600;
let s10el1x3 = 0;
let s10el1y3 = 540;
// kształt góry - s7 - end

// kształ gór - finish

// pień drzewa numer 3 - liczone od lewy, dolny róg pnia drzewa - wokół tych punktów nie tworzymy liści - start
let m3l1x1 = 90;
let m3l1y1 = 220;
let m3l1x2 = 88;
let m3l1y2 = 207;
let m3l1x3 = 93;
let m3l1y3 = 180;

let m3l2x1 = 93;
let m3l2y1 = 180;
let m3l2x2 = 96;
let m3l2y2 = 157;
let m3l2x3 = 95;
let m3l2y3 = 145;

let m3l3x1 = 95;
let m3l3y1 = 145;
let m3l3x2 = 93;
let m3l3y2 = 127;
let m3l3x3 = 96;
let m3l3y3 = 110;

let m3l4x1 = 96;
let m3l4y1 = 110;
let m3l4x2 = 100;
let m3l4y2 = 96;
let m3l4x3 = 98;
let m3l4y3 = 90;

let m3l5x1 = 98;
let m3l5y1 = 90;
let m3l5x2 = 90;
let m3l5y2 = 79;
let m3l5x3 = 91;
let m3l5y3 = 70;

let m3l6x1 = 91;
let m3l6y1 = 70;
let m3l6x2 = 87;
let m3l6y2 = 61;
let m3l6x3 = 87;
let m3l6y3 = 55;

let m3l7x1 = 87;
let m3l7y1 = 55;
let m3l7x2 = 87;
let m3l7y2 = 59;
let m3l7x3 = 92;
let m3l7y3 = 69;

let m3l8x1 = 92;
let m3l8y1 = 69;
let m3l8x2 = 96;
let m3l8y2 = 62;
let m3l8x3 = 96;
let m3l8y3 = 58;

let m3l9x1 = 96;
let m3l9y1 = 58;
let m3l9x2 = 97;
let m3l9y2 = 63;
let m3l9x3 = 93;
let m3l9y3 = 70;

let m3l10x1 = 93;
let m3l10y1 = 70;
let m3l10x2 = 92;
let m3l10y2 = 79;
let m3l10x3 = 101;
let m3l10y3 = 90;

let m3l11x1 = 101;
let m3l11y1 = 90;
let m3l11x2 = 102;
let m3l11y2 = 93;
let m3l11x3 = 101;
let m3l11y3 = 98;

let m3l12x1 = 101;
let m3l12y1 = 98;
let m3l12x2 = 104;
let m3l12y2 = 94;
let m3l12x3 = 110;
let m3l12y3 = 91;

let m3l13x1 = 110;
let m3l13y1 = 91;
let m3l13x2 = 114;
let m3l13y2 = 88;
let m3l13x3 = 115;
let m3l13y3 = 85;

let m3l14x1 = 115;
let m3l14y1 = 85;
let m3l14x2 = 115;
let m3l14y2 = 88;
let m3l14x3 = 112;
let m3l14y3 = 91;

let m3l15x1 = 112;
let m3l15y1 = 91;
let m3l15x2 = 117;
let m3l15y2 = 90;
let m3l15x3 = 118;
let m3l15y3 = 89;

let m3l16x1 = 118;
let m3l16y1 = 89;
let m3l16x2 = 118;
let m3l16y2 = 91;
let m3l16x3 = 112;
let m3l16y3 = 92;

let m3l17x1 = 112;
let m3l17y1 = 92;
let m3l17x2 = 106;
let m3l17y2 = 93;
let m3l17x3 = 101;
let m3l17y3 = 102;

let m3l18x1 = 101;
let m3l18y1 = 102;
let m3l18x2 = 99;
let m3l18y2 = 107;
let m3l18x3 = 99;
let m3l18y3 = 110;

let m3l19x1 = 99;
let m3l19y1 = 110;
let m3l19x2 = 95;
let m3l19y2 = 119;
let m3l19x3 = 98;
let m3l19y3 = 145;

let m3l20x1 = 98;
let m3l20y1 = 145;
let m3l20x2 = 99;
let m3l20y2 = 159;
let m3l20x3 = 97;
let m3l20y3 = 180;

let m3l21x1 = 97;
let m3l21y1 = 180;
let m3l21x2 = 94;
let m3l21y2 = 198;
let m3l21x3 = 94;
let m3l21y3 = 220;

// pień drzewa numer - end

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
let r1l1x1 = 89;
let r1l1y1 = 64;
let r1l1x2 = 87;
let r1l1y2 = 59;
let r1l1x3 = 82;
let r1l1y3 = 60;

let r1l7x1 = 82;
let r1l7y1 = 60;
let r1l7x2 = 79;
let r1l7y2 = 60;
let r1l7x3 = 78;
let r1l7y3 = 59;

let r1l28x1 = 82;
let r1l28y1 = 60;
let r1l28x2 = 85;
let r1l28y2 = 50;
let r1l28x3 = 80;
let r1l28y3 = 47;

let r1l29x1 = 80;
let r1l29y1 = 47;
let r1l29x2 = 80;
let r1l29y2 = 43;
let r1l29x3 = 77;
let r1l29y3 = 42;

let r1l30x1 = 80;
let r1l30y1 = 47;
let r1l30x2 = 80;
let r1l30y2 = 47;
let r1l30x3 = 78;
let r1l30y3 = 48;

let r1l2x1 = 82;
let r1l2y1 = 60;
let r1l2x2 = 82;
let r1l2y2 = 58;
let r1l2x3 = 80;
let r1l2y3 = 57;

let r1l8x1 = 80;
let r1l8y1 = 57;
let r1l8x2 = 79;
let r1l8y2 = 55;
let r1l8x3 = 76;
let r1l8y3 = 56;

let r1l2ax1 = 80;
let r1l2ay1 = 57;
let r1l2ax2 = 82;
let r1l2ay2 = 57;
let r1l2ax3 = 78;
let r1l2ay3 = 52;

let r1l3x1 = 78;
let r1l3y1 = 52;
let r1l3x2 = 70;
let r1l3y2 = 50;
let r1l3x3 = 70;
let r1l3y3 = 46;

let r1l4x1 = 70;
let r1l4y1 = 46;
let r1l4x2 = 70;
let r1l4y2 = 43;
let r1l4x3 = 69;
let r1l4y3 = 43;

let r1l5x1 = 70;
let r1l5y1 = 46;
let r1l5x2 = 67;
let r1l5y2 = 46;
let r1l5x3 = 65;
let r1l5y3 = 45;

let r1l6x1 = 70;
let r1l6y1 = 46;
let r1l6x2 = 69;
let r1l6y2 = 47;
let r1l6x3 = 66;
let r1l6y3 = 48;

let r1l9x1 = 76;
let r1l9y1 = 56;
let r1l9x2 = 72;
let r1l9y2 = 54;
let r1l9x3 = 70;
let r1l9y3 = 54;

let r1l10x1 = 70;
let r1l10y1 = 54;
let r1l10x2 = 70;
let r1l10y2 = 52;
let r1l10x3 = 69;
let r1l10y3 = 51;

let r1l11x1 = 70;
let r1l11y1 = 54;
let r1l11x2 = 68;
let r1l11y2 = 52;
let r1l11x3 = 65;
let r1l11y3 = 51;

let r1l14x1 = 65;
let r1l14y1 = 51;
let r1l14x2 = 61;
let r1l14y2 = 48;
let r1l14x3 = 57;
let r1l14y3 = 49;

let r1l13x1 = 60;
let r1l13y1 = 49;
let r1l13x2 = 60;
let r1l13y2 = 49;
let r1l13x3 = 59;
let r1l13y3 = 45;

let r1l12x1 = 62;
let r1l12y1 = 49;
let r1l12x2 = 63;
let r1l12y2 = 48;
let r1l12x3 = 63;
let r1l12y3 = 46;

let r1l15x1 = 63;
let r1l15y1 = 50;
let r1l15x2 = 63;
let r1l15y2 = 52;
let r1l15x3 = 61;
let r1l15y3 = 52;

let r1l17x1 = 70;
let r1l17y1 = 54;
let r1l17x2 = 65;
let r1l17y2 = 55;
let r1l17x3 = 60;
let r1l17y3 = 54;

let r1l19x1 = 60;
let r1l19y1 = 54;
let r1l19x2 = 57;
let r1l19y2 = 55;
let r1l19x3 = 59;
let r1l19y3 = 58;

let r1l18x1 = 59;
let r1l18y1 = 56;
let r1l18x2 = 61;
let r1l18y2 = 56;
let r1l18x3 = 62;
let r1l18y3 = 57;

let r1l17ax1 = 60;
let r1l17ay1 = 54;
let r1l17ax2 = 58;
let r1l17ay2 = 51;
let r1l17ax3 = 52;
let r1l17ay3 = 53;

let r1l22x1 = 56;
let r1l22y1 = 53;
let r1l22x2 = 57;
let r1l22y2 = 55;
let r1l22x3 = 52;
let r1l22y3 = 59;

let r1l23x1 = 55;
let r1l23y1 = 56;
let r1l23x2 = 57;
let r1l23y2 = 55;
let r1l23x3 = 56;
let r1l23y3 = 59;

let r1l23ax1 = 52;
let r1l23ay1 = 53;
let r1l23ax2 = 52;
let r1l23ay2 = 51;
let r1l23ax3 = 50;
let r1l23ay3 = 51;

let r1l24x1 = 52;
let r1l24y1 = 53;
let r1l24x2 = 52;
let r1l24y2 = 55;
let r1l24x3 = 50;
let r1l24y3 = 56;
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start
let p1l1x1 = 88;
let p1l1y1 = 62;
let p1l1x2 = 87;
let p1l1y2 = 59;
let p1l1x3 = 89;
let p1l1y3 = 54;

let p1l7x1 = 89;
let p1l7y1 = 54;
let p1l7x2 = 91;
let p1l7y2 = 49;
let p1l7x3 = 86;
let p1l7y3 = 38;

let p1l8x1 = 89;
let p1l8y1 = 47;
let p1l8x2 = 88;
let p1l8y2 = 45;
let p1l8x3 = 83;
let p1l8y3 = 43;

let p1l9x1 = 83;
let p1l9y1 = 43;
let p1l9x2 = 82;
let p1l9y2 = 44;
let p1l9x3 = 80;
let p1l9y3 = 43;

let p1l10x1 = 83;
let p1l10y1 = 43;
let p1l10x2 = 82;
let p1l10y2 = 40;
let p1l10x3 = 79;
let p1l10y3 = 40;

let p1l11ax1 = 87;
let p1l11ay1 = 40;
let p1l11ax2 = 79;
let p1l11ay2 = 38;
let p1l11ax3 = 78;
let p1l11ay3 = 37;

let p1l11bx1 = 78;
let p1l11by1 = 37;
let p1l11bx2 = 75;
let p1l11by2 = 35;
let p1l11bx3 = 70;
let p1l11by3 = 35;

let p1l12x1 = 73.5;
let p1l12y1 = 35.5;
let p1l12x2 = 71;
let p1l12y2 = 38;
let p1l12x3 = 68;
let p1l12y3 = 38;

let p1l13x1 = 77;
let p1l13y1 = 37;
let p1l13x2 = 71;
let p1l13y2 = 38;
let p1l13x3 = 72;
let p1l13y3 = 40;

let p1l14x1 = 79;
let p1l14y1 = 37.5;
let p1l14x2 = 77;
let p1l14y2 = 40;
let p1l14x3 = 75;
let p1l14y3 = 40;

let p1l15x1 = 73;
let p1l15y1 = 32;
let p1l15x2 = 71;
let p1l15y2 = 32;
let p1l15x3 = 69;
let p1l15y3 = 30;

let p1l16x1 = 78;
let p1l16y1 = 37;
let p1l16x2 = 75;
let p1l16y2 = 35;
let p1l16x3 = 72;
let p1l16y3 = 30;

let p1l17ax1 = 86;
let p1l17ay1 = 38;
let p1l17ax2 = 81;
let p1l17ay2 = 37;
let p1l17ax3 = 76;
let p1l17ay3 = 30;

let p1l17bx1 = 81;
let p1l17by1 = 35;
let p1l17bx2 = 84;
let p1l17by2 = 34;
let p1l17bx3 = 83;
let p1l17by3 = 31;

let p1l18x1 = 77;
let p1l18y1 = 25;
let p1l18x2 = 80;
let p1l18y2 = 29;
let p1l18x3 = 79;
let p1l18y3 = 33;

let p1l19x1 = 79;
let p1l19y1 = 28;
let p1l19x2 = 81;
let p1l19y2 = 28;
let p1l19x3 = 82;
let p1l19y3 = 26;

let p1l18ax1 = 77;
let p1l18ay1 = 25;
let p1l18ax2 = 80;
let p1l18ay2 = 29;
let p1l18ax3 = 79;
let p1l18ay3 = 33;

let p1l20x1 = 93;
let p1l20y1 = 35;
let p1l20x2 = 94;
let p1l20y2 = 36;
let p1l20x3 = 99;
let p1l20y3 = 33;

let p1l21x1 = 86;
let p1l21y1 = 38;
let p1l21x2 = 89;
let p1l21y2 = 30;
let p1l21x3 = 89;
let p1l21y3 = 25;

let p1l22x1 = 84;
let p1l22y1 = 25;
let p1l22x2 = 85;
let p1l22y2 = 28;
let p1l22x3 = 88;
let p1l22y3 = 30;

let p1l23x1 = 88;
let p1l23y1 = 30;
let p1l23x2 = 91;
let p1l23y2 = 30;
let p1l23x3 = 93;
let p1l23y3 = 27;

let p1l24x1 = 87;
let p1l24y1 = 41;
let p1l24x2 = 94;
let p1l24y2 = 36;
let p1l24x3 = 95;
let p1l24y3 = 31;

let p1l25x1 = 87;
let p1l25y1 = 37;
let p1l25x2 = 90;
let p1l25y2 = 35;
let p1l25x3 = 90;
let p1l25y3 = 33;

let p1l27x1 = 89;
let p1l27y1 = 45;
let p1l27x2 = 95;
let p1l27y2 = 39;
let p1l27x3 = 99;
let p1l27y3 = 38;

let p1l28x1 = 93;
let p1l28y1 = 41;
let p1l28x2 = 94;
let p1l28y2 = 39;
let p1l28x3 = 94;
let p1l28y3 = 37;

let p1l29ax1 = 90;
let p1l29ay1 = 49;
let p1l29ax2 = 98;
let p1l29ay2 = 44;
let p1l29ax3 = 97;
let p1l29ay3 = 41;

let p1l29bx1 = 95;
let p1l29by1 = 45;
let p1l29bx2 = 99;
let p1l29by2 = 44;
let p1l29bx3 = 100;
let p1l29by3 = 41;

let p1l30ax1 = 89;
let p1l30ay1 = 55;
let p1l30ax2 = 90;
let p1l30ay2 = 52;
let p1l30ax3 = 95;
let p1l30ay3 = 54;

let p1l30bx1 = 95;
let p1l30by1 = 54;
let p1l30bx2 = 101;
let p1l30by2 = 50;
let p1l30bx3 = 99;
let p1l30by3 = 46;

let p1l31x1 = 99;
let p1l31y1 = 50;
let p1l31x2 = 101;
let p1l31y2 = 44;
let p1l31x3 = 105;
let p1l31y3 = 46;

let p1l32ax1 = 99;
let p1l32ay1 = 50;
let p1l32ax2 = 103;
let p1l32ay2 = 50;
let p1l32ax3 = 104;
let p1l32ay3 = 48;

let p1l33x1 = 106;
let p1l33y1 = 54;
let p1l33x2 = 110;
let p1l33y2 = 51;
let p1l33x3 = 108;
let p1l33y3 = 48;

let p1l34x1 = 95;
let p1l34y1 = 54;
let p1l34x2 = 110;
let p1l34y2 = 58;
let p1l34x3 = 116;
let p1l34y3 = 47;

let p1l35x1 = 114;
let p1l35y1 = 50;
let p1l35x2 = 117;
let p1l35y2 = 51;
let p1l35x3 = 118;
let p1l35y3 = 50;

let p1l36x1 = 110;
let p1l36y1 = 53;
let p1l36x2 = 112;
let p1l36y2 = 55;
let p1l36x3 = 116;
let p1l36y3 = 54;
// druga gałąź - end

// trzecia gałąź - licząc od lewej - gałąź zielona 1 - start
let z1l1ax1 = 95;
let z1l1ay1 = 63;
let z1l1ax2 = 90;
let z1l1ay2 = 54;
let z1l1ax3 = 85;
let z1l1ay3 = 52;

let z1l1bx1 = 85;
let z1l1by1 = 52;
let z1l1bx2 = 81;
let z1l1by2 = 49;
let z1l1bx3 = 77;
let z1l1by3 = 50;

let z1l8x1 = 85;
let z1l8y1 = 52;
let z1l8x2 = 85;
let z1l8y2 = 50;
let z1l8x3 = 85;
let z1l8y3 = 48;

let z1l5x1 = 85;
let z1l5y1 = 52;
let z1l5x2 = 82;
let z1l5y2 = 52;
let z1l5x3 = 81;
let z1l5y3 = 53;

let z1l2x1 = 95;
let z1l2y1 = 63;
let z1l2x2 = 93;
let z1l2y2 = 52;
let z1l2x3 = 94;
let z1l2y3 = 48;

let z1l3x1 = 94;
let z1l3y1 = 52;
let z1l3x2 = 103;
let z1l3y2 = 41;
let z1l3x3 = 116;
let z1l3y3 = 38;

let z1l4x1 = 100;
let z1l4y1 = 47;
let z1l4x2 = 106;
let z1l4y2 = 35;
let z1l4x3 = 113;
let z1l4y3 = 29;

let z1l10x1 = 109;
let z1l10y1 = 32;
let z1l10x2 = 108;
let z1l10y2 = 32;
let z1l10x3 = 108;
let z1l10y3 = 29;

let z1l9x1 = 106;
let z1l9y1 = 36;
let z1l9x2 = 106;
let z1l9y2 = 33;
let z1l9x3 = 104;
let z1l9y3 = 33;

let z1l11x1 = 108;
let z1l11y1 = 35;
let z1l11x2 = 113;
let z1l11y2 = 37;
let z1l11x3 = 114;
let z1l11y3 = 34;

let z1l11ax1 = 110;
let z1l11ay1 = 32;
let z1l11ax2 = 114;
let z1l11ay2 = 30;
let z1l11ax3 = 116;
let z1l11ay3 = 31;

let z1l22x1 = 105;
let z1l22y1 = 43;
let z1l22x2 = 107;
let z1l22y2 = 44;
let z1l22x3 = 108;
let z1l22y3 = 43;

let z1l18x1 = 109;
let z1l18y1 = 41;
let z1l18x2 = 115;
let z1l18y2 = 44;
let z1l18x3 = 120;
let z1l18y3 = 42;

let z1l21x1 = 114;
let z1l21y1 = 42.5;
let z1l21x2 = 118;
let z1l21y2 = 44;
let z1l21x3 = 119;
let z1l21y3 = 48;

let z1l19x1 = 118;
let z1l19y1 = 45;
let z1l19x2 = 120;
let z1l19y2 = 43;
let z1l19x3 = 122;
let z1l19y3 = 44;

let z1l20x1 = 118;
let z1l20y1 = 45;
let z1l20x2 = 120;
let z1l20y2 = 43;
let z1l20x3 = 123;
let z1l20y3 = 48;

let z1l14ax1 = 114;
let z1l14ay1 = 42.5;
let z1l14ax2 = 115;
let z1l14ay2 = 39;
let z1l14ax3 = 119;
let z1l14ay3 = 38;

let z1l1x1 = 119;
let z1l1y1 = 38;
let z1l1x2 = 122;
let z1l1y2 = 38;
let z1l1x3 = 122;
let z1l1y3 = 34;

let z1l14bx1 = 119;
let z1l14by1 = 38;
let z1l14bx2 = 122;
let z1l14by2 = 38;
let z1l14bx3 = 122;
let z1l14by3 = 34;

let z1l16x1 = 119;
let z1l16y1 = 38;
let z1l16x2 = 121;
let z1l16y2 = 41;
let z1l16x3 = 123;
let z1l16y3 = 40;

let z1l17x1 = 122;
let z1l17y1 = 37;
let z1l17x2 = 123;
let z1l17y2 = 38;
let z1l17x3 = 125;
let z1l17y3 = 38;

let z1l13x1 = 118;
let z1l13y1 = 38;
let z1l13x2 = 116;
let z1l13y2 = 36;
let z1l13x3 = 120;
let z1l13y3 = 31;

let z1l12x1 = 117.5;
let z1l12y1 = 36;
let z1l12x2 = 117;
let z1l12y2 = 33;
let z1l12x3 = 115;
let z1l12y3 = 33;

let z2l2x1 = 93;
let z2l2y1 = 77;
let z2l2x2 = 96;
let z2l2y2 = 72;
let z2l2x3 = 99;
let z2l2y3 = 71;
// trzecia gałąź - end

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
let z2l1ax1 = 99;
let z2l1ay1 = 71;
let z2l1ax2 = 100;
let z2l1ay2 = 67;
let z2l1ax3 = 106;
let z2l1ay3 = 66;

let z2l1bx1 = 106;
let z2l1by1 = 66;
let z2l1bx2 = 112;
let z2l1by2 = 65;
let z2l1bx3 = 118;
let z2l1by3 = 63;

let z2l21x1 = 99;
let z2l21y1 = 71;
let z2l21x2 = 101;
let z2l21y2 = 75;
let z2l21x3 = 105;
let z2l21y3 = 74;

let z2l22x1 = 99;
let z2l22y1 = 71;
let z2l22x2 = 101;
let z2l22y2 = 75;
let z2l22x3 = 100;
let z2l22y3 = 76;

let z2l18x1 = 99;
let z2l18y1 = 71;
let z2l18x2 = 105;
let z2l18y2 = 68;
let z2l18x3 = 107;
let z2l18y3 = 73;

let z2l20x1 = 103;
let z2l20y1 = 70;
let z2l20x2 = 105;
let z2l20y2 = 68;
let z2l20x3 = 107;
let z2l20y3 = 68;

let z2l17x1 = 107;
let z2l17y1 = 66;
let z2l17x2 = 110;
let z2l17y2 = 68;
let z2l17x3 = 109;
let z2l17y3 = 72;

let z2l16x1 = 109;
let z2l16y1 = 69;
let z2l16x2 = 110;
let z2l16y2 = 68;
let z2l16x3 = 113;
let z2l16y3 = 69;


let z2l15x1 = 110;
let z2l15y1 = 65;
let z2l15x2 = 116;
let z2l15y2 = 67;
let z2l15x3 = 115;
let z2l15y3 = 69;

let z2l14x1 = 110;
let z2l14y1 = 65;
let z2l14x2 = 116;
let z2l14y2 = 67;
let z2l14x3 = 118;
let z2l14y3 = 65;

let z2l13x1 = 116;
let z2l13y1 = 66;
let z2l13x2 = 116;
let z2l13y2 = 67;
let z2l13x3 = 118;
let z2l13y3 = 68;

let z2l4ax1 = 99;
let z2l4ay1 = 71;
let z2l4ax2 = 99;
let z2l4ay2 = 69;
let z2l4ax3 = 98;
let z2l4ay3 = 68;

let z2l4bx1 = 98;
let z2l4by1 = 68;
let z2l4bx2 = 100;
let z2l4by2 = 64;
let z2l4bx3 = 91;
let z2l4by3 = 63;

let z2l3x1 = 98;
let z2l3y1 = 68;
let z2l3x2 = 97;
let z2l3y2 = 67;
let z2l3x3 = 96;
let z2l3y3 = 70;

let z2l6x1 = 98;
let z2l6y1 = 68;
let z2l6x2 = 101;
let z2l6y2 = 66;
let z2l6x3 = 100;
let z2l6y3 = 61;

let z2l5x1 = 100;
let z2l5y1 = 64;
let z2l5x2 = 101;
let z2l5y2 = 66;
let z2l5x3 = 97;
let z2l5y3 = 61;

let z2l8x1 = 105;
let z2l8y1 = 66;
let z2l8x2 = 105;
let z2l8y2 = 62;
let z2l8x3 = 103;
let z2l8y3 = 60;

let z2l7x1 = 104;
let z2l7y1 = 63;
let z2l7x2 = 105;
let z2l7y2 = 62;
let z2l7x3 = 102;
let z2l7y3 = 63;

let z2l12x1 = 107;
let z2l12y1 = 66;
let z2l12x2 = 105;
let z2l12y2 = 62;
let z2l12x3 = 109;
let z2l12y3 = 60;

let z2l12bx1 = 109;
let z2l12by1 = 65;
let z2l12bx2 = 109;
let z2l12by2 = 60;
let z2l12bx3 = 113;
let z2l12by3 = 61;

let z2l12cx1 = 113;
let z2l12cy1 = 64;
let z2l12cx2 = 115;
let z2l12cy2 = 63;
let z2l12cx3 = 115;
let z2l12cy3 = 61;
// czwarta gałąź - end

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start
let z3l1ax1 = 101;
let z3l1ay1 = 92;
let z3l1ax2 = 101;
let z3l1ay2 = 85;
let z3l1ax3 = 107;
let z3l1ay3 = 82;

let z3l1bx1 = 107;
let z3l1by1 = 82;
let z3l1bx2 = 119;
let z3l1by2 = 76;
let z3l1bx3 = 114;
let z3l1by3 = 72;

let z3l3x1 = 100.5;
let z3l3y1 = 90;
let z3l3x2 = 101;
let z3l3y2 = 85;
let z3l3x3 = 99;
let z3l3y3 = 79;

let z3l4x1 = 107;
let z3l4y1 = 82;
let z3l4x2 = 104;
let z3l4y2 = 80;
let z3l4x3 = 107;
let z3l4y3 = 75;

let z3l5x1 = 106;
let z3l5y1 = 77;
let z3l5x2 = 102;
let z3l5y2 = 76;
let z3l5x3 = 103;
let z3l5y3 = 80;

let z3l6x1 = 106;
let z3l6y1 = 79;
let z3l6x2 = 110;
let z3l6y2 = 80;
let z3l6x3 = 112;
let z3l6y3 = 73;

let z3l8x1 = 110;
let z3l8y1 = 80.5;
let z3l8x2 = 113;
let z3l8y2 = 82;
let z3l8x3 = 117;
let z3l8y3 = 80;

let z3l9x1 = 115.5;
let z3l9y1 = 80.5;
let z3l9x2 = 113;
let z3l9y2 = 82;
let z3l9x3 = 116;
let z3l9y3 = 78;

let z3l7x1 = 114.5;
let z3l7y1 = 76;
let z3l7x2 = 117;
let z3l7y2 = 74;
let z3l7x3 = 119;
let z3l7y3 = 75;

let r2l1x1 = 95;
let r2l1y1 = 63;
let r2l1x2 = 97;
let r2l1y2 = 55;
let r2l1x3 = 106;
let r2l1y3 = 59;

let r2l2x1 = 106;
let r2l2y1 = 59;
let r2l2x2 = 117;
let r2l2y2 = 53;
let r2l2x3 = 124;
let r2l2y3 = 57;

let r2l3x1 = 95;
let r2l3y1 = 63;
let r2l3x2 = 96;
let r2l3y2 = 54;
let r2l3x3 = 102;
let r2l3y3 = 52;

let r2l7x1 = 120;
let r2l7y1 = 55.5;
let r2l7x2 = 124;
let r2l7y2 = 54;
let r2l7x3 = 124;
let r2l7y3 = 50;

let r2l8x1 = 122;
let r2l8y1 = 54;
let r2l8x2 = 128;
let r2l8y2 = 55;
let r2l8x3 = 130;
let r2l8y3 = 51;

let r2l9x1 = 118;
let r2l9y1 = 56;
let r2l9x2 = 123;
let r2l9y2 = 57;
let r2l9x3 = 122;
let r2l9y3 = 60;

let r2l10x1 = 110;
let r2l10y1 = 57.5;
let r2l10x2 = 113;
let r2l10y2 = 60;
let r2l10x3 = 116;
let r2l10y3 = 58;

let r2l11x1 = 116;
let r2l11y1 = 58;
let r2l11x2 = 122;
let r2l11y2 = 66;
let r2l11x3 = 126;
let r2l11y3 = 59;

let r2l1ax1 = 122;
let r2l1ay1 = 62;
let r2l1ax2 = 122;
let r2l1ay2 = 66;
let r2l1ax3 = 126;
let r2l1ay3 = 65;
// piąta gałąź - end

// szusta gałąź - gałąź czerwona 4 - start
let r4l2x1 = 116;
let r4l2y1 = 90.5;
let r4l2x2 = 127;
let r4l2y2 = 93;
let r4l2x3 = 129;
let r4l2y3 = 85;

let r4l3x1 = 116;
let r4l3y1 = 90.5;
let r4l3x2 = 120;
let r4l3y2 = 86;
let r4l3x3 = 126;
let r4l3y3 = 86;

let r4l4x1 = 120;
let r4l4y1 = 87;
let r4l4x2 = 121;
let r4l4y2 = 86;
let r4l4x3 = 121;
let r4l4y3 = 84;

let r4l7x1 = 128;
let r4l7y1 = 88;
let r4l7x2 = 133;
let r4l7y2 = 89;
let r4l7x3 = 135;
let r4l7y3 = 87;

let r4l11x1 = 116;
let r4l11y1 = 90.5;
let r4l11x2 = 117;
let r4l11y2 = 92;
let r4l11x3 = 116;
let r4l11y3 = 95;

let r4l9x1 = 119;
let r4l9y1 = 91;
let r4l9x2 = 123;
let r4l9y2 = 93;
let r4l9x3 = 125;
let r4l9y3 = 97;

let r4l10x1 = 121;
let r4l10y1 = 91;
let r4l10x2 = 121;
let r4l10y2 = 92;
let r4l10x3 = 120;
let r4l10y3 = 96;

let r4l13x1 = 124;
let r4l13y1 = 94;
let r4l13x2 = 126;
let r4l13y2 = 92;
let r4l13x3 = 128;
let r4l13y3 = 94;

let r4l8x1 = 125;
let r4l8y1 = 90;
let r4l8x2 = 126;
let r4l8y2 = 92;
let r4l8x3 = 132;
let r4l8y3 = 91;
// szusta gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
let p2l1x1 = 113;
let p2l1y1 = 89;
let p2l1x2 = 119;
let p2l1y2 = 83;
let p2l1x3 = 122;
let p2l1y3 = 81;

let p2l2x1 = 122;
let p2l2y1 = 81;
let p2l2x2 = 123;
let p2l2y2 = 76;
let p2l2x3 = 127;
let p2l2y3 = 75;

let p2l6x1 = 122;
let p2l6y1 = 81;
let p2l6x2 = 124;
let p2l6y2 = 84;
let p2l6x3 = 132;
let p2l6y3 = 80;

let p2l3ax1 = 127;
let p2l3ay1 = 75;
let p2l3ax2 = 132;
let p2l3ay2 = 71;
let p2l3ax3 = 136;
let p2l3ay3 = 75;

let p2l3bx1 = 136;
let p2l3by1 = 75;
let p2l3bx2 = 137;
let p2l3by2 = 75;
let p2l3bx3 = 138;
let p2l3by3 = 71;

let p2l4x1 = 138;
let p2l4y1 = 71;
let p2l4x2 = 140;
let p2l4y2 = 67;
let p2l4x3 = 145;
let p2l4y3 = 66;

let p2l5x1 = 138;
let p2l5y1 = 71;
let p2l5x2 = 142;
let p2l5y2 = 72;
let p2l5x3 = 145;
let p2l5y3 = 70;

let p2l7x1 = 126;
let p2l7y1 = 82;
let p2l7x2 = 128;
let p2l7y2 = 84;
let p2l7x3 = 132;
let p2l7y3 = 84;

let p2l8x1 = 126;
let p2l8y1 = 82;
let p2l8x2 = 128;
let p2l8y2 = 84;
let p2l8x3 = 124;
let p2l8y3 = 84;

let p2l14x1 = 127;
let p2l14y1 = 75;
let p2l14x2 = 132;
let p2l14y2 = 71;
let p2l14x3 = 128;
let p2l14y3 = 63;

let p2l15x1 = 127;
let p2l15y1 = 75;
let p2l15x2 = 129;
let p2l15y2 = 72;
let p2l15x3 = 126;
let p2l15y3 = 67;

let p2l17x1 = 127;
let p2l17y1 = 72;
let p2l17x2 = 123;
let p2l17y2 = 71;
let p2l17x3 = 119;
let p2l17y3 = 73;

let p2l16ax1 = 125;
let p2l16ay1 = 71.5;
let p2l16ax2 = 123;
let p2l16ay2 = 68;
let p2l16ax3 = 120;
let p2l16ay3 = 68;

let p2l16bx1 = 125;
let p2l16by1 = 71.5;
let p2l16bx2 = 123;
let p2l16by2 = 68;
let p2l16bx3 = 123;
let p2l16by3 = 67;

let p2l12x1 = 130;
let p2l12y1 = 69;
let p2l12x2 = 132;
let p2l12y2 = 71;
let p2l12x3 = 135;
let p2l12y3 = 68;

let p2l13x1 = 130;
let p2l13y1 = 69;
let p2l13x2 = 130;
let p2l13y2 = 65;
let p2l13x3 = 135;
let p2l13y3 = 65;

let p2l10x1 = 136;
let p2l10y1 = 75;
let p2l10x2 = 136;
let p2l10y2 = 72;
let p2l10x3 = 133;
let p2l10y3 = 71;

let p2l11x1 = 135;
let p2l11y1 = 72;
let p2l11x2 = 136;
let p2l11y2 = 72;
let p2l11x3 = 137;
let p2l11y3 = 69;
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
let r3l1x1 = 124;
let r3l1y1 = 77;
let r3l1x2 = 140;
let r3l1y2 = 82;
let r3l1x3 = 147;
let r3l1y3 = 71;

let r3l2x1 = 143;
let r3l2y1 = 75;
let r3l2x2 = 153;
let r3l2y2 = 77;
let r3l2x3 = 158;
let r3l2y3 = 70;

let r3l17x1 = 144;
let r3l17y1 = 75;
let r3l17x2 = 147;
let r3l17y2 = 75;
let r3l17x3 = 150;
let r3l17y3 = 72;

let r3l16x1 = 150;
let r3l16y1 = 75;
let r3l16x2 = 152;
let r3l16y2 = 79;
let r3l16x3 = 155;
let r3l16y3 = 76;

let r3l3x1 = 135;
let r3l3y1 = 78;
let r3l3x2 = 140;
let r3l3y2 = 82;
let r3l3x3 = 138;
let r3l3y3 = 88;

let r3l7x1 = 139;
let r3l7y1 = 78;
let r3l7x2 = 142;
let r3l7y2 = 83;
let r3l7x3 = 146;
let r3l7y3 = 80;

let r3l8x1 = 146;
let r3l8y1 = 80;
let r3l8x2 = 150;
let r3l8y2 = 80;
let r3l8x3 = 150;
let r3l8y3 = 85;

let r3l9x1 = 150;
let r3l9y1 = 85;
let r3l9x2 = 152;
let r3l9y2 = 88;
let r3l9x3 = 154;
let r3l9y3 = 84;

let r3l10x1 = 150;
let r3l10y1 = 82;
let r3l10x2 = 153;
let r3l10y2 = 83;
let r3l10x3 = 154;
let r3l10y3 = 81;

let r3l11x1 = 148;
let r3l11y1 = 80;
let r3l11x2 = 149;
let r3l11y2 = 77;
let r3l11x3 = 157;
let r3l11y3 = 80;

let r3l12x1 = 157;
let r3l12y1 = 80;
let r3l12x2 = 160;
let r3l12y2 = 77;
let r3l12x3 = 159;
let r3l12y3 = 73;

let r3l15x1 = 157;
let r3l15y1 = 80;
let r3l15x2 = 159;
let r3l15y2 = 80;
let r3l15x3 = 160;
let r3l15y3 = 84;

let r3l13x1 = 159;
let r3l13y1 = 78;
let r3l13x2 = 163;
let r3l13y2 = 77;
let r3l13x3 = 165;
let r3l13y3 = 81;

let r3l14x1 = 159;
let r3l14y1 = 78;
let r3l14x2 = 163;
let r3l14y2 = 77;
let r3l14x3 = 163;
let r3l14y3 = 74;

let r3l6x1 = 138;
let r3l6y1 = 82;
let r3l6x2 = 138;
let r3l6y2 = 85;
let r3l6x3 = 144;
let r3l6y3 = 83;

let r3l5x1 = 143;
let r3l5y1 = 84;
let r3l5x2 = 145;
let r3l5y2 = 85;
let r3l5x3 = 144;
let r3l5y3 = 87;

let r3l4x1 = 139;
let r3l4y1 = 85;
let r3l4x2 = 141;
let r3l4y2 = 86;
let r3l4x3 = 142;
let r3l4y3 = 87;

let d1l12x1 = 95;
let d1l12y1 = 165;
let d1l12x2 = 91;
let d1l12y2 = 164;
let d1l12x3 = 89;
let d1l12y3 = 170;

let d1l1x1 = 93;
let d1l1y1 = 165;
let d1l1x2 = 91;
let d1l1y2 = 164;
let d1l1x3 = 85;
let d1l1y3 = 166;

let d1l2x1 = 87;
let d1l2y1 = 165;
let d1l2x2 = 85;
let d1l2y2 = 163;
let d1l2x3 = 82;
let d1l2y3 = 163;

let d1l10x1 = 89;
let d1l10y1 = 170;
let d1l10x2 = 85;
let d1l10y2 = 168;
let d1l10x3 = 84;
let d1l10y3 = 171;

let d1l11x1 = 89;
let d1l11y1 = 170;
let d1l11x2 = 90;
let d1l11y2 = 172;
let d1l11x3 = 86;
let d1l11y3 = 173;

let d1l8x1 = 89;
let d1l8y1 = 170;
let d1l8x2 = 90;
let d1l8y2 = 172;
let d1l8x3 = 91;
let d1l8y3 = 175;

let d1l7x1 = 86;
let d1l7y1 = 173;
let d1l7x2 = 86;
let d1l7y2 = 175;
let d1l7x3 = 89;
let d1l7y3 = 176;

let d1l6x1 = 86;
let d1l6y1 = 173;
let d1l6x2 = 83;
let d1l6y2 = 174;
let d1l6x3 = 84;
let d1l6y3 = 177;

let d1l3x1 = 84;
let d1l3y1 = 171;
let d1l3x2 = 85;
let d1l3y2 = 168;
let d1l3x3 = 79;
let d1l3y3 = 167;

let d1l4x1 = 84;
let d1l4y1 = 171;
let d1l4x2 = 85;
let d1l4y2 = 168;
let d1l4x3 = 77;
let d1l4y3 = 172;

let d1l5x1 = 81;
let d1l5y1 = 171;
let d1l5x2 = 83;
let d1l5y2 = 173;
let d1l5x3 = 81;
let d1l5y3 = 176;
// dziewiąta gałąź - end

// extra gałąź - strat	
let exl9x1 = 138;
let exl9y1 = 82;
let exl9x2 = 138;
let exl9y2 = 85;
let exl9x3 = 134;
let exl9y3 = 85;

let exl10x1 = 137;
let exl10y1 = 80;
let exl10x2 = 136;
let exl10y2 = 83;
let exl10x3 = 133;
let exl10y3 = 82;

let exl11x1 = 150;
let exl11y1 = 85;
let exl11x2 = 146;
let exl11y2 = 88;
let exl11x3 = 146;
let exl11y3 = 84;

let exl4x1 = 114;
let exl4y1 = 42.5;
let exl4x2 = 118;
let exl4y2 = 44;
let exl4x3 = 110;
let exl4y3 = 46;

let exl6x1 = 79;
let exl6y1 = 45;
let exl6x2 = 75;
let exl6y2 = 46;
let exl6x3 = 73;
let exl6y3 = 44;

let exl5x1 = 143;
let exl5y1 = 75;
let exl5x2 = 143;
let exl5y2 = 73;
let exl5x3 = 140;
let exl5y3 = 73;

let exl12x1 = 133;
let exl12y1 = 78;
let exl12x2 = 132;
let exl12y2 = 76;
let exl12x3 = 130;
let exl12y3 = 76;

let exl11ax1 = 133;
let exl11ay1 = 78;
let exl11ax2 = 132;
let exl11ay2 = 76;
let exl11ax3 = 134;
let exl11ay3 = 76;

let exl1x1 = 122;
let exl1y1 = 81;
let exl1x2 = 122;
let exl1y2 = 78;
let exl1x3 = 119;
let exl1y3 = 78;

let exl2x1 = 114;
let exl2y1 = 88;
let exl2x2 = 116;
let exl2y2 = 84;
let exl2x3 = 112;
let exl2y3 = 83;

let exl3x1 = 114;
let exl3y1 = 88;
let exl3x2 = 112;
let exl3y2 = 85;
let exl3x3 = 108;
let exl3y3 = 86;

let exl8x1 = 70;
let exl8y1 = 54;
let exl8x2 = 65;
let exl8y2 = 55;
let exl8x3 = 67;
let exl8y3 = 59;

let exl7x1 = 76;
let exl7y1 = 56;
let exl7x2 = 77;
let exl7y2 = 60;
let exl7x3 = 71;
let exl7y3 = 58;

let exl13x1 = 74;
let exl13y1 = 59;
let exl13x2 = 73;
let exl13y2 = 62;
let exl13x3 = 77;
let exl13y3 = 61;
// extra gałąź - end

// randomX and randomY dla pozycji drzew i liści - start
// losuje x od -50 --> randomNumberXMinus do 50 --> randomNumberXPlus
let randomNumberXPlus = Math.floor(Math.random() * 50) + 1;
let randomNumberXMinus = Math.floor(Math.random() * 50 * (-1)) + 1;

// losuje y od -50 --> randomNumberXMinus do 50 --> randomNumberXPlus
let randomNumberYPlus = Math.floor(Math.random() * 50) + 1;
let randomNumberYMinus = Math.floor(Math.random() * 50 * (-1)) + 1;

// z wcześniej wylosowanych punktów tworzymy tablicę
let randomNumberX = [randomNumberXPlus, randomNumberXMinus];
let randomNumberY = [randomNumberYPlus, randomNumberYMinus];

// z tablicy X i Y ponownie losujemy  --> ujemną lud dodatnią wartość/ liczbę
let randomNumberXIndex = Math.floor(Math.random() * randomNumberX.length);
let randomNumberYIndex = Math.floor(Math.random() * randomNumberY.length);

// zaczytujemy wylosowany wcześniej indeks;
let randomX = randomNumberX[randomNumberXIndex];
let randomY = randomNumberY[randomNumberYIndex];
// randomX and randomY dla pozycji drzew i liści - end

// kolory liści - start
let leafColors = ["#EBDB24", "#EBC33F", "#FFA61A", "#FF872F", "#FF491D",
			  "#EBDE5A", "#EBBE29", "#FF863B", "#FF6236", "#FF262B"];
let randomColorLeafIndex1 = Math.floor(Math.random() * leafColors.length);
let randomColorLeafIndex2 = Math.floor(Math.random() * leafColors.length);
let randomColorLeafIndex3 = Math.floor(Math.random() * leafColors.length);
let randomColorLeafIndex4 = Math.floor(Math.random() * leafColors.length);
let randomColorLeafIndex5 = Math.floor(Math.random() * leafColors.length);
let randomColorLeafIndex6 = Math.floor(Math.random() * leafColors.length);
//kolory, dla każdego z putnktów krzywej beziera
let leafColor1 = leafColors[randomColorLeafIndex1];
let leafColor2 = leafColors[randomColorLeafIndex2];
let leafColor3 = leafColors[randomColorLeafIndex3];
let leafColor4 = leafColors[randomColorLeafIndex4];
let leafColor5 = leafColors[randomColorLeafIndex5];
let leafColor6 = leafColors[randomColorLeafIndex6];
// kolory liści - end

// kolory pni drzewa i gałęzi - start
let treeColors = ["#26160A", "#3A2717", "#301300", "#2A170D", "#29190C"];
let randomColorTreeIndex1 = Math.floor(Math.random() * treeColors.length);
let randomColorTreeIndex2 = Math.floor(Math.random() * treeColors.length);
let randomColorTreeIndex3 = Math.floor(Math.random() * treeColors.length);
let randomColorTreeIndex4 = Math.floor(Math.random() * treeColors.length);
let randomColorTreeIndex5 = Math.floor(Math.random() * treeColors.length);
let randomColorTreeIndex6 = Math.floor(Math.random() * treeColors.length);
//kolory, dla każdego z putnktów krzywej beziera
let treeColor1 = treeColors[randomColorTreeIndex1];
let treeColor2 = treeColors[randomColorTreeIndex2];
let treeColor3 = treeColors[randomColorTreeIndex3];
let treeColor4 = treeColors[randomColorTreeIndex4];
let treeColor5 = treeColors[randomColorTreeIndex5];
let treeColor6 = treeColors[randomColorTreeIndex6];
// kolory liści - end

//LINIE DRZEW - START
let x0 = 70;
let y0 = 420;

let x1 = 210;
let y1 = 460;

// DŁUGOŚĆ - linia 0 -> fx, fy
let startArrayTreeLineX = [x0];
let startArrayTreeLineY = [y0];
// lDŁUGOŚĆ - inia 1 -> fx1, fy
let startArrayTreeLineX1 = [x1];
let startArrayTreeLineY1 = [y1];
//LINIE DRZEW - FINISH

// TABLICE Z PUNKTAMI WOKÓŁ KÓRYCH RYSOWANE SĄ STAŁĘ LIŚCIE - BEZ RUCHU - START
let startArrayX1 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1x1,
 r1l7x1,
 r1l28x1,
 r1l29x1,
 r1l30x1,
 r1l2x1,
 r1l8x1,
 r1l2ax1,
 r1l3x1,
 r1l4x1,
 r1l5x1,
 r1l6x1,
 r1l9x1,
 r1l10x1,
 r1l11x1,
 r1l14x1,
 r1l13x1,
 r1l12x1,
 r1l15x1,
 r1l17x1,
 r1l19x1,
 r1l18x1,
 r1l17ax1,
 r1l22x1,
 r1l23x1,
 r1l23ax1,
 r1l24x1,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1x1,
 p1l7x1,
 p1l8x1,
 p1l9x1,
 p1l10x1,
 p1l11ax1,
 p1l11bx1,
 p1l12x1,
 p1l13x1,
 p1l14x1,
 p1l15x1,
 p1l16x1,
 p1l17ax1,
 p1l17bx1,
 p1l18x1,
 p1l19x1,
 p1l18ax1,
 p1l20x1,
 p1l21x1,
 p1l22x1,
 p1l23x1,
 p1l24x1,
 p1l25x1,
 p1l27x1,
 p1l28x1,
 p1l29ax1,
 p1l29bx1,
 p1l30ax1,
 p1l30bx1,
 p1l31x1,
 p1l32ax1,
 p1l33x1,
 p1l34x1,
 p1l35x1,
 p1l36x1,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ax1,
 z1l1bx1,
 z1l8x1,
 z1l5x1,
 z1l2x1,
 z1l3x1,
 z1l4x1,
 z1l10x1,
 z1l9x1,
 z1l11x1,
 z1l11ax1,
 z1l22x1,
 z1l18x1,
 z1l21x1,
 z1l19x1,
 z1l20x1,
 z1l14ax1,
 z1l14bx1,
 z1l16x1,
 z1l17x1,
 z1l13x1,
 z1l12x1,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2x1,
 z2l1ax1,
 z2l1bx1,
 z2l21x1,
 z2l22x1,
 z2l18x1,
 z2l20x1,
 z2l17x1,
 z2l16x1,
 z2l15x1,
 z2l14x1,
 z2l13x1,
 z2l4ax1,
 z2l4bx1,
 z2l3x1,
 z2l6x1,
 z2l5x1,
 z2l8x1,
 z2l7x1,
 z2l12x1,
 z2l12bx1,
 z2l12cx1,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ax1,
 z3l1bx1,
 z3l3x1,
 z3l4x1,
 z3l5x1,
 z3l6x1,
 z3l8x1,
 z3l9x1,
 z3l7x1,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1x1,
 r2l2x1,
 r2l3x1,
 r2l7x1,
 r2l8x1,
 r2l9x1,
 r2l10x1,
 r2l11x1,
 r2l1ax1,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2x1,
r4l3x1,
r4l4x1,
r4l7x1,
r4l11x1,
r4l9x1,
r4l10x1,
r4l13x1,
r4l8x1,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1x1,
 p2l2x1,
 p2l6x1,
 p2l3ax1,
 p2l3bx1,
 p2l4x1,
 p2l5x1,
 p2l7x1,
 p2l8x1,
 p2l14x1,
 p2l15x1,
 p2l17x1,
 p2l16ax1,
 p2l16bx1,
 p2l12x1,
 p2l13x1,
 p2l10x1,
 p2l11x1,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1x1,
 r3l2x1,
 r3l17x1,
 r3l16x1,
 r3l3x1,
 r3l7x1,
 r3l8x1,
 r3l9x1,
 r3l10x1,
 r3l11x1,
 r3l12x1,
 r3l15x1,
 r3l13x1,
 r3l14x1,
 r3l6x1,
 r3l5x1,
 r3l4x1,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12x1,
d1l1x1,
d1l2x1,
d1l10x1,
d1l11x1,
d1l8x1,
d1l7x1,
d1l6x1,
d1l3x1,
d1l4x1,
d1l5x1,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9x1,
exl10x1,
exl11x1,
exl4x1,
exl6x1,
exl5x1,
exl12x1,
exl11ax1,
exl1x1,
exl2x1,
exl3x1,
exl8x1,
exl7x1,
exl13x1
// extra gałąź - end	

];

let startArrayX2 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1x2,
 r1l7x2,
 r1l28x2,
 r1l29x2,
 r1l30x2,
 r1l2x2,
 r1l8x2,
 r1l2ax2,
 r1l3x2,
 r1l4x2,
 r1l5x2,
 r1l6x2,
 r1l9x2,
 r1l10x2,
 r1l11x2,
 r1l14x2,
 r1l13x2,
 r1l12x2,
 r1l15x2,
 r1l17x2,
 r1l19x2,
 r1l18x2,
 r1l17ax2,
 r1l22x2,
 r1l23x2,
 r1l23ax2,
 r1l24x2,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1x2,
 p1l7x2,
 p1l8x2,
 p1l9x2,
 p1l10x2,
 p1l11ax2,
 p1l11bx2,
 p1l12x2,
 p1l13x2,
 p1l14x2,
 p1l15x2,
 p1l16x2,
 p1l17ax2,
 p1l17bx2,
 p1l18x2,
 p1l19x2,
 p1l18ax2,
 p1l20x2,
 p1l21x2,
 p1l22x2,
 p1l23x2,
 p1l24x2,
 p1l25x2,
 p1l27x2,
 p1l28x2,
 p1l29ax2,
 p1l29bx2,
 p1l30ax2,
 p1l30bx2,
 p1l31x2,
 p1l32ax2,
 p1l33x2,
 p1l34x2,
 p1l35x2,
 p1l36x2,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ax2,
 z1l1bx2,
 z1l8x2,
 z1l5x2,
 z1l2x2,
 z1l3x2,
 z1l4x2,
 z1l10x2,
 z1l9x2,
 z1l11x2,
 z1l11ax2,
 z1l22x2,
 z1l18x2,
 z1l21x2,
 z1l19x2,
 z1l20x2,
 z1l14ax2,
 z1l14bx2,
 z1l16x2,
 z1l17x2,
 z1l13x2,
 z1l12x2,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2x2,
 z2l1ax2,
 z2l1bx2,
 z2l21x2,
 z2l22x2,
 z2l18x2,
 z2l20x2,
 z2l17x2,
 z2l16x2,
 z2l15x2,
 z2l14x2,
 z2l13x2,
 z2l4ax2,
 z2l4bx2,
 z2l3x2,
 z2l6x2,
 z2l5x2,
 z2l8x2,
 z2l7x2,
 z2l12x2,
 z2l12bx2,
 z2l12cx2,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ax2,
 z3l1bx2,
 z3l3x2,
 z3l4x2,
 z3l5x2,
 z3l6x2,
 z3l8x2,
 z3l9x2,
 z3l7x2,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1x2,
 r2l2x2,
 r2l3x2,
 r2l7x2,
 r2l8x2,
 r2l9x2,
 r2l10x2,
 r2l11x2,
 r2l1ax2,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2x2,
r4l3x2,
r4l4x2,
r4l7x2,
r4l11x2,
r4l9x2,
r4l10x2,
r4l13x1,
r4l8x2,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1x2,
 p2l2x2,
 p2l6x2,
 p2l3ax2,
 p2l3bx2,
 p2l4x2,
 p2l5x2,
 p2l7x2,
 p2l8x2,
 p2l14x2,
 p2l15x2,
 p2l17x2,
 p2l16ax2,
 p2l16bx2,
 p2l12x2,
 p2l13x2,
 p2l10x2,
 p2l11x2,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1x2,
 r3l2x2,
 r3l17x2,
 r3l16x2,
 r3l3x2,
 r3l7x2,
 r3l8x2,
 r3l9x2,
 r3l10x2,
 r3l11x2,
 r3l12x2,
 r3l15x2,
 r3l13x2,
 r3l14x2,
 r3l6x2,
 r3l5x2,
 r3l4x2,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12x2,
d1l1x2,
d1l2x2,
d1l10x2,
d1l11x2,
d1l8x2,
d1l7x2,
d1l6x2,
d1l3x2,
d1l4x2,
d1l5x2,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9x2,
exl10x2,
exl11x2,
exl4x2,
exl6x2,
exl5x2,
exl12x2,
exl11ax2,
exl1x2,
exl2x2,
exl3x2,
exl8x2,
exl7x2,
exl13x2,
// extra gałąź - end	

];

let startArrayX3 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1x3,
 r1l7x3,
 r1l28x3,
 r1l29x3,
 r1l30x3,
 r1l2x3,
 r1l8x3,
 r1l2ax3,
 r1l3x3,
 r1l4x3,
 r1l5x3,
 r1l6x3,
 r1l9x3,
 r1l10x3,
 r1l11x3,
 r1l14x3,
 r1l13x3,
 r1l12x3,
 r1l15x3,
 r1l17x3,
 r1l19x3,
 r1l18x3,
 r1l17ax3,
 r1l22x3,
 r1l23x3,
 r1l23ax3,
 r1l24x3,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1x3,
 p1l7x3,
 p1l8x3,
 p1l9x3,
 p1l10x3,
 p1l11ax3,
 p1l11bx3,
 p1l12x3,
 p1l13x3,
 p1l14x3,
 p1l15x3,
 p1l16x3,
 p1l17ax3,
 p1l17bx3,
 p1l18x3,
 p1l19x3,
 p1l18ax3,
 p1l20x3,
 p1l21x3,
 p1l22x3,
 p1l23x3,
 p1l24x3,
 p1l25x3,
 p1l27x3,
 p1l28x3,
 p1l29ax3,
 p1l29bx3,
 p1l30ax3,
 p1l30bx3,
 p1l31x3,
 p1l32ax3,
 p1l33x3,
 p1l34x3,
 p1l35x3,
 p1l36x3,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ax3,
 z1l1bx3,
 z1l8x3,
 z1l5x3,
 z1l2x3,
 z1l3x3,
 z1l4x3,
 z1l10x3,
 z1l9x3,
 z1l11x3,
 z1l11ax3,
 z1l22x3,
 z1l18x3,
 z1l21x3,
 z1l19x3,
 z1l20x3,
 z1l14ax3,
 z1l14bx3,
 z1l16x3,
 z1l17x3,
 z1l13x3,
 z1l12x3,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2x3,
 z2l1ax3,
 z2l1bx3,
 z2l21x3,
 z2l22x3,
 z2l18x3,
 z2l20x3,
 z2l17x3,
 z2l16x3,
 z2l15x3,
 z2l14x3,
 z2l13x3,
 z2l4ax3,
 z2l4bx3,
 z2l3x3,
 z2l6x3,
 z2l5x3,
 z2l8x3,
 z2l7x3,
 z2l12x3,
 z2l12bx3,
 z2l12cx3,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ax3,
 z3l1bx3,
// z3l2x3, 
 z3l3x3,
 z3l4x3,
 z3l5x3,
 z3l6x3,
 z3l8x3,
 z3l9x3,
 z3l7x3,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1x3,
 r2l2x3,
 r2l3x3,
 r2l7x3,
 r2l8x3,
 r2l9x3,
 r2l10x3,
 r2l11x3,
 r2l1ax3,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2x3,
r4l3x3,
r4l4x3,
r4l7x3,
r4l11x3,
r4l9x3,
r4l10x3,
r4l13x3,
r4l8x3,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1x3,
 p2l2x3,
 p2l6x3,
 p2l3ax3,
 p2l3bx3,
 p2l4x3,
 p2l5x3,
 p2l7x3,
 p2l8x3,
 p2l14x3,
 p2l15x3,
 p2l17x3,
 p2l16ax3,
 p2l16bx3,
 p2l12x3,
 p2l13x3,
 p2l10x3,
 p2l11x3,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1x3,
 r3l2x3,
 r3l17x3,
 r3l16x3,
 r3l3x3,
 r3l7x3,
 r3l8x3,
 r3l9x3,
 r3l10x3,
 r3l11x3,
 r3l12x3,
 r3l15x3,
 r3l13x3,
 r3l14x3,
 r3l6x3,
 r3l5x3,
 r3l4x3,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12x3,
d1l1x3,
d1l2x3,
d1l10x3,
d1l11x3,
d1l8x3,
d1l7x3,
d1l6x3,
d1l3x3,
d1l4x3,
d1l5x3,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9x3,
exl10x3,
exl11x3,
exl4x3,
exl6x3,
exl5x3,
exl12x3,
exl11ax3,
exl1x3,
exl2x3,
exl3x3,
exl8x3,
exl7x3,
exl13x3
// extra gałąź - end	

];

let startArrayY1 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1y1,
 r1l7y1,
 r1l28y1,
 r1l29y1,
 r1l30y1,
 r1l2y1,
 r1l8y1,
 r1l2ay1,
 r1l3y1,
 r1l4y1,
 r1l5y1,
 r1l6y1,
 r1l9y1,
 r1l10y1,
 r1l11y1,
 r1l14y1,
 r1l13y1,
 r1l12y1,
 r1l15y1,
 r1l17y1,
 r1l19y1,
 r1l18y1,
 r1l17ay1,
 r1l22y1,
 r1l23y1,
 r1l23ay1,
 r1l24y1,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1y1,
 p1l7y1,
 p1l8y1,
 p1l9y1,
 p1l10y1,
 p1l11ay1,
 p1l11by1,
 p1l12y1,
 p1l13y1,
 p1l14y1,
 p1l15y1,
 p1l16y1,
 p1l17ay1,
 p1l17by1,
 p1l18y1,
 p1l19y1,
 p1l18ay1,
 p1l20y1,
 p1l21y1,
 p1l22y1,
 p1l23y1,
 p1l24y1,
 p1l25y1,
 p1l27y1,
 p1l28y1,
 p1l29ay1,
 p1l29by1,
 p1l30ay1,
 p1l30by1,
 p1l31y1,
 p1l32ay1,
 p1l33y1,
 p1l34y1,
 p1l35y1,
 p1l36y1,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ay1,
 z1l1by1,
 z1l8y1,
 z1l5y1,
 z1l2y1,
 z1l3y1,
 z1l4y1,
 z1l10y1,
 z1l9y1,
 z1l11y1,
 z1l11ay1,
 z1l22y1,
 z1l18y1,
 z1l21y1,
 z1l19y1,
 z1l20y1,
 z1l14ay1,
 z1l14by1,
 z1l16y1,
 z1l17y1,
 z1l13y1,
 z1l12y1,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2y1,
 z2l1ay1,
 z2l1by1,
 z2l21y1,
 z2l22y1,
 z2l18y1,
 z2l20y1,
 z2l17y1,
 z2l16y1,
 z2l15y1,
 z2l14y1,
 z2l13y1,
 z2l4ay1,
 z2l4by1,
 z2l3y1,
 z2l6y1,
 z2l5y1,
 z2l8y1,
 z2l7y1,
 z2l12y1,
 z2l12by1,
 z2l12cy1,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ay1,
 z3l1by1,
// z3l2y1, 
 z3l3y1,
 z3l4y1,
 z3l5y1,
 z3l6y1,
 z3l8y1,
 z3l9y1,
 z3l7y1,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1y1,
 r2l2y1,
 r2l3y1,
 r2l7y1,
 r2l8y1,
 r2l9y1,
 r2l10y1,
 r2l11y1,
 r2l1ay1,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2y1,
r4l3y1,
r4l4y1,
r4l7y1,
r4l11y1,
r4l9y1,
r4l10y1,
r4l13y1,
r4l8y1,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1y1,
 p2l2y1,
 p2l6y1,
 p2l3ay1,
 p2l3by1,
 p2l4y1,
 p2l5y1,
 p2l7y1,
 p2l8y1,
 p2l14y1,
 p2l15y1,
 p2l17y1,
 p2l16ay1,
 p2l16by1,
 p2l12y1,
 p2l13y1,
 p2l10y1,
 p2l11y1,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1y1,
 r3l2y1,
 r3l17y1,
 r3l16y1,
 r3l3y1,
 r3l7y1,
 r3l8y1,
 r3l9y1,
 r3l10y1,
 r3l11y1,
 r3l12y1,
 r3l15y1,
 r3l13y1,
 r3l14y1,
 r3l6y1,
 r3l5y1,
 r3l4y1,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12y1,
d1l1y1,
d1l2y1,
d1l10y1,
d1l11y1,
d1l8y1,
d1l7y1,
d1l6y1,
d1l3y1,
d1l4y1,
d1l5y1,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9y1,
exl10y1,
exl11y1,
exl4y1,
exl6y1,
exl5y1,
exl12y1,
exl11ay1,
exl1y1,
exl2y1,
exl3y1,
exl8y1,
exl7y1,
exl13y1
// extra gałąź - end	

];

let startArrayY2 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1y2,
 r1l7y2,
 r1l28y2,
 r1l29y2,
 r1l30y2,
 r1l2y2,
 r1l8y2,
 r1l2ay2,
 r1l3y2,
 r1l4y2,
 r1l5y2,
 r1l6y2,
 r1l9y2,
 r1l10y2,
 r1l11y2,
 r1l14y2,
 r1l13y2,
 r1l12y2,
 r1l15y2,
 r1l17y2,
 r1l19y2,
 r1l18y2,
 r1l17ay2,
 r1l22y2,
 r1l23y2,
 r1l23ay2,
 r1l24y2,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1y2,
 p1l7y2,
 p1l8y2,
 p1l9y2,
 p1l10y2,
 p1l11ay2,
 p1l11by2,
 p1l12y2,
 p1l13y2,
 p1l14y2,
 p1l15y2,
 p1l16y2,
 p1l17ay2,
 p1l17by2,
 p1l18y2,
 p1l19y2,
 p1l18ay2,
 p1l20y2,
 p1l21y2,
 p1l22y2,
 p1l23y2,
 p1l24y2,
 p1l25y2,
 p1l27y2,
 p1l28y2,
 p1l29ay2,
 p1l29by2,
 p1l30ay2,
 p1l30by2,
 p1l31y2,
 p1l32ay2,
 p1l33y2,
 p1l34y2,
 p1l35y2,
 p1l36y2,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ay2,
 z1l1by2,
 z1l8y2,
 z1l5y2,
 z1l2y2,
 z1l3y2,
 z1l4y2,
 z1l10y2,
 z1l9y2,
 z1l11y2,
 z1l11ay2,
 z1l22y2,
 z1l18y2,
 z1l21y2,
 z1l19y2,
 z1l20y2,
 z1l14ay2,
 z1l14by2,
 z1l16y2,
 z1l17y2,
 z1l13y2,
 z1l12y2,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2y2,
 z2l1ay2,
 z2l1by2,
 z2l21y2,
 z2l22y2,
 z2l18y2,
 z2l20y2,
 z2l17y2,
 z2l16y2,
 z2l15y2,
 z2l14y2,
 z2l13y2,
 z2l4ay2,
 z2l4by2,
 z2l3y2,
 z2l6y2,
 z2l5y2,
 z2l8y2,
 z2l7y2,
 z2l12y2,
 z2l12by2,
 z2l12cy2,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ay2,
 z3l1by2,
 z3l3y2,
 z3l4y2,
 z3l5y2,
 z3l6y2,
 z3l8y2,
 z3l9y2,
 z3l7y2,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1y2,
 r2l2y2,
 r2l3y2,
 r2l7y2,
 r2l8y2,
 r2l9y2,
 r2l10y2,
 r2l11y2,
 r2l1ay2,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2y2,
r4l3y2,
r4l4y2,
r4l7y2,
r4l11y2,
r4l9y2,
r4l10y2,
r4l13y2,
r4l8y2,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1y2,
 p2l2y2,
 p2l6y2,
 p2l3ay2,
 p2l3by2,
 p2l4y2,
 p2l5y2,
 p2l7y2,
 p2l8y2,
 p2l14y2,
 p2l15y2,
 p2l17y2,
 p2l16ay2,
 p2l16by2,
 p2l12y2,
 p2l13y2,
 p2l10y2,
 p2l11y2,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1y2,
 r3l2y2,
 r3l17y2,
 r3l16y2,
 r3l3y2,
 r3l7y2,
 r3l8y2,
 r3l9y2,
 r3l10y2,
 r3l11y2,
 r3l12y2,
 r3l15y2,
 r3l13y2,
 r3l14y2,
 r3l6y2,
 r3l5y2,
 r3l4y2,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12y2,
d1l1y2,
d1l2y2,
d1l10y2,
d1l11y2,
d1l8y2,
d1l7y2,
d1l6y2,
d1l3y2,
d1l4y2,
d1l5y2,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9y2,
exl10y2,
exl11y2,
exl4y2,
exl6y2,
exl5y2,
exl12y2,
exl11ay2,
exl1y2,
exl2y2,
exl3y2,
exl8y2,
exl7y2,
exl13y2
// extra gałąź - end	

];

let startArrayY3 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1y3,
 r1l7y3,
 r1l28y3,
 r1l29y3,
 r1l30y3,
 r1l2y3,
 r1l8y3,
 r1l2ay3,
 r1l3y3,
 r1l4y3,
 r1l5y3,
 r1l6y3,
 r1l9y3,
 r1l10y3,
 r1l11y3,
 r1l14y3,
 r1l13y3,
 r1l12y3,
 r1l15y3,
 r1l17y3,
 r1l19y3,
 r1l18y3,
 r1l17ay3,
 r1l22y3,
 r1l23y3,
 r1l23ay3,
 r1l24y3,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1y3,
 p1l7y3,
 p1l8y3,
 p1l9y3,
 p1l10y3,
 p1l11ay3,
 p1l11by3,
 p1l12y3,
 p1l13y3,
 p1l14y3,
 p1l15y3,
 p1l16y3,
 p1l17ay3,
 p1l17by3,
 p1l18y3,
 p1l19y3,
 p1l18ay3,
 p1l20y3,
 p1l21y3,
 p1l22y3,
 p1l23y3,
 p1l24y3,
 p1l25y3,
 p1l27y3,
 p1l28y3,
 p1l29ay3,
 p1l29by3,
 p1l30ay3,
 p1l30by3,
 p1l31y3,
 p1l32ay3,
 p1l33y3,
 p1l34y3,
 p1l35y3,
 p1l36y3,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ay3,
 z1l1by3,
 z1l8y3,
 z1l5y3,
 z1l2y3,
 z1l3y3,
 z1l4y3,
 z1l10y3,
 z1l9y3,
 z1l11y3,
 z1l11ay3,
 z1l22y3,
 z1l18y3,
 z1l21y3,
 z1l19y3,
 z1l20y3,
 z1l14ay3,
 z1l14by3,
 z1l16y3,
 z1l17y3,
 z1l13y3,
 z1l12y3,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2y3,
 z2l1ay3,
 z2l1by3,
 z2l21y3,
 z2l22y3,
 z2l18y3,
 z2l20y3,
 z2l17y3,
 z2l16y3,
 z2l15y3,
 z2l14y3,
 z2l13y3,
 z2l4ay3,
 z2l4by3,
 z2l3y3,
 z2l6y3,
 z2l5y3,
 z2l8y3,
 z2l7y3,
 z2l12y3,
 z2l12by3,
 z2l12cy3,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ay3,
 z3l1by3,
 z3l3y3,
 z3l4y3,
 z3l5y3,
 z3l6y3,
 z3l8y3,
 z3l9y3,
 z3l7y3,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1y3,
 r2l2y3,
 r2l3y3,
 r2l7y3,
 r2l8y3,
 r2l9y3,
 r2l10y3,
 r2l11y3,
 r2l1ay3,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2y3,
r4l3y3,
r4l4y3,
r4l7y3,
r4l11y3,
r4l9y3,
r4l10y3,
r4l13y3,
r4l8y3,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1y3,
 p2l2y3,
 p2l6y3,
 p2l3ay3,
 p2l3by3,
 p2l4y3,
 p2l5y3,
 p2l7y3,
 p2l8y3,
 p2l14y3,
 p2l15y3,
 p2l17y3,
 p2l16ay3,
 p2l16by3,
 p2l12y3,
 p2l13y3,
 p2l10y3,
 p2l11y3,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1y3,
 r3l2y3,
 r3l17y3,
 r3l16y3,
 r3l3y3,
 r3l7y3,
 r3l8y3,
 r3l9y3,
 r3l10y3,
 r3l11y3,
 r3l12y3,
 r3l15y3,
 r3l13y3,
 r3l14y3,
 r3l6y3,
 r3l5y3,
 r3l4y3,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12y3,
d1l1y3,
d1l2y3,
d1l10y3,
d1l11y3,
d1l8y3,
d1l7y3,
d1l6y3,
d1l3y3,
d1l4y3,
d1l5y3,
// gałąź dziesiąta - end

// extra gałąź - strat	
exl9y3,
exl10y3,
exl11y3,
exl4y3,
exl6y3,
exl5y3,
exl12y3,
exl11ay3,
exl1y3,
exl2y3,
exl3y3,
exl8y3,
exl7y3,
exl13y3
// extra gałąź - end	

];
// TABLICE Z PUNKTAMI WOKÓŁ KÓRYCH RYSOWANE SĄ STAŁĘ LIŚCIE - BEZ RUCHU - FINISH

// TABLICE Z PUNKTAMI WOKÓŁ KÓRYCH RYSOWANE SĄ SPADAJĄCE LIŚCIE - BEZ RUCHU - START
let startArrayMoveX1 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1x1,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1x1,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ax1,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2x1,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ax1,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1x1,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2x1,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1x1,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1x1,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12x1,
// gałąź dziesiąta - end
];

let startArrayMoveY1 = [

// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
 r1l1y1,
// pierwsza gałąź - end

// druga gałąź - gałąź fioletowa 1 - start	 
 p1l1y1,
 // druga gałąź - end

 // trzecia gałąź - licząc od lewej - gałąź zielona 1 - start	  
 z1l1ay1,
 // trzecia gałąź - end	           	

// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
 z2l2y1,
// czwarta gałąź - end	

// piąta gałąź - licząc od lewej - gałąź zielona 3 - start	 
 z3l1ay1,
 // piąta gałąź - end

 // szusta gałąź - gałąź czerwona 2 - start
 r2l1y1,
 // szusta gałąź - end

// siódma gałąź - gałąź czerwona 4 - start 
r4l2y1,
// siódma gałąź - end

// ósma gałąź - gałąź fioletowa 2 - start
 p2l1y1,
// ósma gałąź - end	

// dziewiąta gałąź - gałąź czerwona 3 - start
 r3l1y1,
// dziewiąta gałąź - end

// gałąź dziesiąta - na dole przy pniu drzewa - start
d1l12y1,
// gałąź dziesiąta - end	
];
// TABLICE Z PUNKTAMI WOKÓŁ KÓRYCH RYSOWANE SĄ SPADAJĄCE LIŚCIE - BEZ RUCHU - FINISH

let randomXTreeNo3 = 0;
let randomYTreeNo3 = 0;

let sizeTreeNo3Single = 2.5;	
let sizeTreeNo3Line0 = 0.4;
let sizeTreeNo3Line1 = 0.75;
//let sizeTreeNo3Line1 = 1.5;

// grubość gałęzi 
//let strokeWeightTreeNo3Single = 0; 
let strokeWeightTreeNo3Line0 = 0.25;
let strokeWeightTreeNo3Line1 = 0.4;

// grubość gałęzi 
let strokeWeightLeafTreeNo3Single = 0; 
let strokeWeightLeafTreeNo3Line0 = 0.09;
let strokeWeightLeafTreeNo3Line1 = 0.3;

let strokeWeightLeafVeinTreeNo3Single = 0.1; 
let strokeWeightLeafVeinTreeNo3Line0 = 0.05;
let strokeWeightLeafVeinTreeNo3Line1 = 0.08;

let startXtreeNo3Single = -100;
let startYtreeNo3Single = -40;

let sizeLeafTreeNo3Single = 14;
let sizeLeafTreeNo3Line0 = 1;

let randomXTreeNo3Single = 0;
let randomYTreeNo3Single = 0;

let fx = 0;
let fy = 0;

function setup() {
	// WIELKOŚĆ I SZEROKOŚĆ CANVAS - START
	var canvas = createCanvas(widhtCanvas, heightCanvas);
	// WIELKOŚĆ I SZEROKOŚĆ CANVAS - END

	// id div - miejsce, w HTML w którym wyświtla się canvas - start
	canvas.parent('#canvasHtml');
	// id div - miejsce, w HTML w którym wyświtla się canvas - finish	

	// NOWE GÓRY - START	
	mountain = new Mountain();
	// NOWE GÓRY - FINISH

	let randomXLine0 = 0;
	let randomYLine0 = 0;

	let randomXTreeNo3Single = 0;
	let randomYTreeNo3Single = 0;

	let startXtreeNo3Single = 0;
	let startYtreeNo3Single = 0;

	let startXtreeNo3 = 0;
	let startYtreeNo3 = 0;

	let sizeLeafTreeNo3Single = 14;
	let sizeLeafTreeNo3Line0 = 1;

	// RYSUJE DRZEWA WOKÓŁ PUNKTÓW (FX, FY), (FX1, FY1) -  START 
	// j ilość drzew wokół jednego punktu, jak zmienimy 1 na 2, to wokół jednego puntu tworzy dwa drzewa	
	for (var j = 0; j < 3; j++) {

		let sizeTreeNo3Single = 1;

		let startXtreeNo3Single = 0;
		let startYtreeNo3Single = 0;

		let startXtreeNo3 = -m3l1x1;
		let startYtreeNo3 = -m3l1y1;

		let randomXLine0 = floor(random(-50, 50));
		let randomYLine0 = floor(random(-50, 50));

		// jeżeli rysujemy jedno drzewo (więcej niż dwa nadpisuje/ rysuje jedno na drugim), to można to dokodować, a zakodować randomXLine0 i randomYLine0 powyżej, 
		//	wtedy liśćie fruwają tak jak z stałęgo drzewa
		//+ odkomentować część < //RYSUJE SPADAJĄCE LIŚCIE DLA LINI 0, LINI 1> w f draw i zakomentować w f setup
		//let randomXLine0 = randomX;
		//let randomYLine0 = randomY;	

		// rysuje nowe drzewa No3 - przekazywane zmienne do klasy drzew - start    
		treeNo3Array[j] = new TreeNo3(
			startXtreeNo3, startYtreeNo3,
			startXtreeNo3Single, startYtreeNo3Single,
			sizeTreeNo3Single, sizeTreeNo3Line0, sizeTreeNo3Line1,
			randomXLine0, randomYLine0,
			randomXTreeNo3Single, randomYTreeNo3Single,
			//			fx, fy
		)

		// rysuje liście wokół punktów - krzywe beziera x0, x1, x2	- dla stałych liści No3 - start
		for (var i = 0; i < 1; i++) {

			let leaf = new newLeaf(
				sizeLeafTreeNo3Single, sizeLeafTreeNo3Line0,
				randomXLine0, randomYLine0,
				randomXTreeNo3Single, randomYTreeNo3Single
			);
			leafArray.push(leaf);
		}

		//	 RYSUJE SPADAJĄCE LIŚCIE DLA LINI 0, LINI 1- START
		for (var i = 0; i < 1; i++) {
			let leaf = new newLeaf(
				sizeLeafTreeNo3Single, sizeLeafTreeNo3Line0,
				randomXLine0, randomYLine0
			);
			leafArrayMoveLine0.push(leaf);
		}
		// RYSUJE SPADAJĄCE LIŚCIE DLA LINI 0, LINI 1 - FINISH	

	}
	// RYSUJE DRZEWA WOKÓŁ PUNKTÓW (FX, FY), (FX1, FY1) - END	


	// RYSUJE STAŁE DRZEWO No3- SINGLE - START 
	treeNo3 = new TreeNo3(
		startXtreeNo3, startYtreeNo3,
		startXtreeNo3Single, startYtreeNo3Single,
		sizeTreeNo3Single, sizeTreeNo3Line0, sizeTreeNo3Line1,
		randomXLine0, randomYLine0,
	);
	// RYSUJE STAŁE DRZEWO No3- SINGLE - FINISH 	
}


function draw() {
	// "spowalinia" zmianę/ ruch fruwających liści	
	//frameRate(4); 

	// kolor tła	
	background("#ABC8E2");

	// losowane odległości od fx,fy, fx1, fy1 wokół których rysowane są drzewa w liniach No3
	let randomXLine0 = randomX;
	let randomYLine0 = randomY;

	// rysuje góry - bez pierszej z przodu - start
	mountain.shows1234();
	mountain.shows68();
	mountain.shows59();
	// rysuje góry - bez pierszej z przodu - finish	

	// RYSUJE SPADAJĄCE LIŚCIE DLA STAŁEGO DRZEWA - - START
	for (var i = 0; i < 1; i++) {
		let leaf = new newLeaf();
		leafArrayMove.push(leaf);
	}
	// RYSUJE SPADAJĄCE LIŚCIE DLA STAŁEGO DRZEWA - FINISH


	//RYSUJE SPADAJĄCE LIŚCIE DLA LINI 0, LINI 1- START
	//	for(var i = 0; i < 1; i++){
	//	let leaf = new newLeaf(
	//        sizeLeafTreeNo3Single, sizeLeafTreeNo3Line0,
	//        randomXLine0, randomYLine0
	//	);			
	//	leafArrayMoveLine0.push(leaf);
	////	leafArrayMoveLine1.push(leaf);
	//	}
	//RYSUJE SPADAJĄCE LIŚCIE DLA LINI 0, LINI 1 - FINISH


	//LINIA 0 - START - PO LEWEJ	
	// RYSUJE DRZEWO No3 DLA FX I FY + LIŚCIE DLA DRZEWA No3-> LINIA 0 DRZEW No3 - START		
	for (var indexArrayTreeLineY = 0; indexArrayTreeLineY < startArrayTreeLineY.length; indexArrayTreeLineY++) {
		let fy = startArrayTreeLineY[indexArrayTreeLineY];

		for (var fx = 0; fx < startArrayTreeLineX[indexArrayTreeLineY]; fx = fx + 20) {

			for (var j = 0; j < treeNo3Array.length; j++) {
				push();
				translate(fx, fy);
				fill(0, 255, 255);
				treeNo3Array[j].showTreeNo3Line0();
				pop();
			}
			//stałe liście - start 
			// array x1	
//			for (var i = 0; i < leafArray.length; i++) {
//				// może być również tabela z wpółżędnymi Y index zawsze taki sam
//				for (var index = 0; index < startArrayX1.length; index++) {
//					push();
//					translate((startArrayX1[index]) * sizeTreeNo3Line0 + fx - m3l1x1 * sizeTreeNo3Line0,
//						(startArrayY1[index]) * sizeTreeNo3Line0 + fy - m3l1y1 * sizeTreeNo3Line0);
//					fill(leafColor3);
//					leafArray[i].showSizeLeafTreeNo3Line0();
//					pop();
//				}
//			}
			// stałe liście - finish

			// spadające liście - start 
			// array move 1	
//			for (var i = 0; i < leafArrayMoveLine0.length; i++) {
//				// może być również tabela z wpółżędnymi Y index zawsze taki sam
//				for (var index = 0; index < startArrayMoveX1.length; index++) {
//					push();
//					translate(
//						(startArrayMoveX1[index]) * sizeTreeNo3Line0 + fx - m3l1x1 * sizeTreeNo3Line0,
//						(startArrayMoveY1[index]) * sizeTreeNo3Line0 + fy - m3l1y1 * sizeTreeNo3Line0);
//					fill(leafColor3);
//					leafArrayMoveLine0[i].moveLeaf();
//					leafArrayMoveLine0[i].showSizeLeafTreeNo3Line0();
//					pop();
//				}
//			}
			// spadające liście - finish
		}
	}
	// RYSUJE DRZEWO DLA FX I FY + STAŁE (BEZ RUCHU) LIŚCIE DLA DRZEWA -> LINIA 0 DRZEW No3 - FINISH
	//LINIA 0 - FINISH - PO LEWEJ	


	//LINIA 1 - START - PO PRAWEJ
	// RYSUJE DRZEWO No3 DLA FX1 I FY1 + LIŚCIE DLA DRZEWA No3-> LINIA 1 DRZEW No3 - START
	for (var indexArrayTreeLineY1 = 0; indexArrayTreeLineY1 < startArrayTreeLineY1.length; indexArrayTreeLineY1++) {
		let fy1 = startArrayTreeLineY1[indexArrayTreeLineY1];

		for (var fx1 = 0; fx1 < startArrayTreeLineX1[indexArrayTreeLineY1]; fx1 = fx1 + 70) {
			// rysuje drzewa wokół punktów - start
			for (var j = 0; j < treeNo3Array.length; j++) {
				push();
				translate((widhtCanvas - fx1), fy1);
				treeNo3Array[j].showTreeNo3Line1();
				pop();
			}
			// rysuje drzewa wokół punktów - finish	

			// stałe liście - start 
			// array x1	
//			for (var i = 0; i < leafArray.length; i++) {
//				// może być również tabela z wpółżędnymi Y index zawsze taki sam
//				for (var index = 0; index < startArrayX1.length; index++) {
//					push();
//					translate(startArrayX1[index] * sizeTreeNo3Line1 + (widhtCanvas - fx1) - (m3l1x1 * sizeTreeNo3Line1),
//						startArrayY1[index] * sizeTreeNo3Line1 + fy1 - m3l1y1 * sizeTreeNo3Line1);
//					//        print("sizeTreeNo3Line1 = " + sizeTreeNo3Line1);
//					fill(leafColor4);
//					//	fill(255);
//					leafArray[i].showSizeLeafTreeNo3Line1();
//					pop();
//				}
//			}
			// array x3	
			//	for(var i = 0; i< leafArray.length; i++){
			//	// może być również tabela z wpółżędnymi Y index zawsze taki sam
			//	for(var index = 0; index < startArrayX3.length; index++){
			//	push();
			//	translate(startArrayX3[index] * sizeTreeNo3Line1 + (widhtCanvas - fx1) - (m3l1x1 * sizeTreeNo3Line1), 
			//              startArrayY3[index] * sizeTreeNo3Line1 + fy1 - m3l1y1 * sizeTreeNo3Line1);
			////        print("sizeTreeNo3Line1 = " + sizeTreeNo3Line1);
			//	fill(leafColor4);
			////	fill(255);
			//	leafArray[i].showSizeLeafTreeNo3Line1();
			//	pop();
			//	}
			//	}	

			// stałe liście - finish

			// spadające liście - start 
			// array move x1	
			//	for(var i = 0; i< leafArrayMoveLine1.length; i++){
			//	// może być również tabela z wpółżędnymi Y index zawsze taki sam
			//	for(var index = 0; index < startArrayMoveX1.length; index++){
			//	push();
			//	translate(startArrayMoveX1[index] * sizeTreeNo3Line1 + (widhtCanvas - fx1) - (m3l1x1 * sizeTreeNo3Line1), 
			//              startArrayMoveY1[index] * sizeTreeNo3Line1 + fy1 - m3l1y1 * sizeTreeNo3Line1);
			//	fill(leafColor6);
			//	leafArrayMoveLine1[i].moveLeaf();
			//	leafArrayMoveLine1[i].showSizeLeafTreeNo3Line1();
			//	pop();
			//	}
			//	}	
			// spadające liście - finish	
		}
	}
	// RYSUJE DRZEWO No3 DLA FX1 I FY1 + LIŚCIE DLA DRZEWA No3-> LINIA 1 DRZEW No3 - START	
	//LINIA 1 - START - PO PRAWEJ

	// rysuje góry - pierwsza i druga z przodu - start
	mountain.shows7();
	mountain.shows10();
	// rysuje góry - pierwsza i druga z przodu - finish		


	// STAŁE DRZEWO - START	
	// RYSUJE STAŁE DRZEWO No3 SINGLE - DUŻE - START	
	treeNo3.showTreeNo3();
	// RYSUJE STAŁE DRZEWO No3 SINGLE - DUŻE - FINISH

	// RYSUJE LIŚCIE DLA STAŁEGO DRZEWA No3 DLA X1, X2, X3 I ODPOWIENICH Y1, Y2, Y3 - START	
	// array x1
	for (var i = 0; i < leafArray.length; i++) {
		// może być również tabela z wpółżędnymi Y index zawsze taki sam
		for (var index = 0; index < startArrayX1.length; index++) {
			push();
			translate(startArrayX1[index] * sizeTreeNo3Single, startArrayY1[index] * sizeTreeNo3Single);
			//	translate(prX, prY);
			fill(leafColor1);
			//	fill(0, 255, 0);
			leafArray[i].showSizeLeafTreeNo3Single();
			pop();
		}
	}
	// array x2
//	for (var i = 0; i < leafArray.length; i++) {
//		// może być również tabela z wpółżędnymi Y index zawsze taki sam
//		for (var index = 0; index < startArrayX2.length; index++) {
//			push();
//			translate(startArrayX2[index] * sizeTreeNo3Single, startArrayY2[index] * sizeTreeNo3Single);
//			fill(leafColor2);
//			leafArray[i].showSizeLeafTreeNo3Single();
//			pop();
//		}
//	}
	// array x3
	for (var i = 0; i < leafArray.length; i++) {
		// może być również tabela z wpółżędnymi Y index zawsze taki sam
		for (var index = 0; index < startArrayX3.length; index++) {
			push();
			translate(startArrayX3[index] * sizeTreeNo3Single, startArrayY3[index] * sizeTreeNo3Single);
			fill(leafColor5);
			leafArray[i].showSizeLeafTreeNo3Single();
			pop();
		}
	}
	// RYSUJE LIŚCIE DLA STAŁEGO DRZEWA DLA X1, X2, X3 I ODPOWIENICH Y1, Y2, Y3 - FINISH	


	// RYSUJE SPADAJĄCE LIŚCIE DLA STAŁEGO DRZEWA - SINGLE - No3 - DLA X1, X2, X3 I ODPOWIENICH Y1, Y2, Y3 - START	
	// array move x1
	for (var i = 0; i < leafArrayMove.length; i++) {
		// może być również tabela z wpółżędnymi Y index zawsze taki sam
		for (var index = 0; index < startArrayMoveX1.length; index++) {
			push();
			translate(startArrayMoveX1[index] * sizeTreeNo3Single, startArrayMoveY1[index] * sizeTreeNo3Single);
			fill(leafColor5);
			leafArrayMove[i].moveLeaf();
			leafArrayMove[i].showSizeLeafTreeNo3Single();
			pop();
		}
	}
	// RYSUJE SPADAJĄCE LIŚCIE DLA STAŁEGO DRZEWA - SINGLE - No3 - DLA X1, X2, X3 I ODPOWIENICH Y1, Y2, Y3 - FINISH	
	// STAŁE DRZEWO - FINISH	


	// USUWA LIŚĆIE, KTÓRE ZNAJDUJĄ SIĘ "POZA" WIDOCZNYM OBBRAZEM - START	
	for (var i = 0; i < leafArrayMove.length; i++) {

		if (leafArrayMove[i].finished()) {
			// remove the particle
			leafArrayMove.splice(i, 1);
			showSizeLeafTreeNo3Line0.splice(i, 1);
			//			showSizeLeafTreeNo3Line1.splice(i, 1);
		}
	}
	// USUWA LIŚĆIE, KTÓRE ZNAJDUJĄ SIĘ "POZA" WIDOCZNYM OBBRAZEM - FINISH		

}

// DRZEWO No3 KLAS - START
class TreeNo3 {

	constructor(
		startXtreeNo3, startYtreeNo3,
		startXtreeNo3Single, startYtreeNo3Single,
		sizeTreeNo3Single, sizeTreeNo3Line0, sizeTreeNo3Line1,
		randomXLine0, randomYLine0

	) {
		this.sizeTreeNo3Line0 = sizeTreeNo3Line0;
		this.sizeTreeNo3Line1 = sizeTreeNo3Line1;
		let extraDaneX = startXtreeNo3 + startXtreeNo3Single + randomXLine0;
		let extraDaneY = startYtreeNo3 + startYtreeNo3Single + randomYLine0;
		let sizeTree = sizeTreeNo3Single;

		// pień drzewa numer 3 - liczone od lewy, dolny róg pnia drzewa - wokół tych punktów nie tworzymy liści - start
		this.m3l1x1 = m3l1x1 * sizeTree + extraDaneX;
		this.m3l1y1 = m3l1y1 * sizeTree + extraDaneY;
		this.m3l1x2 = m3l1x2 * sizeTree + extraDaneX;
		this.m3l1y2 = m3l1y2 * sizeTree + extraDaneY;
		this.m3l1x3 = m3l1x3 * sizeTree + extraDaneX;
		this.m3l1y3 = m3l1y3 * sizeTree + extraDaneY;

		this.m3l2x1 = m3l2x1 * sizeTree + extraDaneX;
		this.m3l2y1 = m3l2y1 * sizeTree + extraDaneY;
		this.m3l2x2 = m3l2x2 * sizeTree + extraDaneX;
		this.m3l2y2 = m3l2y2 * sizeTree + extraDaneY;
		this.m3l2x3 = m3l2x3 * sizeTree + extraDaneX;
		this.m3l2y3 = m3l2y3 * sizeTree + extraDaneY;

		this.m3l3x1 = m3l3x1 * sizeTree + extraDaneX;
		this.m3l3y1 = m3l3y1 * sizeTree + extraDaneY;
		this.m3l3x2 = m3l3x2 * sizeTree + extraDaneX;
		this.m3l3y2 = m3l3y2 * sizeTree + extraDaneY;
		this.m3l3x3 = m3l3x3 * sizeTree + extraDaneX;
		this.m3l3y3 = m3l3y3 * sizeTree + extraDaneY;

		this.m3l4x1 = m3l4x1 * sizeTree + extraDaneX;
		this.m3l4y1 = m3l4y1 * sizeTree + extraDaneY;
		this.m3l4x2 = m3l4x2 * sizeTree + extraDaneX;
		this.m3l4y2 = m3l4y2 * sizeTree + extraDaneY;
		this.m3l4x3 = m3l4x3 * sizeTree + extraDaneX;
		this.m3l4y3 = m3l4y3 * sizeTree + extraDaneY;

		this.m3l5x1 = m3l5x1 * sizeTree + extraDaneX;
		this.m3l5y1 = m3l5y1 * sizeTree + extraDaneY;
		this.m3l5x2 = m3l5x2 * sizeTree + extraDaneX;
		this.m3l5y2 = m3l5y2 * sizeTree + extraDaneY;
		this.m3l5x3 = m3l5x3 * sizeTree + extraDaneX;
		this.m3l5y3 = m3l5y3 * sizeTree + extraDaneY;

		this.m3l6x1 = m3l6x1 * sizeTree + extraDaneX;
		this.m3l6y1 = m3l6y1 * sizeTree + extraDaneY;
		this.m3l6x2 = m3l6x2 * sizeTree + extraDaneX;
		this.m3l6y2 = m3l6y2 * sizeTree + extraDaneY;
		this.m3l6x3 = m3l6x3 * sizeTree + extraDaneX;
		this.m3l6y3 = m3l6y3 * sizeTree + extraDaneY;

		this.m3l7x1 = m3l7x1 * sizeTree + extraDaneX;
		this.m3l7y1 = m3l7y1 * sizeTree + extraDaneY;
		this.m3l7x2 = m3l7x2 * sizeTree + extraDaneX;
		this.m3l7y2 = m3l7y2 * sizeTree + extraDaneY;
		this.m3l7x3 = m3l7x3 * sizeTree + extraDaneX;
		this.m3l7y3 = m3l7y3 * sizeTree + extraDaneY;

		this.m3l8x1 = m3l8x1 * sizeTree + extraDaneX;
		this.m3l8y1 = m3l8y1 * sizeTree + extraDaneY;
		this.m3l8x2 = m3l8x2 * sizeTree + extraDaneX;
		this.m3l8y2 = m3l8y2 * sizeTree + extraDaneY;
		this.m3l8x3 = m3l8x3 * sizeTree + extraDaneX;
		this.m3l8y3 = m3l8y3 * sizeTree + extraDaneY;

		this.m3l9x1 = m3l9x1 * sizeTree + extraDaneX;
		this.m3l9y1 = m3l9y1 * sizeTree + extraDaneY;
		this.m3l9x2 = m3l9x2 * sizeTree + extraDaneX;
		this.m3l9y2 = m3l9y2 * sizeTree + extraDaneY;
		this.m3l9x3 = m3l9x3 * sizeTree + extraDaneX;
		this.m3l9y3 = m3l9y3 * sizeTree + extraDaneY;

		this.m3l10x1 = m3l10x1 * sizeTree + extraDaneX;
		this.m3l10y1 = m3l10y1 * sizeTree + extraDaneY;
		this.m3l10x2 = m3l10x2 * sizeTree + extraDaneX;
		this.m3l10y2 = m3l10y2 * sizeTree + extraDaneY;
		this.m3l10x3 = m3l10x3 * sizeTree + extraDaneX;
		this.m3l10y3 = m3l10y3 * sizeTree + extraDaneY;

		this.m3l11x1 = m3l11x1 * sizeTree + extraDaneX;
		this.m3l11y1 = m3l11y1 * sizeTree + extraDaneY;
		this.m3l11x2 = m3l11x2 * sizeTree + extraDaneX;
		this.m3l11y2 = m3l11y2 * sizeTree + extraDaneY;
		this.m3l11x3 = m3l11x3 * sizeTree + extraDaneX;
		this.m3l11y3 = m3l11y3 * sizeTree + extraDaneY;

		this.m3l12x1 = m3l12x1 * sizeTree + extraDaneX;
		this.m3l12y1 = m3l12y1 * sizeTree + extraDaneY;
		this.m3l12x2 = m3l12x2 * sizeTree + extraDaneX;
		this.m3l12y2 = m3l12y2 * sizeTree + extraDaneY;
		this.m3l12x3 = m3l12x3 * sizeTree + extraDaneX;
		this.m3l12y3 = m3l12y3 * sizeTree + extraDaneY;

		this.m3l13x1 = m3l13x1 * sizeTree + extraDaneX;
		this.m3l13y1 = m3l13y1 * sizeTree + extraDaneY;
		this.m3l13x2 = m3l13x2 * sizeTree + extraDaneX;
		this.m3l13y2 = m3l13y2 * sizeTree + extraDaneY;
		this.m3l13x3 = m3l13x3 * sizeTree + extraDaneX;
		this.m3l13y3 = m3l13y3 * sizeTree + extraDaneY;

		this.m3l14x1 = m3l14x1 * sizeTree + extraDaneX;
		this.m3l14y1 = m3l14y1 * sizeTree + extraDaneY;
		this.m3l14x2 = m3l14x2 * sizeTree + extraDaneX;
		this.m3l14y2 = m3l14y2 * sizeTree + extraDaneY;
		this.m3l14x3 = m3l14x3 * sizeTree + extraDaneX;
		this.m3l14y3 = m3l14y3 * sizeTree + extraDaneY;

		this.m3l15x1 = m3l15x1 * sizeTree + extraDaneX;
		this.m3l15y1 = m3l15y1 * sizeTree + extraDaneY;
		this.m3l15x2 = m3l15x2 * sizeTree + extraDaneX;
		this.m3l15y2 = m3l15y2 * sizeTree + extraDaneY;
		this.m3l15x3 = m3l15x3 * sizeTree + extraDaneX;
		this.m3l15y3 = m3l15y3 * sizeTree + extraDaneY;

		this.m3l16x1 = m3l16x1 * sizeTree + extraDaneX;
		this.m3l16y1 = m3l16y1 * sizeTree + extraDaneY;
		this.m3l16x2 = m3l16x2 * sizeTree + extraDaneX;
		this.m3l16y2 = m3l16y2 * sizeTree + extraDaneY;
		this.m3l16x3 = m3l16x3 * sizeTree + extraDaneX;
		this.m3l16y3 = m3l16y3 * sizeTree + extraDaneY;

		this.m3l17x1 = m3l17x1 * sizeTree + extraDaneX;
		this.m3l17y1 = m3l17y1 * sizeTree + extraDaneY;
		this.m3l17x2 = m3l17x2 * sizeTree + extraDaneX;
		this.m3l17y2 = m3l17y2 * sizeTree + extraDaneY;
		this.m3l17x3 = m3l17x3 * sizeTree + extraDaneX;
		this.m3l17y3 = m3l17y3 * sizeTree + extraDaneY;

		this.m3l18x1 = m3l18x1 * sizeTree + extraDaneX;
		this.m3l18y1 = m3l18y1 * sizeTree + extraDaneY;
		this.m3l18x2 = m3l18x2 * sizeTree + extraDaneX;
		this.m3l18y2 = m3l18y2 * sizeTree + extraDaneY;
		this.m3l18x3 = m3l18x3 * sizeTree + extraDaneX;
		this.m3l18y3 = m3l18y3 * sizeTree + extraDaneY;

		this.m3l19x1 = m3l19x1 * sizeTree + extraDaneX;
		this.m3l19y1 = m3l19y1 * sizeTree + extraDaneY;
		this.m3l19x2 = m3l19x2 * sizeTree + extraDaneX;
		this.m3l19y2 = m3l19y2 * sizeTree + extraDaneY;
		this.m3l19x3 = m3l19x3 * sizeTree + extraDaneX;
		this.m3l19y3 = m3l19y3 * sizeTree + extraDaneY;

		this.m3l20x1 = m3l20x1 * sizeTree + extraDaneX;
		this.m3l20y1 = m3l20y1 * sizeTree + extraDaneY;
		this.m3l20x2 = m3l20x2 * sizeTree + extraDaneX;
		this.m3l20y2 = m3l20y2 * sizeTree + extraDaneY;
		this.m3l20x3 = m3l20x3 * sizeTree + extraDaneX;
		this.m3l20y3 = m3l20y3 * sizeTree + extraDaneY;

		this.m3l21x1 = m3l21x1 * sizeTree + extraDaneX;
		this.m3l21y1 = m3l21y1 * sizeTree + extraDaneY;
		this.m3l21x2 = m3l21x2 * sizeTree + extraDaneX;
		this.m3l21y2 = m3l21y2 * sizeTree + extraDaneY;
		this.m3l21x3 = m3l21x3 * sizeTree + extraDaneX;
		this.m3l21y3 = m3l21y3 * sizeTree + extraDaneY;
		// pień drzewa numer - end

		// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
		this.r1l1x1 = r1l1x1 * sizeTree + extraDaneX;
		this.r1l1y1 = r1l1y1 * sizeTree + extraDaneY;
		this.r1l1x2 = r1l1x2 * sizeTree + extraDaneX;
		this.r1l1y2 = r1l1y2 * sizeTree + extraDaneY;
		this.r1l1x3 = r1l1x3 * sizeTree + extraDaneX;
		this.r1l1y3 = r1l1y3 * sizeTree + extraDaneY;

		this.r1l7x1 = r1l7x1 * sizeTree + extraDaneX;
		this.r1l7y1 = r1l7y1 * sizeTree + extraDaneY;
		this.r1l7x2 = r1l7x2 * sizeTree + extraDaneX;
		this.r1l7y2 = r1l7y2 * sizeTree + extraDaneY;
		this.r1l7x3 = r1l7x3 * sizeTree + extraDaneX;
		this.r1l7y3 = r1l7y3 * sizeTree + extraDaneY;

		this.r1l28x1 = r1l28x1 * sizeTree + extraDaneX;
		this.r1l28y1 = r1l28y1 * sizeTree + extraDaneY;
		this.r1l28x2 = r1l28x2 * sizeTree + extraDaneX;
		this.r1l28y2 = r1l28y2 * sizeTree + extraDaneY;
		this.r1l28x3 = r1l28x3 * sizeTree + extraDaneX;
		this.r1l28y3 = r1l28y3 * sizeTree + extraDaneY;

		this.r1l29x1 = r1l29x1 * sizeTree + extraDaneX;
		this.r1l29y1 = r1l29y1 * sizeTree + extraDaneY;
		this.r1l29x2 = r1l29x2 * sizeTree + extraDaneX;
		this.r1l29y2 = r1l29y2 * sizeTree + extraDaneY;
		this.r1l29x3 = r1l29x3 * sizeTree + extraDaneX;
		this.r1l29y3 = r1l29y3 * sizeTree + extraDaneY;

		this.r1l30x1 = r1l30x1 * sizeTree + extraDaneX;
		this.r1l30y1 = r1l30y1 * sizeTree + extraDaneY;
		this.r1l30x2 = r1l30x2 * sizeTree + extraDaneX;
		this.r1l30y2 = r1l30y2 * sizeTree + extraDaneY;
		this.r1l30x3 = r1l30x3 * sizeTree + extraDaneX;
		this.r1l30y3 = r1l30y3 * sizeTree + extraDaneY;

		this.r1l2x1 = r1l2x1 * sizeTree + extraDaneX;
		this.r1l2y1 = r1l2y1 * sizeTree + extraDaneY;
		this.r1l2x2 = r1l2x2 * sizeTree + extraDaneX;
		this.r1l2y2 = r1l2y2 * sizeTree + extraDaneY;
		this.r1l2x3 = r1l2x3 * sizeTree + extraDaneX;
		this.r1l2y3 = r1l2y3 * sizeTree + extraDaneY;

		this.r1l8x1 = r1l8x1 * sizeTree + extraDaneX;
		this.r1l8y1 = r1l8y1 * sizeTree + extraDaneY;
		this.r1l8x2 = r1l8x2 * sizeTree + extraDaneX;
		this.r1l8y2 = r1l8y2 * sizeTree + extraDaneY;
		this.r1l8x3 = r1l8x3 * sizeTree + extraDaneX;
		this.r1l8y3 = r1l8y3 * sizeTree + extraDaneY;

		this.r1l2ax1 = r1l2ax1 * sizeTree + extraDaneX;
		this.r1l2ay1 = r1l2ay1 * sizeTree + extraDaneY;
		this.r1l2ax2 = r1l2ax2 * sizeTree + extraDaneX;
		this.r1l2ay2 = r1l2ay2 * sizeTree + extraDaneY;
		this.r1l2ax3 = r1l2ax3 * sizeTree + extraDaneX;
		this.r1l2ay3 = r1l2ay3 * sizeTree + extraDaneY;

		this.r1l3x1 = r1l3x1 * sizeTree + extraDaneX;
		this.r1l3y1 = r1l3y1 * sizeTree + extraDaneY;
		this.r1l3x2 = r1l3x2 * sizeTree + extraDaneX;
		this.r1l3y2 = r1l3y2 * sizeTree + extraDaneY;
		this.r1l3x3 = r1l3x3 * sizeTree + extraDaneX;
		this.r1l3y3 = r1l3y3 * sizeTree + extraDaneY;

		this.r1l4x1 = r1l4x1 * sizeTree + extraDaneX;
		this.r1l4y1 = r1l4y1 * sizeTree + extraDaneY;
		this.r1l4x2 = r1l4x2 * sizeTree + extraDaneX;
		this.r1l4y2 = r1l4y2 * sizeTree + extraDaneY;
		this.r1l4x3 = r1l4x3 * sizeTree + extraDaneX;
		this.r1l4y3 = r1l4y3 * sizeTree + extraDaneY;

		this.r1l5x1 = r1l5x1 * sizeTree + extraDaneX;
		this.r1l5y1 = r1l5y1 * sizeTree + extraDaneY;
		this.r1l5x2 = r1l5x2 * sizeTree + extraDaneX;
		this.r1l5y2 = r1l5y2 * sizeTree + extraDaneY;
		this.r1l5x3 = r1l5x3 * sizeTree + extraDaneX;
		this.r1l5y3 = r1l5y3 * sizeTree + extraDaneY;

		this.r1l6x1 = r1l6x1 * sizeTree + extraDaneX;
		this.r1l6y1 = r1l6y1 * sizeTree + extraDaneY;
		this.r1l6x2 = r1l6x2 * sizeTree + extraDaneX;
		this.r1l6y2 = r1l6y2 * sizeTree + extraDaneY;
		this.r1l6x3 = r1l6x3 * sizeTree + extraDaneX;
		this.r1l6y3 = r1l6y3 * sizeTree + extraDaneY;

		this.r1l9x1 = r1l9x1 * sizeTree + extraDaneX;
		this.r1l9y1 = r1l9y1 * sizeTree + extraDaneY;
		this.r1l9x2 = r1l9x2 * sizeTree + extraDaneX;
		this.r1l9y2 = r1l9y2 * sizeTree + extraDaneY;
		this.r1l9x3 = r1l9x3 * sizeTree + extraDaneX;
		this.r1l9y3 = r1l9y3 * sizeTree + extraDaneY;

		this.r1l10x1 = r1l10x1 * sizeTree + extraDaneX;
		this.r1l10y1 = r1l10y1 * sizeTree + extraDaneY;
		this.r1l10x2 = r1l10x2 * sizeTree + extraDaneX;
		this.r1l10y2 = r1l10y2 * sizeTree + extraDaneY;
		this.r1l10x3 = r1l10x3 * sizeTree + extraDaneX;
		this.r1l10y3 = r1l10y3 * sizeTree + extraDaneY;

		this.r1l11x1 = r1l11x1 * sizeTree + extraDaneX;
		this.r1l11y1 = r1l11y1 * sizeTree + extraDaneY;
		this.r1l11x2 = r1l11x2 * sizeTree + extraDaneX;
		this.r1l11y2 = r1l11y2 * sizeTree + extraDaneY;
		this.r1l11x3 = r1l11x3 * sizeTree + extraDaneX;
		this.r1l11y3 = r1l11y3 * sizeTree + extraDaneY;

		this.r1l14x1 = r1l14x1 * sizeTree + extraDaneX;
		this.r1l14y1 = r1l14y1 * sizeTree + extraDaneY;
		this.r1l14x2 = r1l14x2 * sizeTree + extraDaneX;
		this.r1l14y2 = r1l14y2 * sizeTree + extraDaneY;
		this.r1l14x3 = r1l14x3 * sizeTree + extraDaneX;
		this.r1l14y3 = r1l14y3 * sizeTree + extraDaneY;

		this.r1l13x1 = r1l13x1 * sizeTree + extraDaneX;
		this.r1l13y1 = r1l13y1 * sizeTree + extraDaneY;
		this.r1l13x2 = r1l13x2 * sizeTree + extraDaneX;
		this.r1l13y2 = r1l13y2 * sizeTree + extraDaneY;
		this.r1l13x3 = r1l13x3 * sizeTree + extraDaneX;
		this.r1l13y3 = r1l13y3 * sizeTree + extraDaneY;

		this.r1l12x1 = r1l12x1 * sizeTree + extraDaneX;
		this.r1l12y1 = r1l12y1 * sizeTree + extraDaneY;
		this.r1l12x2 = r1l12x2 * sizeTree + extraDaneX;
		this.r1l12y2 = r1l12y2 * sizeTree + extraDaneY;
		this.r1l12x3 = r1l12x3 * sizeTree + extraDaneX;
		this.r1l12y3 = r1l12y3 * sizeTree + extraDaneY;

		this.r1l15x1 = r1l15x1 * sizeTree + extraDaneX;
		this.r1l15y1 = r1l15y1 * sizeTree + extraDaneY;
		this.r1l15x2 = r1l15x2 * sizeTree + extraDaneX;
		this.r1l15y2 = r1l15y2 * sizeTree + extraDaneY;
		this.r1l15x3 = r1l15x3 * sizeTree + extraDaneX;
		this.r1l15y3 = r1l15y3 * sizeTree + extraDaneY;

		this.r1l17x1 = r1l17x1 * sizeTree + extraDaneX;
		this.r1l17y1 = r1l17y1 * sizeTree + extraDaneY;
		this.r1l17x2 = r1l17x2 * sizeTree + extraDaneX;
		this.r1l17y2 = r1l17y2 * sizeTree + extraDaneY;
		this.r1l17x3 = r1l17x3 * sizeTree + extraDaneX;
		this.r1l17y3 = r1l17y3 * sizeTree + extraDaneY;

		this.r1l19x1 = r1l19x1 * sizeTree + extraDaneX;
		this.r1l19y1 = r1l19y1 * sizeTree + extraDaneY;
		this.r1l19x2 = r1l19x2 * sizeTree + extraDaneX;
		this.r1l19y2 = r1l19y2 * sizeTree + extraDaneY;
		this.r1l19x3 = r1l19x3 * sizeTree + extraDaneX;
		this.r1l19y3 = r1l19y3 * sizeTree + extraDaneY;

		this.r1l18x1 = r1l18x1 * sizeTree + extraDaneX;
		this.r1l18y1 = r1l18y1 * sizeTree + extraDaneY;
		this.r1l18x2 = r1l18x2 * sizeTree + extraDaneX;
		this.r1l18y2 = r1l18y2 * sizeTree + extraDaneY;
		this.r1l18x3 = r1l18x3 * sizeTree + extraDaneX;
		this.r1l18y3 = r1l18y3 * sizeTree + extraDaneY;

		this.r1l17ax1 = r1l17ax1 * sizeTree + extraDaneX;
		this.r1l17ay1 = r1l17ay1 * sizeTree + extraDaneY;
		this.r1l17ax2 = r1l17ax2 * sizeTree + extraDaneX;
		this.r1l17ay2 = r1l17ay2 * sizeTree + extraDaneY;
		this.r1l17ax3 = r1l17ax3 * sizeTree + extraDaneX;
		this.r1l17ay3 = r1l17ay3 * sizeTree + extraDaneY;

		this.r1l22x1 = r1l22x1 * sizeTree + extraDaneX;
		this.r1l22y1 = r1l22y1 * sizeTree + extraDaneY;
		this.r1l22x2 = r1l22x2 * sizeTree + extraDaneX;
		this.r1l22y2 = r1l22y2 * sizeTree + extraDaneY;
		this.r1l22x3 = r1l22x3 * sizeTree + extraDaneX;
		this.r1l22y3 = r1l22y3 * sizeTree + extraDaneY;

		this.r1l23x1 = r1l23x1 * sizeTree + extraDaneX;
		this.r1l23y1 = r1l23y1 * sizeTree + extraDaneY;
		this.r1l23x2 = r1l23x2 * sizeTree + extraDaneX;
		this.r1l23y2 = r1l23y2 * sizeTree + extraDaneY;
		this.r1l23x3 = r1l23x3 * sizeTree + extraDaneX;
		this.r1l23y3 = r1l23y3 * sizeTree + extraDaneY;

		this.r1l23ax1 = r1l23ax1 * sizeTree + extraDaneX;
		this.r1l23ay1 = r1l23ay1 * sizeTree + extraDaneY;
		this.r1l23ax2 = r1l23ax2 * sizeTree + extraDaneX;
		this.r1l23ay2 = r1l23ay2 * sizeTree + extraDaneY;
		this.r1l23ax3 = r1l23ax3 * sizeTree + extraDaneX;
		this.r1l23ay3 = r1l23ay3 * sizeTree + extraDaneY;

		this.r1l24x1 = r1l24x1 * sizeTree + extraDaneX;
		this.r1l24y1 = r1l24y1 * sizeTree + extraDaneY;
		this.r1l24x2 = r1l24x2 * sizeTree + extraDaneX;
		this.r1l24y2 = r1l24y2 * sizeTree + extraDaneY;
		this.r1l24x3 = r1l24x3 * sizeTree + extraDaneX;
		this.r1l24y3 = r1l24y3 * sizeTree + extraDaneY;
		// pierwsza gałąź - end	

		// druga gałąź - gałąź fioletowa 1 - start	
		this.p1l1x1 = p1l1x1 * sizeTree + extraDaneX;
		this.p1l1y1 = p1l1y1 * sizeTree + extraDaneY;
		this.p1l1x2 = p1l1x2 * sizeTree + extraDaneX;
		this.p1l1y2 = p1l1y2 * sizeTree + extraDaneY;
		this.p1l1x3 = p1l1x3 * sizeTree + extraDaneX;
		this.p1l1y3 = p1l1y3 * sizeTree + extraDaneY;

		this.p1l7x1 = p1l7x1 * sizeTree + extraDaneX;
		this.p1l7y1 = p1l7y1 * sizeTree + extraDaneY;
		this.p1l7x2 = p1l7x2 * sizeTree + extraDaneX;
		this.p1l7y2 = p1l7y2 * sizeTree + extraDaneY;
		this.p1l7x3 = p1l7x3 * sizeTree + extraDaneX;
		this.p1l7y3 = p1l7y3 * sizeTree + extraDaneY;

		this.p1l8x1 = p1l8x1 * sizeTree + extraDaneX;
		this.p1l8y1 = p1l8y1 * sizeTree + extraDaneY;
		this.p1l8x2 = p1l8x2 * sizeTree + extraDaneX;
		this.p1l8y2 = p1l8y2 * sizeTree + extraDaneY;
		this.p1l8x3 = p1l8x3 * sizeTree + extraDaneX;
		this.p1l8y3 = p1l8y3 * sizeTree + extraDaneY;

		this.p1l9x1 = p1l9x1 * sizeTree + extraDaneX;
		this.p1l9y1 = p1l9y1 * sizeTree + extraDaneY;
		this.p1l9x2 = p1l9x2 * sizeTree + extraDaneX;
		this.p1l9y2 = p1l9y2 * sizeTree + extraDaneY;
		this.p1l9x3 = p1l9x3 * sizeTree + extraDaneX;
		this.p1l9y3 = p1l9y3 * sizeTree + extraDaneY;

		this.p1l10x1 = p1l10x1 * sizeTree + extraDaneX;
		this.p1l10y1 = p1l10y1 * sizeTree + extraDaneY;
		this.p1l10x2 = p1l10x2 * sizeTree + extraDaneX;
		this.p1l10y2 = p1l10y2 * sizeTree + extraDaneY;
		this.p1l10x3 = p1l10x3 * sizeTree + extraDaneX;
		this.p1l10y3 = p1l10y3 * sizeTree + extraDaneY;

		this.p1l11ax1 = p1l11ax1 * sizeTree + extraDaneX;
		this.p1l11ay1 = p1l11ay1 * sizeTree + extraDaneY;
		this.p1l11ax2 = p1l11ax2 * sizeTree + extraDaneX;
		this.p1l11ay2 = p1l11ay2 * sizeTree + extraDaneY;
		this.p1l11ax3 = p1l11ax3 * sizeTree + extraDaneX;
		this.p1l11ay3 = p1l11ay3 * sizeTree + extraDaneY;

		this.p1l11bx1 = p1l11bx1 * sizeTree + extraDaneX;
		this.p1l11by1 = p1l11by1 * sizeTree + extraDaneY;
		this.p1l11bx2 = p1l11bx2 * sizeTree + extraDaneX;
		this.p1l11by2 = p1l11by2 * sizeTree + extraDaneY;
		this.p1l11bx3 = p1l11bx3 * sizeTree + extraDaneX;
		this.p1l11by3 = p1l11by3 * sizeTree + extraDaneY;

		this.p1l12x1 = p1l12x1 * sizeTree + extraDaneX;
		this.p1l12y1 = p1l12y1 * sizeTree + extraDaneY;
		this.p1l12x2 = p1l12x2 * sizeTree + extraDaneX;
		this.p1l12y2 = p1l12y2 * sizeTree + extraDaneY;
		this.p1l12x3 = p1l12x3 * sizeTree + extraDaneX;
		this.p1l12y3 = p1l12y3 * sizeTree + extraDaneY;

		this.p1l13x1 = p1l13x1 * sizeTree + extraDaneX;
		this.p1l13y1 = p1l13y1 * sizeTree + extraDaneY;
		this.p1l13x2 = p1l13x2 * sizeTree + extraDaneX;
		this.p1l13y2 = p1l13y2 * sizeTree + extraDaneY;
		this.p1l13x3 = p1l13x3 * sizeTree + extraDaneX;
		this.p1l13y3 = p1l13y3 * sizeTree + extraDaneY;

		this.p1l14x1 = p1l14x1 * sizeTree + extraDaneX;
		this.p1l14y1 = p1l14y1 * sizeTree + extraDaneY;
		this.p1l14x2 = p1l14x2 * sizeTree + extraDaneX;
		this.p1l14y2 = p1l14y2 * sizeTree + extraDaneY;
		this.p1l14x3 = p1l14x3 * sizeTree + extraDaneX;
		this.p1l14y3 = p1l14y3 * sizeTree + extraDaneY;

		this.p1l15x1 = p1l15x1 * sizeTree + extraDaneX;
		this.p1l15y1 = p1l15y1 * sizeTree + extraDaneY;
		this.p1l15x2 = p1l15x2 * sizeTree + extraDaneX;
		this.p1l15y2 = p1l15y2 * sizeTree + extraDaneY;
		this.p1l15x3 = p1l15x3 * sizeTree + extraDaneX;
		this.p1l15y3 = p1l15y3 * sizeTree + extraDaneY;

		this.p1l16x1 = p1l16x1 * sizeTree + extraDaneX;
		this.p1l16y1 = p1l16y1 * sizeTree + extraDaneY;
		this.p1l16x2 = p1l16x2 * sizeTree + extraDaneX;
		this.p1l16y2 = p1l16y2 * sizeTree + extraDaneY;
		this.p1l16x3 = p1l16x3 * sizeTree + extraDaneX;
		this.p1l16y3 = p1l16y3 * sizeTree + extraDaneY;

		this.p1l17ax1 = p1l17ax1 * sizeTree + extraDaneX;
		this.p1l17ay1 = p1l17ay1 * sizeTree + extraDaneY;
		this.p1l17ax2 = p1l17ax2 * sizeTree + extraDaneX;
		this.p1l17ay2 = p1l17ay2 * sizeTree + extraDaneY;
		this.p1l17ax3 = p1l17ax3 * sizeTree + extraDaneX;
		this.p1l17ay3 = p1l17ay3 * sizeTree + extraDaneY;

		this.p1l17bx1 = p1l17bx1 * sizeTree + extraDaneX;
		this.p1l17by1 = p1l17by1 * sizeTree + extraDaneY;
		this.p1l17bx2 = p1l17bx2 * sizeTree + extraDaneX;
		this.p1l17by2 = p1l17by2 * sizeTree + extraDaneY;
		this.p1l17bx3 = p1l17bx3 * sizeTree + extraDaneX;
		this.p1l17by3 = p1l17by3 * sizeTree + extraDaneY;

		this.p1l18x1 = p1l18x1 * sizeTree + extraDaneX;
		this.p1l18y1 = p1l18y1 * sizeTree + extraDaneY;
		this.p1l18x2 = p1l18x2 * sizeTree + extraDaneX;
		this.p1l18y2 = p1l18y2 * sizeTree + extraDaneY;
		this.p1l18x3 = p1l18x3 * sizeTree + extraDaneX;
		this.p1l18y3 = p1l18y3 * sizeTree + extraDaneY;

		this.p1l19x1 = p1l19x1 * sizeTree + extraDaneX;
		this.p1l19y1 = p1l19y1 * sizeTree + extraDaneY;
		this.p1l19x2 = p1l19x2 * sizeTree + extraDaneX;
		this.p1l19y2 = p1l19y2 * sizeTree + extraDaneY;
		this.p1l19x3 = p1l19x3 * sizeTree + extraDaneX;
		this.p1l19y3 = p1l19y3 * sizeTree + extraDaneY;

		this.p1l18ax1 = p1l18ax1 * sizeTree + extraDaneX;
		this.p1l18ay1 = p1l18ay1 * sizeTree + extraDaneY;
		this.p1l18ax2 = p1l18ax2 * sizeTree + extraDaneX;
		this.p1l18ay2 = p1l18ay2 * sizeTree + extraDaneY;
		this.p1l18ax3 = p1l18ax3 * sizeTree + extraDaneX;
		this.p1l18ay3 = p1l18ay3 * sizeTree + extraDaneY;

		this.p1l20x1 = p1l20x1 * sizeTree + extraDaneX;
		this.p1l20y1 = p1l20y1 * sizeTree + extraDaneY;
		this.p1l20x2 = p1l20x2 * sizeTree + extraDaneX;
		this.p1l20y2 = p1l20y2 * sizeTree + extraDaneY;
		this.p1l20x3 = p1l20x3 * sizeTree + extraDaneX;
		this.p1l20y3 = p1l20y3 * sizeTree + extraDaneY;

		this.p1l21x1 = p1l21x1 * sizeTree + extraDaneX;
		this.p1l21y1 = p1l21y1 * sizeTree + extraDaneY;
		this.p1l21x2 = p1l21x2 * sizeTree + extraDaneX;
		this.p1l21y2 = p1l21y2 * sizeTree + extraDaneY;
		this.p1l21x3 = p1l21x3 * sizeTree + extraDaneX;
		this.p1l21y3 = p1l21y3 * sizeTree + extraDaneY;

		this.p1l22x1 = p1l22x1 * sizeTree + extraDaneX;
		this.p1l22y1 = p1l22y1 * sizeTree + extraDaneY;
		this.p1l22x2 = p1l22x2 * sizeTree + extraDaneX;
		this.p1l22y2 = p1l22y2 * sizeTree + extraDaneY;
		this.p1l22x3 = p1l22x3 * sizeTree + extraDaneX;
		this.p1l22y3 = p1l22y3 * sizeTree + extraDaneY;

		this.p1l23x1 = p1l23x1 * sizeTree + extraDaneX;
		this.p1l23y1 = p1l23y1 * sizeTree + extraDaneY;
		this.p1l23x2 = p1l23x2 * sizeTree + extraDaneX;
		this.p1l23y2 = p1l23y2 * sizeTree + extraDaneY;
		this.p1l23x3 = p1l23x3 * sizeTree + extraDaneX;
		this.p1l23y3 = p1l23y3 * sizeTree + extraDaneY;

		this.p1l24x1 = p1l24x1 * sizeTree + extraDaneX;
		this.p1l24y1 = p1l24y1 * sizeTree + extraDaneY;
		this.p1l24x2 = p1l24x2 * sizeTree + extraDaneX;
		this.p1l24y2 = p1l24y2 * sizeTree + extraDaneY;
		this.p1l24x3 = p1l24x3 * sizeTree + extraDaneX;
		this.p1l24y3 = p1l24y3 * sizeTree + extraDaneY;

		this.p1l25x1 = p1l25x1 * sizeTree + extraDaneX;
		this.p1l25y1 = p1l25y1 * sizeTree + extraDaneY;
		this.p1l25x2 = p1l25x2 * sizeTree + extraDaneX;
		this.p1l25y2 = p1l25y2 * sizeTree + extraDaneY;
		this.p1l25x3 = p1l25x3 * sizeTree + extraDaneX;
		this.p1l25y3 = p1l25y3 * sizeTree + extraDaneY;

		this.p1l27x1 = p1l27x1 * sizeTree + extraDaneX;
		this.p1l27y1 = p1l27y1 * sizeTree + extraDaneY;
		this.p1l27x2 = p1l27x2 * sizeTree + extraDaneX;
		this.p1l27y2 = p1l27y2 * sizeTree + extraDaneY;
		this.p1l27x3 = p1l27x3 * sizeTree + extraDaneX;
		this.p1l27y3 = p1l27y3 * sizeTree + extraDaneY;

		this.p1l28x1 = p1l28x1 * sizeTree + extraDaneX;
		this.p1l28y1 = p1l28y1 * sizeTree + extraDaneY;
		this.p1l28x2 = p1l28x2 * sizeTree + extraDaneX;
		this.p1l28y2 = p1l28y2 * sizeTree + extraDaneY;
		this.p1l28x3 = p1l28x3 * sizeTree + extraDaneX;
		this.p1l28y3 = p1l28y3 * sizeTree + extraDaneY;

		this.p1l29ax1 = p1l29ax1 * sizeTree + extraDaneX;
		this.p1l29ay1 = p1l29ay1 * sizeTree + extraDaneY;
		this.p1l29ax2 = p1l29ax2 * sizeTree + extraDaneX;
		this.p1l29ay2 = p1l29ay2 * sizeTree + extraDaneY;
		this.p1l29ax3 = p1l29ax3 * sizeTree + extraDaneX;
		this.p1l29ay3 = p1l29ay3 * sizeTree + extraDaneY;

		this.p1l29bx1 = p1l29bx1 * sizeTree + extraDaneX;
		this.p1l29by1 = p1l29by1 * sizeTree + extraDaneY;
		this.p1l29bx2 = p1l29bx2 * sizeTree + extraDaneX;
		this.p1l29by2 = p1l29by2 * sizeTree + extraDaneY;
		this.p1l29bx3 = p1l29bx3 * sizeTree + extraDaneX;
		this.p1l29by3 = p1l29by3 * sizeTree + extraDaneY;

		this.p1l30ax1 = p1l30ax1 * sizeTree + extraDaneX;
		this.p1l30ay1 = p1l30ay1 * sizeTree + extraDaneY;
		this.p1l30ax2 = p1l30ax2 * sizeTree + extraDaneX;
		this.p1l30ay2 = p1l30ay2 * sizeTree + extraDaneY;
		this.p1l30ax3 = p1l30ax3 * sizeTree + extraDaneX;
		this.p1l30ay3 = p1l30ay3 * sizeTree + extraDaneY;

		this.p1l30bx1 = p1l30bx1 * sizeTree + extraDaneX;
		this.p1l30by1 = p1l30by1 * sizeTree + extraDaneY;
		this.p1l30bx2 = p1l30bx2 * sizeTree + extraDaneX;
		this.p1l30by2 = p1l30by2 * sizeTree + extraDaneY;
		this.p1l30bx3 = p1l30bx3 * sizeTree + extraDaneX;
		this.p1l30by3 = p1l30by3 * sizeTree + extraDaneY;

		this.p1l31x1 = p1l31x1 * sizeTree + extraDaneX;
		this.p1l31y1 = p1l31y1 * sizeTree + extraDaneY;
		this.p1l31x2 = p1l31x2 * sizeTree + extraDaneX;
		this.p1l31y2 = p1l31y2 * sizeTree + extraDaneY;
		this.p1l31x3 = p1l31x3 * sizeTree + extraDaneX;
		this.p1l31y3 = p1l31y3 * sizeTree + extraDaneY;

		this.p1l32ax1 = p1l32ax1 * sizeTree + extraDaneX;
		this.p1l32ay1 = p1l32ay1 * sizeTree + extraDaneY;
		this.p1l32ax2 = p1l32ax2 * sizeTree + extraDaneX;
		this.p1l32ay2 = p1l32ay2 * sizeTree + extraDaneY;
		this.p1l32ax3 = p1l32ax3 * sizeTree + extraDaneX;
		this.p1l32ay3 = p1l32ay3 * sizeTree + extraDaneY;

		this.p1l33x1 = p1l33x1 * sizeTree + extraDaneX;
		this.p1l33y1 = p1l33y1 * sizeTree + extraDaneY;
		this.p1l33x2 = p1l33x2 * sizeTree + extraDaneX;
		this.p1l33y2 = p1l33y2 * sizeTree + extraDaneY;
		this.p1l33x3 = p1l33x3 * sizeTree + extraDaneX;
		this.p1l33y3 = p1l33y3 * sizeTree + extraDaneY;

		this.p1l34x1 = p1l34x1 * sizeTree + extraDaneX;
		this.p1l34y1 = p1l34y1 * sizeTree + extraDaneY;
		this.p1l34x2 = p1l34x2 * sizeTree + extraDaneX;
		this.p1l34y2 = p1l34y2 * sizeTree + extraDaneY;
		this.p1l34x3 = p1l34x3 * sizeTree + extraDaneX;
		this.p1l34y3 = p1l34y3 * sizeTree + extraDaneY;

		this.p1l35x1 = p1l35x1 * sizeTree + extraDaneX;
		this.p1l35y1 = p1l35y1 * sizeTree + extraDaneY;
		this.p1l35x2 = p1l35x2 * sizeTree + extraDaneX;
		this.p1l35y2 = p1l35y2 * sizeTree + extraDaneY;
		this.p1l35x3 = p1l35x3 * sizeTree + extraDaneX;
		this.p1l35y3 = p1l35y3 * sizeTree + extraDaneY;

		this.p1l36x1 = p1l36x1 * sizeTree + extraDaneX;
		this.p1l36y1 = p1l36y1 * sizeTree + extraDaneY;
		this.p1l36x2 = p1l36x2 * sizeTree + extraDaneX;
		this.p1l36y2 = p1l36y2 * sizeTree + extraDaneY;
		this.p1l36x3 = p1l36x3 * sizeTree + extraDaneX;
		this.p1l36y3 = p1l36y3 * sizeTree + extraDaneY;

		// druga gałąź - end

		// trzecia gałąź - licząc od lewej - gałąź zielona 1 - start
		this.z1l1ax1 = z1l1ax1 * sizeTree + extraDaneX;
		this.z1l1ay1 = z1l1ay1 * sizeTree + extraDaneY;
		this.z1l1ax2 = z1l1ax2 * sizeTree + extraDaneX;
		this.z1l1ay2 = z1l1ay2 * sizeTree + extraDaneY;
		this.z1l1ax3 = z1l1ax3 * sizeTree + extraDaneX;
		this.z1l1ay3 = z1l1ay3 * sizeTree + extraDaneY;

		this.z1l1bx1 = z1l1bx1 * sizeTree + extraDaneX;
		this.z1l1by1 = z1l1by1 * sizeTree + extraDaneY;
		this.z1l1bx2 = z1l1bx2 * sizeTree + extraDaneX;
		this.z1l1by2 = z1l1by2 * sizeTree + extraDaneY;
		this.z1l1bx3 = z1l1bx3 * sizeTree + extraDaneX;
		this.z1l1by3 = z1l1by3 * sizeTree + extraDaneY;

		this.z1l8x1 = z1l8x1 * sizeTree + extraDaneX;
		this.z1l8y1 = z1l8y1 * sizeTree + extraDaneY;
		this.z1l8x2 = z1l8x2 * sizeTree + extraDaneX;
		this.z1l8y2 = z1l8y2 * sizeTree + extraDaneY;
		this.z1l8x3 = z1l8x3 * sizeTree + extraDaneX;
		this.z1l8y3 = z1l8y3 * sizeTree + extraDaneY;

		this.z1l5x1 = z1l5x1 * sizeTree + extraDaneX;
		this.z1l5y1 = z1l5y1 * sizeTree + extraDaneY;
		this.z1l5x2 = z1l5x2 * sizeTree + extraDaneX;
		this.z1l5y2 = z1l5y2 * sizeTree + extraDaneY;
		this.z1l5x3 = z1l5x3 * sizeTree + extraDaneX;
		this.z1l5y3 = z1l5y3 * sizeTree + extraDaneY;

		this.z1l2x1 = z1l2x1 * sizeTree + extraDaneX;
		this.z1l2y1 = z1l2y1 * sizeTree + extraDaneY;
		this.z1l2x2 = z1l2x2 * sizeTree + extraDaneX;
		this.z1l2y2 = z1l2y2 * sizeTree + extraDaneY;
		this.z1l2x3 = z1l2x3 * sizeTree + extraDaneX;
		this.z1l2y3 = z1l2y3 * sizeTree + extraDaneY;

		this.z1l3x1 = z1l3x1 * sizeTree + extraDaneX;
		this.z1l3y1 = z1l3y1 * sizeTree + extraDaneY;
		this.z1l3x2 = z1l3x2 * sizeTree + extraDaneX;
		this.z1l3y2 = z1l3y2 * sizeTree + extraDaneY;
		this.z1l3x3 = z1l3x3 * sizeTree + extraDaneX;
		this.z1l3y3 = z1l3y3 * sizeTree + extraDaneY;

		this.z1l4x1 = z1l4x1 * sizeTree + extraDaneX;
		this.z1l4y1 = z1l4y1 * sizeTree + extraDaneY;
		this.z1l4x2 = z1l4x2 * sizeTree + extraDaneX;
		this.z1l4y2 = z1l4y2 * sizeTree + extraDaneY;
		this.z1l4x3 = z1l4x3 * sizeTree + extraDaneX;
		this.z1l4y3 = z1l4y3 * sizeTree + extraDaneY;

		this.z1l10x1 = z1l10x1 * sizeTree + extraDaneX;
		this.z1l10y1 = z1l10y1 * sizeTree + extraDaneY;
		this.z1l10x2 = z1l10x2 * sizeTree + extraDaneX;
		this.z1l10y2 = z1l10y2 * sizeTree + extraDaneY;
		this.z1l10x3 = z1l10x3 * sizeTree + extraDaneX;
		this.z1l10y3 = z1l10y3 * sizeTree + extraDaneY;

		this.z1l9x1 = z1l9x1 * sizeTree + extraDaneX;
		this.z1l9y1 = z1l9y1 * sizeTree + extraDaneY;
		this.z1l9x2 = z1l9x2 * sizeTree + extraDaneX;
		this.z1l9y2 = z1l9y2 * sizeTree + extraDaneY;
		this.z1l9x3 = z1l9x3 * sizeTree + extraDaneX;
		this.z1l9y3 = z1l9y3 * sizeTree + extraDaneY;

		this.z1l11x1 = z1l11x1 * sizeTree + extraDaneX;
		this.z1l11y1 = z1l11y1 * sizeTree + extraDaneY;
		this.z1l11x2 = z1l11x2 * sizeTree + extraDaneX;
		this.z1l11y2 = z1l11y2 * sizeTree + extraDaneY;
		this.z1l11x3 = z1l11x3 * sizeTree + extraDaneX;
		this.z1l11y3 = z1l11y3 * sizeTree + extraDaneY;

		this.z1l11ax1 = z1l11ax1 * sizeTree + extraDaneX;
		this.z1l11ay1 = z1l11ay1 * sizeTree + extraDaneY;
		this.z1l11ax2 = z1l11ax2 * sizeTree + extraDaneX;
		this.z1l11ay2 = z1l11ay2 * sizeTree + extraDaneY;
		this.z1l11ax3 = z1l11ax3 * sizeTree + extraDaneX;
		this.z1l11ay3 = z1l11ay3 * sizeTree + extraDaneY;

		this.z1l22x1 = z1l22x1 * sizeTree + extraDaneX;
		this.z1l22y1 = z1l22y1 * sizeTree + extraDaneY;
		this.z1l22x2 = z1l22x2 * sizeTree + extraDaneX;
		this.z1l22y2 = z1l22y2 * sizeTree + extraDaneY;
		this.z1l22x3 = z1l22x3 * sizeTree + extraDaneX;
		this.z1l22y3 = z1l22y3 * sizeTree + extraDaneY;

		this.z1l18x1 = z1l18x1 * sizeTree + extraDaneX;
		this.z1l18y1 = z1l18y1 * sizeTree + extraDaneY;
		this.z1l18x2 = z1l18x2 * sizeTree + extraDaneX;
		this.z1l18y2 = z1l18y2 * sizeTree + extraDaneY;
		this.z1l18x3 = z1l18x3 * sizeTree + extraDaneX;
		this.z1l18y3 = z1l18y3 * sizeTree + extraDaneY;

		this.z1l21x1 = z1l21x1 * sizeTree + extraDaneX;
		this.z1l21y1 = z1l21y1 * sizeTree + extraDaneY;
		this.z1l21x2 = z1l21x2 * sizeTree + extraDaneX;
		this.z1l21y2 = z1l21y2 * sizeTree + extraDaneY;
		this.z1l21x3 = z1l21x3 * sizeTree + extraDaneX;
		this.z1l21y3 = z1l21y3 * sizeTree + extraDaneY;

		this.z1l19x1 = z1l19x1 * sizeTree + extraDaneX;
		this.z1l19y1 = z1l19y1 * sizeTree + extraDaneY;
		this.z1l19x2 = z1l19x2 * sizeTree + extraDaneX;
		this.z1l19y2 = z1l19y2 * sizeTree + extraDaneY;
		this.z1l19x3 = z1l19x3 * sizeTree + extraDaneX;
		this.z1l19y3 = z1l19y3 * sizeTree + extraDaneY;

		this.z1l20x1 = z1l20x1 * sizeTree + extraDaneX;
		this.z1l20y1 = z1l20y1 * sizeTree + extraDaneY;
		this.z1l20x2 = z1l20x2 * sizeTree + extraDaneX;
		this.z1l20y2 = z1l20y2 * sizeTree + extraDaneY;
		this.z1l20x3 = z1l20x3 * sizeTree + extraDaneX;
		this.z1l20y3 = z1l20y3 * sizeTree + extraDaneY;

		this.z1l14ax1 = z1l14ax1 * sizeTree + extraDaneX;
		this.z1l14ay1 = z1l14ay1 * sizeTree + extraDaneY;
		this.z1l14ax2 = z1l14ax2 * sizeTree + extraDaneX;
		this.z1l14ay2 = z1l14ay2 * sizeTree + extraDaneY;
		this.z1l14ax3 = z1l14ax3 * sizeTree + extraDaneX;
		this.z1l14ay3 = z1l14ay3 * sizeTree + extraDaneY;

		this.z1l14bx1 = z1l14bx1 * sizeTree + extraDaneX;
		this.z1l14by1 = z1l14by1 * sizeTree + extraDaneY;
		this.z1l14bx2 = z1l14bx2 * sizeTree + extraDaneX;
		this.z1l14by2 = z1l14by2 * sizeTree + extraDaneY;
		this.z1l14bx3 = z1l14bx3 * sizeTree + extraDaneX;
		this.z1l14by3 = z1l14by3 * sizeTree + extraDaneY;

		this.z1l16x1 = z1l16x1 * sizeTree + extraDaneX;
		this.z1l16y1 = z1l16y1 * sizeTree + extraDaneY;
		this.z1l16x2 = z1l16x2 * sizeTree + extraDaneX;
		this.z1l16y2 = z1l16y2 * sizeTree + extraDaneY;
		this.z1l16x3 = z1l16x3 * sizeTree + extraDaneX;
		this.z1l16y3 = z1l16y3 * sizeTree + extraDaneY;

		this.z1l17x1 = z1l17x1 * sizeTree + extraDaneX;
		this.z1l17y1 = z1l17y1 * sizeTree + extraDaneY;
		this.z1l17x2 = z1l17x2 * sizeTree + extraDaneX;
		this.z1l17y2 = z1l17y2 * sizeTree + extraDaneY;
		this.z1l17x3 = z1l17x3 * sizeTree + extraDaneX;
		this.z1l17y3 = z1l17y3 * sizeTree + extraDaneY;

		this.z1l13x1 = z1l13x1 * sizeTree + extraDaneX;
		this.z1l13y1 = z1l13y1 * sizeTree + extraDaneY;
		this.z1l13x2 = z1l13x2 * sizeTree + extraDaneX;
		this.z1l13y2 = z1l13y2 * sizeTree + extraDaneY;
		this.z1l13x3 = z1l13x3 * sizeTree + extraDaneX;
		this.z1l13y3 = z1l13y3 * sizeTree + extraDaneY;

		this.z1l12x1 = z1l12x1 * sizeTree + extraDaneX;
		this.z1l12y1 = z1l12y1 * sizeTree + extraDaneY;
		this.z1l12x2 = z1l12x2 * sizeTree + extraDaneX;
		this.z1l12y2 = z1l12y2 * sizeTree + extraDaneY;
		this.z1l12x3 = z1l12x3 * sizeTree + extraDaneX;
		this.z1l12y3 = z1l12y3 * sizeTree + extraDaneY;
		// trzecia gałąź - end

		// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
		this.z2l2x1 = z2l2x1 * sizeTree + extraDaneX;
		this.z2l2y1 = z2l2y1 * sizeTree + extraDaneY;
		this.z2l2x2 = z2l2x2 * sizeTree + extraDaneX;
		this.z2l2y2 = z2l2y2 * sizeTree + extraDaneY;
		this.z2l2x3 = z2l2x3 * sizeTree + extraDaneX;
		this.z2l2y3 = z2l2y3 * sizeTree + extraDaneY;

		this.z2l1ax1 = z2l1ax1 * sizeTree + extraDaneX;
		this.z2l1ay1 = z2l1ay1 * sizeTree + extraDaneY;
		this.z2l1ax2 = z2l1ax2 * sizeTree + extraDaneX;
		this.z2l1ay2 = z2l1ay2 * sizeTree + extraDaneY;
		this.z2l1ax3 = z2l1ax3 * sizeTree + extraDaneX;
		this.z2l1ay3 = z2l1ay3 * sizeTree + extraDaneY;

		this.z2l1bx1 = z2l1bx1 * sizeTree + extraDaneX;
		this.z2l1by1 = z2l1by1 * sizeTree + extraDaneY;
		this.z2l1bx2 = z2l1bx2 * sizeTree + extraDaneX;
		this.z2l1by2 = z2l1by2 * sizeTree + extraDaneY;
		this.z2l1bx3 = z2l1bx3 * sizeTree + extraDaneX;
		this.z2l1by3 = z2l1by3 * sizeTree + extraDaneY;

		this.z2l21x1 = z2l21x1 * sizeTree + extraDaneX;
		this.z2l21y1 = z2l21y1 * sizeTree + extraDaneY;
		this.z2l21x2 = z2l21x2 * sizeTree + extraDaneX;
		this.z2l21y2 = z2l21y2 * sizeTree + extraDaneY;
		this.z2l21x3 = z2l21x3 * sizeTree + extraDaneX;
		this.z2l21y3 = z2l21y3 * sizeTree + extraDaneY;

		this.z2l22x1 = z2l22x1 * sizeTree + extraDaneX;
		this.z2l22y1 = z2l22y1 * sizeTree + extraDaneY;
		this.z2l22x2 = z2l22x2 * sizeTree + extraDaneX;
		this.z2l22y2 = z2l22y2 * sizeTree + extraDaneY;
		this.z2l22x3 = z2l22x3 * sizeTree + extraDaneX;
		this.z2l22y3 = z2l22y3 * sizeTree + extraDaneY;

		this.z2l18x1 = z2l18x1 * sizeTree + extraDaneX;
		this.z2l18y1 = z2l18y1 * sizeTree + extraDaneY;
		this.z2l18x2 = z2l18x2 * sizeTree + extraDaneX;
		this.z2l18y2 = z2l18y2 * sizeTree + extraDaneY;
		this.z2l18x3 = z2l18x3 * sizeTree + extraDaneX;
		this.z2l18y3 = z2l18y3 * sizeTree + extraDaneY;

		this.z2l20x1 = z2l20x1 * sizeTree + extraDaneX;
		this.z2l20y1 = z2l20y1 * sizeTree + extraDaneY;
		this.z2l20x2 = z2l20x2 * sizeTree + extraDaneX;
		this.z2l20y2 = z2l20y2 * sizeTree + extraDaneY;
		this.z2l20x3 = z2l20x3 * sizeTree + extraDaneX;
		this.z2l20y3 = z2l20y3 * sizeTree + extraDaneY;

		this.z2l17x1 = z2l17x1 * sizeTree + extraDaneX;
		this.z2l17y1 = z2l17y1 * sizeTree + extraDaneY;
		this.z2l17x2 = z2l17x2 * sizeTree + extraDaneX;
		this.z2l17y2 = z2l17y2 * sizeTree + extraDaneY;
		this.z2l17x3 = z2l17x3 * sizeTree + extraDaneX;
		this.z2l17y3 = z2l17y3 * sizeTree + extraDaneY;

		this.z2l16x1 = z2l16x1 * sizeTree + extraDaneX;
		this.z2l16y1 = z2l16y1 * sizeTree + extraDaneY;
		this.z2l16x2 = z2l16x2 * sizeTree + extraDaneX;
		this.z2l16y2 = z2l16y2 * sizeTree + extraDaneY;
		this.z2l16x3 = z2l16x3 * sizeTree + extraDaneX;
		this.z2l16y3 = z2l16y3 * sizeTree + extraDaneY;

		this.z2l15x1 = z2l15x1 * sizeTree + extraDaneX;
		this.z2l15y1 = z2l15y1 * sizeTree + extraDaneY;
		this.z2l15x2 = z2l15x2 * sizeTree + extraDaneX;
		this.z2l15y2 = z2l15y2 * sizeTree + extraDaneY;
		this.z2l15x3 = z2l15x3 * sizeTree + extraDaneX;
		this.z2l15y3 = z2l15y3 * sizeTree + extraDaneY;

		this.z2l14x1 = z2l14x1 * sizeTree + extraDaneX;
		this.z2l14y1 = z2l14y1 * sizeTree + extraDaneY;
		this.z2l14x2 = z2l14x2 * sizeTree + extraDaneX;
		this.z2l14y2 = z2l14y2 * sizeTree + extraDaneY;
		this.z2l14x3 = z2l14x3 * sizeTree + extraDaneX;
		this.z2l14y3 = z2l14y3 * sizeTree + extraDaneY;

		this.z2l13x1 = z2l13x1 * sizeTree + extraDaneX;
		this.z2l13y1 = z2l13y1 * sizeTree + extraDaneY;
		this.z2l13x2 = z2l13x2 * sizeTree + extraDaneX;
		this.z2l13y2 = z2l13y2 * sizeTree + extraDaneY;
		this.z2l13x3 = z2l13x3 * sizeTree + extraDaneX;
		this.z2l13y3 = z2l13y3 * sizeTree + extraDaneY;

		this.z2l4ax1 = z2l4ax1 * sizeTree + extraDaneX;
		this.z2l4ay1 = z2l4ay1 * sizeTree + extraDaneY;
		this.z2l4ax2 = z2l4ax2 * sizeTree + extraDaneX;
		this.z2l4ay2 = z2l4ay2 * sizeTree + extraDaneY;
		this.z2l4ax3 = z2l4ax3 * sizeTree + extraDaneX;
		this.z2l4ay3 = z2l4ay3 * sizeTree + extraDaneY;

		this.z2l4bx1 = z2l4bx1 * sizeTree + extraDaneX;
		this.z2l4by1 = z2l4by1 * sizeTree + extraDaneY;
		this.z2l4bx2 = z2l4bx2 * sizeTree + extraDaneX;
		this.z2l4by2 = z2l4by2 * sizeTree + extraDaneY;
		this.z2l4bx3 = z2l4bx3 * sizeTree + extraDaneX;
		this.z2l4by3 = z2l4by3 * sizeTree + extraDaneY;

		this.z2l3x1 = z2l3x1 * sizeTree + extraDaneX;
		this.z2l3y1 = z2l3y1 * sizeTree + extraDaneY;
		this.z2l3x2 = z2l3x2 * sizeTree + extraDaneX;
		this.z2l3y2 = z2l3y2 * sizeTree + extraDaneY;
		this.z2l3x3 = z2l3x3 * sizeTree + extraDaneX;
		this.z2l3y3 = z2l3y3 * sizeTree + extraDaneY;

		this.z2l6x1 = z2l6x1 * sizeTree + extraDaneX;
		this.z2l6y1 = z2l6y1 * sizeTree + extraDaneY;
		this.z2l6x2 = z2l6x2 * sizeTree + extraDaneX;
		this.z2l6y2 = z2l6y2 * sizeTree + extraDaneY;
		this.z2l6x3 = z2l6x3 * sizeTree + extraDaneX;
		this.z2l6y3 = z2l6y3 * sizeTree + extraDaneY;

		this.z2l5x1 = z2l5x1 * sizeTree + extraDaneX;
		this.z2l5y1 = z2l5y1 * sizeTree + extraDaneY;
		this.z2l5x2 = z2l5x2 * sizeTree + extraDaneX;
		this.z2l5y2 = z2l5y2 * sizeTree + extraDaneY;
		this.z2l5x3 = z2l5x3 * sizeTree + extraDaneX;
		this.z2l5y3 = z2l5y3 * sizeTree + extraDaneY;

		this.z2l8x1 = z2l8x1 * sizeTree + extraDaneX;
		this.z2l8y1 = z2l8y1 * sizeTree + extraDaneY;
		this.z2l8x2 = z2l8x2 * sizeTree + extraDaneX;
		this.z2l8y2 = z2l8y2 * sizeTree + extraDaneY;
		this.z2l8x3 = z2l8x3 * sizeTree + extraDaneX;
		this.z2l8y3 = z2l8y3 * sizeTree + extraDaneY;

		this.z2l7x1 = z2l7x1 * sizeTree + extraDaneX;
		this.z2l7y1 = z2l7y1 * sizeTree + extraDaneY;
		this.z2l7x2 = z2l7x2 * sizeTree + extraDaneX;
		this.z2l7y2 = z2l7y2 * sizeTree + extraDaneY;
		this.z2l7x3 = z2l7x3 * sizeTree + extraDaneX;
		this.z2l7y3 = z2l7y3 * sizeTree + extraDaneY;

		this.z2l12x1 = z2l12x1 * sizeTree + extraDaneX;
		this.z2l12y1 = z2l12y1 * sizeTree + extraDaneY;
		this.z2l12x2 = z2l12x2 * sizeTree + extraDaneX;
		this.z2l12y2 = z2l12y2 * sizeTree + extraDaneY;
		this.z2l12x3 = z2l12x3 * sizeTree + extraDaneX;
		this.z2l12y3 = z2l12y3 * sizeTree + extraDaneY;

		this.z2l12bx1 = z2l12bx1 * sizeTree + extraDaneX;
		this.z2l12by1 = z2l12by1 * sizeTree + extraDaneY;
		this.z2l12bx2 = z2l12bx2 * sizeTree + extraDaneX;
		this.z2l12by2 = z2l12by2 * sizeTree + extraDaneY;
		this.z2l12bx3 = z2l12bx3 * sizeTree + extraDaneX;
		this.z2l12by3 = z2l12by3 * sizeTree + extraDaneY;

		this.z2l12cx1 = z2l12cx1 * sizeTree + extraDaneX;
		this.z2l12cy1 = z2l12cy1 * sizeTree + extraDaneY;
		this.z2l12cx2 = z2l12cx2 * sizeTree + extraDaneX;
		this.z2l12cy2 = z2l12cy2 * sizeTree + extraDaneY;
		this.z2l12cx3 = z2l12cx3 * sizeTree + extraDaneX;
		this.z2l12cy3 = z2l12cy3 * sizeTree + extraDaneY;
		// czwarta gałąź - end	

		// piąta gałąź - licząc od lewej - gałąź zielona 3 - start		
		this.z3l1ax1 = z3l1ax1 * sizeTree + extraDaneX;
		this.z3l1ay1 = z3l1ay1 * sizeTree + extraDaneY;
		this.z3l1ax2 = z3l1ax2 * sizeTree + extraDaneX;
		this.z3l1ay2 = z3l1ay2 * sizeTree + extraDaneY;
		this.z3l1ax3 = z3l1ax3 * sizeTree + extraDaneX;
		this.z3l1ay3 = z3l1ay3 * sizeTree + extraDaneY;

		this.z3l1bx1 = z3l1bx1 * sizeTree + extraDaneX;
		this.z3l1by1 = z3l1by1 * sizeTree + extraDaneY;
		this.z3l1bx2 = z3l1bx2 * sizeTree + extraDaneX;
		this.z3l1by2 = z3l1by2 * sizeTree + extraDaneY;
		this.z3l1bx3 = z3l1bx3 * sizeTree + extraDaneX;
		this.z3l1by3 = z3l1by3 * sizeTree + extraDaneY;

		this.z3l3x1 = z3l3x1 * sizeTree + extraDaneX;
		this.z3l3y1 = z3l3y1 * sizeTree + extraDaneY;
		this.z3l3x2 = z3l3x2 * sizeTree + extraDaneX;
		this.z3l3y2 = z3l3y2 * sizeTree + extraDaneY;
		this.z3l3x3 = z3l3x3 * sizeTree + extraDaneX;
		this.z3l3y3 = z3l3y3 * sizeTree + extraDaneY;

		this.z3l4x1 = z3l4x1 * sizeTree + extraDaneX;
		this.z3l4y1 = z3l4y1 * sizeTree + extraDaneY;
		this.z3l4x2 = z3l4x2 * sizeTree + extraDaneX;
		this.z3l4y2 = z3l4y2 * sizeTree + extraDaneY;
		this.z3l4x3 = z3l4x3 * sizeTree + extraDaneX;
		this.z3l4y3 = z3l4y3 * sizeTree + extraDaneY;

		this.z3l5x1 = z3l5x1 * sizeTree + extraDaneX;
		this.z3l5y1 = z3l5y1 * sizeTree + extraDaneY;
		this.z3l5x2 = z3l5x2 * sizeTree + extraDaneX;
		this.z3l5y2 = z3l5y2 * sizeTree + extraDaneY;
		this.z3l5x3 = z3l5x3 * sizeTree + extraDaneX;
		this.z3l5y3 = z3l5y3 * sizeTree + extraDaneY;

		this.z3l6x1 = z3l6x1 * sizeTree + extraDaneX;
		this.z3l6y1 = z3l6y1 * sizeTree + extraDaneY;
		this.z3l6x2 = z3l6x2 * sizeTree + extraDaneX;
		this.z3l6y2 = z3l6y2 * sizeTree + extraDaneY;
		this.z3l6x3 = z3l6x3 * sizeTree + extraDaneX;
		this.z3l6y3 = z3l6y3 * sizeTree + extraDaneY;

		this.z3l8x1 = z3l8x1 * sizeTree + extraDaneX;
		this.z3l8y1 = z3l8y1 * sizeTree + extraDaneY;
		this.z3l8x2 = z3l8x2 * sizeTree + extraDaneX;
		this.z3l8y2 = z3l8y2 * sizeTree + extraDaneY;
		this.z3l8x3 = z3l8x3 * sizeTree + extraDaneX;
		this.z3l8y3 = z3l8y3 * sizeTree + extraDaneY;

		this.z3l9x1 = z3l9x1 * sizeTree + extraDaneX;
		this.z3l9y1 = z3l9y1 * sizeTree + extraDaneY;
		this.z3l9x2 = z3l9x2 * sizeTree + extraDaneX;
		this.z3l9y2 = z3l9y2 * sizeTree + extraDaneY;
		this.z3l9x3 = z3l9x3 * sizeTree + extraDaneX;
		this.z3l9y3 = z3l9y3 * sizeTree + extraDaneY;

		this.z3l7x1 = z3l7x1 * sizeTree + extraDaneX;
		this.z3l7y1 = z3l7y1 * sizeTree + extraDaneY;
		this.z3l7x2 = z3l7x2 * sizeTree + extraDaneX;
		this.z3l7y2 = z3l7y2 * sizeTree + extraDaneY;
		this.z3l7x3 = z3l7x3 * sizeTree + extraDaneX;
		this.z3l7y3 = z3l7y3 * sizeTree + extraDaneY;
		// piąta gałąź - end

		// szusta gałąź - gałąź czerwona 2 - start
		this.r2l1x1 = r2l1x1 * sizeTree + extraDaneX;
		this.r2l1y1 = r2l1y1 * sizeTree + extraDaneY;
		this.r2l1x2 = r2l1x2 * sizeTree + extraDaneX;
		this.r2l1y2 = r2l1y2 * sizeTree + extraDaneY;
		this.r2l1x3 = r2l1x3 * sizeTree + extraDaneX;
		this.r2l1y3 = r2l1y3 * sizeTree + extraDaneY;

		this.r2l2x1 = r2l2x1 * sizeTree + extraDaneX;
		this.r2l2y1 = r2l2y1 * sizeTree + extraDaneY;
		this.r2l2x2 = r2l2x2 * sizeTree + extraDaneX;
		this.r2l2y2 = r2l2y2 * sizeTree + extraDaneY;
		this.r2l2x3 = r2l2x3 * sizeTree + extraDaneX;
		this.r2l2y3 = r2l2y3 * sizeTree + extraDaneY;

		this.r2l3x1 = r2l3x1 * sizeTree + extraDaneX;
		this.r2l3y1 = r2l3y1 * sizeTree + extraDaneY;
		this.r2l3x2 = r2l3x2 * sizeTree + extraDaneX;
		this.r2l3y2 = r2l3y2 * sizeTree + extraDaneY;
		this.r2l3x3 = r2l3x3 * sizeTree + extraDaneX;
		this.r2l3y3 = r2l3y3 * sizeTree + extraDaneY;

		this.r2l7x1 = r2l7x1 * sizeTree + extraDaneX;
		this.r2l7y1 = r2l7y1 * sizeTree + extraDaneY;
		this.r2l7x2 = r2l7x2 * sizeTree + extraDaneX;
		this.r2l7y2 = r2l7y2 * sizeTree + extraDaneY;
		this.r2l7x3 = r2l7x3 * sizeTree + extraDaneX;
		this.r2l7y3 = r2l7y3 * sizeTree + extraDaneY;

		this.r2l8x1 = r2l8x1 * sizeTree + extraDaneX;
		this.r2l8y1 = r2l8y1 * sizeTree + extraDaneY;
		this.r2l8x2 = r2l8x2 * sizeTree + extraDaneX;
		this.r2l8y2 = r2l8y2 * sizeTree + extraDaneY;
		this.r2l8x3 = r2l8x3 * sizeTree + extraDaneX;
		this.r2l8y3 = r2l8y3 * sizeTree + extraDaneY;

		this.r2l9x1 = r2l9x1 * sizeTree + extraDaneX;
		this.r2l9y1 = r2l9y1 * sizeTree + extraDaneY;
		this.r2l9x2 = r2l9x2 * sizeTree + extraDaneX;
		this.r2l9y2 = r2l9y2 * sizeTree + extraDaneY;
		this.r2l9x3 = r2l9x3 * sizeTree + extraDaneX;
		this.r2l9y3 = r2l9y3 * sizeTree + extraDaneY;

		this.r2l10x1 = r2l10x1 * sizeTree + extraDaneX;
		this.r2l10y1 = r2l10y1 * sizeTree + extraDaneY;
		this.r2l10x2 = r2l10x2 * sizeTree + extraDaneX;
		this.r2l10y2 = r2l10y2 * sizeTree + extraDaneY;
		this.r2l10x3 = r2l10x3 * sizeTree + extraDaneX;
		this.r2l10y3 = r2l10y3 * sizeTree + extraDaneY;

		this.r2l11x1 = r2l11x1 * sizeTree + extraDaneX;
		this.r2l11y1 = r2l11y1 * sizeTree + extraDaneY;
		this.r2l11x2 = r2l11x2 * sizeTree + extraDaneX;
		this.r2l11y2 = r2l11y2 * sizeTree + extraDaneY;
		this.r2l11x3 = r2l11x3 * sizeTree + extraDaneX;
		this.r2l11y3 = r2l11y3 * sizeTree + extraDaneY;

		this.r2l1ax1 = r2l1ax1 * sizeTree + extraDaneX;
		this.r2l1ay1 = r2l1ay1 * sizeTree + extraDaneY;
		this.r2l1ax2 = r2l1ax2 * sizeTree + extraDaneX;
		this.r2l1ay2 = r2l1ay2 * sizeTree + extraDaneY;
		this.r2l1ax3 = r2l1ax3 * sizeTree + extraDaneX;
		this.r2l1ay3 = r2l1ay3 * sizeTree + extraDaneY;
		// szusta gałąź - end		

		// siódma gałąź - gałąź czerwona 4 - start 		
		this.r4l2x1 = r4l2x1 * sizeTree + extraDaneX;
		this.r4l2y1 = r4l2y1 * sizeTree + extraDaneY;
		this.r4l2x2 = r4l2x2 * sizeTree + extraDaneX;
		this.r4l2y2 = r4l2y2 * sizeTree + extraDaneY;
		this.r4l2x3 = r4l2x3 * sizeTree + extraDaneX;
		this.r4l2y3 = r4l2y3 * sizeTree + extraDaneY;

		this.r4l3x1 = r4l3x1 * sizeTree + extraDaneX;
		this.r4l3y1 = r4l3y1 * sizeTree + extraDaneY;
		this.r4l3x2 = r4l3x2 * sizeTree + extraDaneX;
		this.r4l3y2 = r4l3y2 * sizeTree + extraDaneY;
		this.r4l3x3 = r4l3x3 * sizeTree + extraDaneX;
		this.r4l3y3 = r4l3y3 * sizeTree + extraDaneY;

		this.r4l4x1 = r4l4x1 * sizeTree + extraDaneX;
		this.r4l4y1 = r4l4y1 * sizeTree + extraDaneY;
		this.r4l4x2 = r4l4x2 * sizeTree + extraDaneX;
		this.r4l4y2 = r4l4y2 * sizeTree + extraDaneY;
		this.r4l4x3 = r4l4x3 * sizeTree + extraDaneX;
		this.r4l4y3 = r4l4y3 * sizeTree + extraDaneY;

		this.r4l7x1 = r4l7x1 * sizeTree + extraDaneX;
		this.r4l7y1 = r4l7y1 * sizeTree + extraDaneY;
		this.r4l7x2 = r4l7x2 * sizeTree + extraDaneX;
		this.r4l7y2 = r4l7y2 * sizeTree + extraDaneY;
		this.r4l7x3 = r4l7x3 * sizeTree + extraDaneX;
		this.r4l7y3 = r4l7y3 * sizeTree + extraDaneY;

		this.r4l11x1 = r4l11x1 * sizeTree + extraDaneX;
		this.r4l11y1 = r4l11y1 * sizeTree + extraDaneY;
		this.r4l11x2 = r4l11x2 * sizeTree + extraDaneX;
		this.r4l11y2 = r4l11y2 * sizeTree + extraDaneY;
		this.r4l11x3 = r4l11x3 * sizeTree + extraDaneX;
		this.r4l11y3 = r4l11y3 * sizeTree + extraDaneY;

		this.r4l9x1 = r4l9x1 * sizeTree + extraDaneX;
		this.r4l9y1 = r4l9y1 * sizeTree + extraDaneY;
		this.r4l9x2 = r4l9x2 * sizeTree + extraDaneX;
		this.r4l9y2 = r4l9y2 * sizeTree + extraDaneY;
		this.r4l9x3 = r4l9x3 * sizeTree + extraDaneX;
		this.r4l9y3 = r4l9y3 * sizeTree + extraDaneY;

		this.r4l10x1 = r4l10x1 * sizeTree + extraDaneX;
		this.r4l10y1 = r4l10y1 * sizeTree + extraDaneY;
		this.r4l10x2 = r4l10x2 * sizeTree + extraDaneX;
		this.r4l10y2 = r4l10y2 * sizeTree + extraDaneY;
		this.r4l10x3 = r4l10x3 * sizeTree + extraDaneX;
		this.r4l10y3 = r4l10y3 * sizeTree + extraDaneY;

		this.r4l13x1 = r4l13x1 * sizeTree + extraDaneX;
		this.r4l13y1 = r4l13y1 * sizeTree + extraDaneY;
		this.r4l13x2 = r4l13x2 * sizeTree + extraDaneX;
		this.r4l13y2 = r4l13y2 * sizeTree + extraDaneY;
		this.r4l13x3 = r4l13x3 * sizeTree + extraDaneX;
		this.r4l13y3 = r4l13y3 * sizeTree + extraDaneY;

		this.r4l8x1 = r4l8x1 * sizeTree + extraDaneX;
		this.r4l8y1 = r4l8y1 * sizeTree + extraDaneY;
		this.r4l8x2 = r4l8x2 * sizeTree + extraDaneX;
		this.r4l8y2 = r4l8y2 * sizeTree + extraDaneY;
		this.r4l8x3 = r4l8x3 * sizeTree + extraDaneX;
		this.r4l8y3 = r4l8y3 * sizeTree + extraDaneY;
		// siódma gałąź - end

		// ósma gałąź - gałąź fioletowa 2 - start
		this.p2l1x1 = p2l1x1 * sizeTree + extraDaneX;
		this.p2l1y1 = p2l1y1 * sizeTree + extraDaneY;
		this.p2l1x2 = p2l1x2 * sizeTree + extraDaneX;
		this.p2l1y2 = p2l1y2 * sizeTree + extraDaneY;
		this.p2l1x3 = p2l1x3 * sizeTree + extraDaneX;
		this.p2l1y3 = p2l1y3 * sizeTree + extraDaneY;

		this.p2l2x1 = p2l2x1 * sizeTree + extraDaneX;
		this.p2l2y1 = p2l2y1 * sizeTree + extraDaneY;
		this.p2l2x2 = p2l2x2 * sizeTree + extraDaneX;
		this.p2l2y2 = p2l2y2 * sizeTree + extraDaneY;
		this.p2l2x3 = p2l2x3 * sizeTree + extraDaneX;
		this.p2l2y3 = p2l2y3 * sizeTree + extraDaneY;

		this.p2l6x1 = p2l6x1 * sizeTree + extraDaneX;
		this.p2l6y1 = p2l6y1 * sizeTree + extraDaneY;
		this.p2l6x2 = p2l6x2 * sizeTree + extraDaneX;
		this.p2l6y2 = p2l6y2 * sizeTree + extraDaneY;
		this.p2l6x3 = p2l6x3 * sizeTree + extraDaneX;
		this.p2l6y3 = p2l6y3 * sizeTree + extraDaneY;

		this.p2l3ax1 = p2l3ax1 * sizeTree + extraDaneX;
		this.p2l3ay1 = p2l3ay1 * sizeTree + extraDaneY;
		this.p2l3ax2 = p2l3ax2 * sizeTree + extraDaneX;
		this.p2l3ay2 = p2l3ay2 * sizeTree + extraDaneY;
		this.p2l3ax3 = p2l3ax3 * sizeTree + extraDaneX;
		this.p2l3ay3 = p2l3ay3 * sizeTree + extraDaneY;

		this.p2l3bx1 = p2l3bx1 * sizeTree + extraDaneX;
		this.p2l3by1 = p2l3by1 * sizeTree + extraDaneY;
		this.p2l3bx2 = p2l3bx2 * sizeTree + extraDaneX;
		this.p2l3by2 = p2l3by2 * sizeTree + extraDaneY;
		this.p2l3bx3 = p2l3bx3 * sizeTree + extraDaneX;
		this.p2l3by3 = p2l3by3 * sizeTree + extraDaneY;

		this.p2l4x1 = p2l4x1 * sizeTree + extraDaneX;
		this.p2l4y1 = p2l4y1 * sizeTree + extraDaneY;
		this.p2l4x2 = p2l4x2 * sizeTree + extraDaneX;
		this.p2l4y2 = p2l4y2 * sizeTree + extraDaneY;
		this.p2l4x3 = p2l4x3 * sizeTree + extraDaneX;
		this.p2l4y3 = p2l4y3 * sizeTree + extraDaneY;

		this.p2l5x1 = p2l5x1 * sizeTree + extraDaneX;
		this.p2l5y1 = p2l5y1 * sizeTree + extraDaneY;
		this.p2l5x2 = p2l5x2 * sizeTree + extraDaneX;
		this.p2l5y2 = p2l5y2 * sizeTree + extraDaneY;
		this.p2l5x3 = p2l5x3 * sizeTree + extraDaneX;
		this.p2l5y3 = p2l5y3 * sizeTree + extraDaneY;

		this.p2l7x1 = p2l7x1 * sizeTree + extraDaneX;
		this.p2l7y1 = p2l7y1 * sizeTree + extraDaneY;
		this.p2l7x2 = p2l7x2 * sizeTree + extraDaneX;
		this.p2l7y2 = p2l7y2 * sizeTree + extraDaneY;
		this.p2l7x3 = p2l7x3 * sizeTree + extraDaneX;
		this.p2l7y3 = p2l7y3 * sizeTree + extraDaneY;

		this.p2l8x1 = p2l8x1 * sizeTree + extraDaneX;
		this.p2l8y1 = p2l8y1 * sizeTree + extraDaneY;
		this.p2l8x2 = p2l8x2 * sizeTree + extraDaneX;
		this.p2l8y2 = p2l8y2 * sizeTree + extraDaneY;
		this.p2l8x3 = p2l8x3 * sizeTree + extraDaneX;
		this.p2l8y3 = p2l8y3 * sizeTree + extraDaneY;

		this.p2l14x1 = p2l14x1 * sizeTree + extraDaneX;
		this.p2l14y1 = p2l14y1 * sizeTree + extraDaneY;
		this.p2l14x2 = p2l14x2 * sizeTree + extraDaneX;
		this.p2l14y2 = p2l14y2 * sizeTree + extraDaneY;
		this.p2l14x3 = p2l14x3 * sizeTree + extraDaneX;
		this.p2l14y3 = p2l14y3 * sizeTree + extraDaneY;

		this.p2l15x1 = p2l15x1 * sizeTree + extraDaneX;
		this.p2l15y1 = p2l15y1 * sizeTree + extraDaneY;
		this.p2l15x2 = p2l15x2 * sizeTree + extraDaneX;
		this.p2l15y2 = p2l15y2 * sizeTree + extraDaneY;
		this.p2l15x3 = p2l15x3 * sizeTree + extraDaneX;
		this.p2l15y3 = p2l15y3 * sizeTree + extraDaneY;

		this.p2l17x1 = p2l17x1 * sizeTree + extraDaneX;
		this.p2l17y1 = p2l17y1 * sizeTree + extraDaneY;
		this.p2l17x2 = p2l17x2 * sizeTree + extraDaneX;
		this.p2l17y2 = p2l17y2 * sizeTree + extraDaneY;
		this.p2l17x3 = p2l17x3 * sizeTree + extraDaneX;
		this.p2l17y3 = p2l17y3 * sizeTree + extraDaneY;

		this.p2l16ax1 = p2l16ax1 * sizeTree + extraDaneX;
		this.p2l16ay1 = p2l16ay1 * sizeTree + extraDaneY;
		this.p2l16ax2 = p2l16ax2 * sizeTree + extraDaneX;
		this.p2l16ay2 = p2l16ay2 * sizeTree + extraDaneY;
		this.p2l16ax3 = p2l16ax3 * sizeTree + extraDaneX;
		this.p2l16ay3 = p2l16ay3 * sizeTree + extraDaneY;

		this.p2l16bx1 = p2l16bx1 * sizeTree + extraDaneX;
		this.p2l16by1 = p2l16by1 * sizeTree + extraDaneY;
		this.p2l16bx2 = p2l16bx2 * sizeTree + extraDaneX;
		this.p2l16by2 = p2l16by2 * sizeTree + extraDaneY;
		this.p2l16bx3 = p2l16bx3 * sizeTree + extraDaneX;
		this.p2l16by3 = p2l16by3 * sizeTree + extraDaneY;

		this.p2l12x1 = p2l12x1 * sizeTree + extraDaneX;
		this.p2l12y1 = p2l12y1 * sizeTree + extraDaneY;
		this.p2l12x2 = p2l12x2 * sizeTree + extraDaneX;
		this.p2l12y2 = p2l12y2 * sizeTree + extraDaneY;
		this.p2l12x3 = p2l12x3 * sizeTree + extraDaneX;
		this.p2l12y3 = p2l12y3 * sizeTree + extraDaneY;

		this.p2l13x1 = p2l13x1 * sizeTree + extraDaneX;
		this.p2l13y1 = p2l13y1 * sizeTree + extraDaneY;
		this.p2l13x2 = p2l13x2 * sizeTree + extraDaneX;
		this.p2l13y2 = p2l13y2 * sizeTree + extraDaneY;
		this.p2l13x3 = p2l13x3 * sizeTree + extraDaneX;
		this.p2l13y3 = p2l13y3 * sizeTree + extraDaneY;

		this.p2l10x1 = p2l10x1 * sizeTree + extraDaneX;
		this.p2l10y1 = p2l10y1 * sizeTree + extraDaneY;
		this.p2l10x2 = p2l10x2 * sizeTree + extraDaneX;
		this.p2l10y2 = p2l10y2 * sizeTree + extraDaneY;
		this.p2l10x3 = p2l10x3 * sizeTree + extraDaneX;
		this.p2l10y3 = p2l10y3 * sizeTree + extraDaneY;

		this.p2l11x1 = p2l11x1 * sizeTree + extraDaneX;
		this.p2l11y1 = p2l11y1 * sizeTree + extraDaneY;
		this.p2l11x2 = p2l11x2 * sizeTree + extraDaneX;
		this.p2l11y2 = p2l11y2 * sizeTree + extraDaneY;
		this.p2l11x3 = p2l11x3 * sizeTree + extraDaneX;
		this.p2l11y3 = p2l11y3 * sizeTree + extraDaneY;
		// ósma gałąź - end	

		// dziewiąta gałąź - gałąź czerwona 3 - start
		this.r3l1x1 = r3l1x1 * sizeTree + extraDaneX;
		this.r3l1y1 = r3l1y1 * sizeTree + extraDaneY;
		this.r3l1x2 = r3l1x2 * sizeTree + extraDaneX;
		this.r3l1y2 = r3l1y2 * sizeTree + extraDaneY;
		this.r3l1x3 = r3l1x3 * sizeTree + extraDaneX;
		this.r3l1y3 = r3l1y3 * sizeTree + extraDaneY;

		this.r3l2x1 = r3l2x1 * sizeTree + extraDaneX;
		this.r3l2y1 = r3l2y1 * sizeTree + extraDaneY;
		this.r3l2x2 = r3l2x2 * sizeTree + extraDaneX;
		this.r3l2y2 = r3l2y2 * sizeTree + extraDaneY;
		this.r3l2x3 = r3l2x3 * sizeTree + extraDaneX;
		this.r3l2y3 = r3l2y3 * sizeTree + extraDaneY;

		this.r3l17x1 = r3l17x1 * sizeTree + extraDaneX;
		this.r3l17y1 = r3l17y1 * sizeTree + extraDaneY;
		this.r3l17x2 = r3l17x2 * sizeTree + extraDaneX;
		this.r3l17y2 = r3l17y2 * sizeTree + extraDaneY;
		this.r3l17x3 = r3l17x3 * sizeTree + extraDaneX;
		this.r3l17y3 = r3l17y3 * sizeTree + extraDaneY;

		this.r3l16x1 = r3l16x1 * sizeTree + extraDaneX;
		this.r3l16y1 = r3l16y1 * sizeTree + extraDaneY;
		this.r3l16x2 = r3l16x2 * sizeTree + extraDaneX;
		this.r3l16y2 = r3l16y2 * sizeTree + extraDaneY;
		this.r3l16x3 = r3l16x3 * sizeTree + extraDaneX;
		this.r3l16y3 = r3l16y3 * sizeTree + extraDaneY;

		this.r3l3x1 = r3l3x1 * sizeTree + extraDaneX;
		this.r3l3y1 = r3l3y1 * sizeTree + extraDaneY;
		this.r3l3x2 = r3l3x2 * sizeTree + extraDaneX;
		this.r3l3y2 = r3l3y2 * sizeTree + extraDaneY;
		this.r3l3x3 = r3l3x3 * sizeTree + extraDaneX;
		this.r3l3y3 = r3l3y3 * sizeTree + extraDaneY;

		this.r3l7x1 = r3l7x1 * sizeTree + extraDaneX;
		this.r3l7y1 = r3l7y1 * sizeTree + extraDaneY;
		this.r3l7x2 = r3l7x2 * sizeTree + extraDaneX;
		this.r3l7y2 = r3l7y2 * sizeTree + extraDaneY;
		this.r3l7x3 = r3l7x3 * sizeTree + extraDaneX;
		this.r3l7y3 = r3l7y3 * sizeTree + extraDaneY;

		this.r3l8x1 = r3l8x1 * sizeTree + extraDaneX;
		this.r3l8y1 = r3l8y1 * sizeTree + extraDaneY;
		this.r3l8x2 = r3l8x2 * sizeTree + extraDaneX;
		this.r3l8y2 = r3l8y2 * sizeTree + extraDaneY;
		this.r3l8x3 = r3l8x3 * sizeTree + extraDaneX;
		this.r3l8y3 = r3l8y3 * sizeTree + extraDaneY;

		this.r3l9x1 = r3l9x1 * sizeTree + extraDaneX;
		this.r3l9y1 = r3l9y1 * sizeTree + extraDaneY;
		this.r3l9x2 = r3l9x2 * sizeTree + extraDaneX;
		this.r3l9y2 = r3l9y2 * sizeTree + extraDaneY;
		this.r3l9x3 = r3l9x3 * sizeTree + extraDaneX;
		this.r3l9y3 = r3l9y3 * sizeTree + extraDaneY;

		this.r3l10x1 = r3l10x1 * sizeTree + extraDaneX;
		this.r3l10y1 = r3l10y1 * sizeTree + extraDaneY;
		this.r3l10x2 = r3l10x2 * sizeTree + extraDaneX;
		this.r3l10y2 = r3l10y2 * sizeTree + extraDaneY;
		this.r3l10x3 = r3l10x3 * sizeTree + extraDaneX;
		this.r3l10y3 = r3l10y3 * sizeTree + extraDaneY;

		this.r3l11x1 = r3l11x1 * sizeTree + extraDaneX;
		this.r3l11y1 = r3l11y1 * sizeTree + extraDaneY;
		this.r3l11x2 = r3l11x2 * sizeTree + extraDaneX;
		this.r3l11y2 = r3l11y2 * sizeTree + extraDaneY;
		this.r3l11x3 = r3l11x3 * sizeTree + extraDaneX;
		this.r3l11y3 = r3l11y3 * sizeTree + extraDaneY;

		this.r3l12x1 = r3l12x1 * sizeTree + extraDaneX;
		this.r3l12y1 = r3l12y1 * sizeTree + extraDaneY;
		this.r3l12x2 = r3l12x2 * sizeTree + extraDaneX;
		this.r3l12y2 = r3l12y2 * sizeTree + extraDaneY;
		this.r3l12x3 = r3l12x3 * sizeTree + extraDaneX;
		this.r3l12y3 = r3l12y3 * sizeTree + extraDaneY;

		this.r3l15x1 = r3l15x1 * sizeTree + extraDaneX;
		this.r3l15y1 = r3l15y1 * sizeTree + extraDaneY;
		this.r3l15x2 = r3l15x2 * sizeTree + extraDaneX;
		this.r3l15y2 = r3l15y2 * sizeTree + extraDaneY;
		this.r3l15x3 = r3l15x3 * sizeTree + extraDaneX;
		this.r3l15y3 = r3l15y3 * sizeTree + extraDaneY;

		this.r3l13x1 = r3l13x1 * sizeTree + extraDaneX;
		this.r3l13y1 = r3l13y1 * sizeTree + extraDaneY;
		this.r3l13x2 = r3l13x2 * sizeTree + extraDaneX;
		this.r3l13y2 = r3l13y2 * sizeTree + extraDaneY;
		this.r3l13x3 = r3l13x3 * sizeTree + extraDaneX;
		this.r3l13y3 = r3l13y3 * sizeTree + extraDaneY;

		this.r3l14x1 = r3l14x1 * sizeTree + extraDaneX;
		this.r3l14y1 = r3l14y1 * sizeTree + extraDaneY;
		this.r3l14x2 = r3l14x2 * sizeTree + extraDaneX;
		this.r3l14y2 = r3l14y2 * sizeTree + extraDaneY;
		this.r3l14x3 = r3l14x3 * sizeTree + extraDaneX;
		this.r3l14y3 = r3l14y3 * sizeTree + extraDaneY;

		this.r3l6x1 = r3l6x1 * sizeTree + extraDaneX;
		this.r3l6y1 = r3l6y1 * sizeTree + extraDaneY;
		this.r3l6x2 = r3l6x2 * sizeTree + extraDaneX;
		this.r3l6y2 = r3l6y2 * sizeTree + extraDaneY;
		this.r3l6x3 = r3l6x3 * sizeTree + extraDaneX;
		this.r3l6y3 = r3l6y3 * sizeTree + extraDaneY;

		this.r3l5x1 = r3l5x1 * sizeTree + extraDaneX;
		this.r3l5y1 = r3l5y1 * sizeTree + extraDaneY;
		this.r3l5x2 = r3l5x2 * sizeTree + extraDaneX;
		this.r3l5y2 = r3l5y2 * sizeTree + extraDaneY;
		this.r3l5x3 = r3l5x3 * sizeTree + extraDaneX;
		this.r3l5y3 = r3l5y3 * sizeTree + extraDaneY;

		this.r3l4x1 = r3l4x1 * sizeTree + extraDaneX;
		this.r3l4y1 = r3l4y1 * sizeTree + extraDaneY;
		this.r3l4x2 = r3l4x2 * sizeTree + extraDaneX;
		this.r3l4y2 = r3l4y2 * sizeTree + extraDaneY;
		this.r3l4x3 = r3l4x3 * sizeTree + extraDaneX;
		this.r3l4y3 = r3l4y3 * sizeTree + extraDaneY;
		// dziewiąta gałąź - end

		// gałąź dziesiąta - na dole przy pniu drzewa - start
		this.d1l12x1 = d1l12x1 * sizeTree + extraDaneX;
		this.d1l12y1 = d1l12y1 * sizeTree + extraDaneY;
		this.d1l12x2 = d1l12x2 * sizeTree + extraDaneX;
		this.d1l12y2 = d1l12y2 * sizeTree + extraDaneY;
		this.d1l12x3 = d1l12x3 * sizeTree + extraDaneX;
		this.d1l12y3 = d1l12y3 * sizeTree + extraDaneY;

		this.d1l1x1 = d1l1x1 * sizeTree + extraDaneX;
		this.d1l1y1 = d1l1y1 * sizeTree + extraDaneY;
		this.d1l1x2 = d1l1x2 * sizeTree + extraDaneX;
		this.d1l1y2 = d1l1y2 * sizeTree + extraDaneY;
		this.d1l1x3 = d1l1x3 * sizeTree + extraDaneX;
		this.d1l1y3 = d1l1y3 * sizeTree + extraDaneY;

		this.d1l2x1 = d1l2x1 * sizeTree + extraDaneX;
		this.d1l2y1 = d1l2y1 * sizeTree + extraDaneY;
		this.d1l2x2 = d1l2x2 * sizeTree + extraDaneX;
		this.d1l2y2 = d1l2y2 * sizeTree + extraDaneY;
		this.d1l2x3 = d1l2x3 * sizeTree + extraDaneX;
		this.d1l2y3 = d1l2y3 * sizeTree + extraDaneY;

		this.d1l10x1 = d1l10x1 * sizeTree + extraDaneX;
		this.d1l10y1 = d1l10y1 * sizeTree + extraDaneY;
		this.d1l10x2 = d1l10x2 * sizeTree + extraDaneX;
		this.d1l10y2 = d1l10y2 * sizeTree + extraDaneY;
		this.d1l10x3 = d1l10x3 * sizeTree + extraDaneX;
		this.d1l10y3 = d1l10y3 * sizeTree + extraDaneY;

		this.d1l11x1 = d1l11x1 * sizeTree + extraDaneX;
		this.d1l11y1 = d1l11y1 * sizeTree + extraDaneY;
		this.d1l11x2 = d1l11x2 * sizeTree + extraDaneX;
		this.d1l11y2 = d1l11y2 * sizeTree + extraDaneY;
		this.d1l11x3 = d1l11x3 * sizeTree + extraDaneX;
		this.d1l11y3 = d1l11y3 * sizeTree + extraDaneY;

		this.d1l8x1 = d1l8x1 * sizeTree + extraDaneX;
		this.d1l8y1 = d1l8y1 * sizeTree + extraDaneY;
		this.d1l8x2 = d1l8x2 * sizeTree + extraDaneX;
		this.d1l8y2 = d1l8y2 * sizeTree + extraDaneY;
		this.d1l8x3 = d1l8x3 * sizeTree + extraDaneX;
		this.d1l8y3 = d1l8y3 * sizeTree + extraDaneY;

		this.d1l7x1 = d1l7x1 * sizeTree + extraDaneX;
		this.d1l7y1 = d1l7y1 * sizeTree + extraDaneY;
		this.d1l7x2 = d1l7x2 * sizeTree + extraDaneX;
		this.d1l7y2 = d1l7y2 * sizeTree + extraDaneY;
		this.d1l7x3 = d1l7x3 * sizeTree + extraDaneX;
		this.d1l7y3 = d1l7y3 * sizeTree + extraDaneY;

		this.d1l6x1 = d1l6x1 * sizeTree + extraDaneX;
		this.d1l6y1 = d1l6y1 * sizeTree + extraDaneY;
		this.d1l6x2 = d1l6x2 * sizeTree + extraDaneX;
		this.d1l6y2 = d1l6y2 * sizeTree + extraDaneY;
		this.d1l6x3 = d1l6x3 * sizeTree + extraDaneX;
		this.d1l6y3 = d1l6y3 * sizeTree + extraDaneY;

		this.d1l3x1 = d1l3x1 * sizeTree + extraDaneX;
		this.d1l3y1 = d1l3y1 * sizeTree + extraDaneY;
		this.d1l3x2 = d1l3x2 * sizeTree + extraDaneX;
		this.d1l3y2 = d1l3y2 * sizeTree + extraDaneY;
		this.d1l3x3 = d1l3x3 * sizeTree + extraDaneX;
		this.d1l3y3 = d1l3y3 * sizeTree + extraDaneY;

		this.d1l4x1 = d1l4x1 * sizeTree + extraDaneX;
		this.d1l4y1 = d1l4y1 * sizeTree + extraDaneY;
		this.d1l4x2 = d1l4x2 * sizeTree + extraDaneX;
		this.d1l4y2 = d1l4y2 * sizeTree + extraDaneY;
		this.d1l4x3 = d1l4x3 * sizeTree + extraDaneX;
		this.d1l4y3 = d1l4y3 * sizeTree + extraDaneY;

		this.d1l5x1 = d1l5x1 * sizeTree + extraDaneX;
		this.d1l5y1 = d1l5y1 * sizeTree + extraDaneY;
		this.d1l5x2 = d1l5x2 * sizeTree + extraDaneX;
		this.d1l5y2 = d1l5y2 * sizeTree + extraDaneY;
		this.d1l5x3 = d1l5x3 * sizeTree + extraDaneX;
		this.d1l5y3 = d1l5y3 * sizeTree + extraDaneY;
		// gałąź dziesiąta - end

		// extra gałąź - strat	
		this.exl9x1 = exl9x1 * sizeTree + extraDaneX;
		this.exl9y1 = exl9y1 * sizeTree + extraDaneY;
		this.exl9x2 = exl9x2 * sizeTree + extraDaneX;
		this.exl9y2 = exl9y2 * sizeTree + extraDaneY;
		this.exl9x3 = exl9x3 * sizeTree + extraDaneX;
		this.exl9y3 = exl9y3 * sizeTree + extraDaneY;

		this.exl10x1 = exl10x1 * sizeTree + extraDaneX;
		this.exl10y1 = exl10y1 * sizeTree + extraDaneY;
		this.exl10x2 = exl10x2 * sizeTree + extraDaneX;
		this.exl10y2 = exl10y2 * sizeTree + extraDaneY;
		this.exl10x3 = exl10x3 * sizeTree + extraDaneX;
		this.exl10y3 = exl10y3 * sizeTree + extraDaneY;

		this.exl11x1 = exl11x1 * sizeTree + extraDaneX;
		this.exl11y1 = exl11y1 * sizeTree + extraDaneY;
		this.exl11x2 = exl11x2 * sizeTree + extraDaneX;
		this.exl11y2 = exl11y2 * sizeTree + extraDaneY;
		this.exl11x3 = exl11x3 * sizeTree + extraDaneX;
		this.exl11y3 = exl11y3 * sizeTree + extraDaneY;

		this.exl4x1 = exl4x1 * sizeTree + extraDaneX;
		this.exl4y1 = exl4y1 * sizeTree + extraDaneY;
		this.exl4x2 = exl4x2 * sizeTree + extraDaneX;
		this.exl4y2 = exl4y2 * sizeTree + extraDaneY;
		this.exl4x3 = exl4x3 * sizeTree + extraDaneX;
		this.exl4y3 = exl4y3 * sizeTree + extraDaneY;

		this.exl6x1 = exl6x1 * sizeTree + extraDaneX;
		this.exl6y1 = exl6y1 * sizeTree + extraDaneY;
		this.exl6x2 = exl6x2 * sizeTree + extraDaneX;
		this.exl6y2 = exl6y2 * sizeTree + extraDaneY;
		this.exl6x3 = exl6x3 * sizeTree + extraDaneX;
		this.exl6y3 = exl6y3 * sizeTree + extraDaneY;

		this.exl5x1 = exl5x1 * sizeTree + extraDaneX;
		this.exl5y1 = exl5y1 * sizeTree + extraDaneY;
		this.exl5x2 = exl5x2 * sizeTree + extraDaneX;
		this.exl5y2 = exl5y2 * sizeTree + extraDaneY;
		this.exl5x3 = exl5x3 * sizeTree + extraDaneX;
		this.exl5y3 = exl5y3 * sizeTree + extraDaneY;

		this.exl12x1 = exl12x1 * sizeTree + extraDaneX;
		this.exl12y1 = exl12y1 * sizeTree + extraDaneY;
		this.exl12x2 = exl12x2 * sizeTree + extraDaneX;
		this.exl12y2 = exl12y2 * sizeTree + extraDaneY;
		this.exl12x3 = exl12x3 * sizeTree + extraDaneX;
		this.exl12y3 = exl12y3 * sizeTree + extraDaneY;

		this.exl11ax1 = exl11ax1 * sizeTree + extraDaneX;
		this.exl11ay1 = exl11ay1 * sizeTree + extraDaneY;
		this.exl11ax2 = exl11ax2 * sizeTree + extraDaneX;
		this.exl11ay2 = exl11ay2 * sizeTree + extraDaneY;
		this.exl11ax3 = exl11ax3 * sizeTree + extraDaneX;
		this.exl11ay3 = exl11ay3 * sizeTree + extraDaneY;

		this.exl1x1 = exl1x1 * sizeTree + extraDaneX;
		this.exl1y1 = exl1y1 * sizeTree + extraDaneY;
		this.exl1x2 = exl1x2 * sizeTree + extraDaneX;
		this.exl1y2 = exl1y2 * sizeTree + extraDaneY;
		this.exl1x3 = exl1x3 * sizeTree + extraDaneX;
		this.exl1y3 = exl1y3 * sizeTree + extraDaneY;

		this.exl2x1 = exl2x1 * sizeTree + extraDaneX;
		this.exl2y1 = exl2y1 * sizeTree + extraDaneY;
		this.exl2x2 = exl2x2 * sizeTree + extraDaneX;
		this.exl2y2 = exl2y2 * sizeTree + extraDaneY;
		this.exl2x3 = exl2x3 * sizeTree + extraDaneX;
		this.exl2y3 = exl2y3 * sizeTree + extraDaneY;
		this.exl2x1 = exl2x1 * sizeTree + extraDaneX;
		this.exl2y1 = exl2y1 * sizeTree + extraDaneY;
		this.exl2x2 = exl2x2 * sizeTree + extraDaneX;
		this.exl2y2 = exl2y2 * sizeTree + extraDaneY;
		this.exl2x3 = exl2x3 * sizeTree + extraDaneX;
		this.exl2y3 = exl2y3 * sizeTree + extraDaneY;

		this.exl3x1 = exl3x1 * sizeTree + extraDaneX;
		this.exl3y1 = exl3y1 * sizeTree + extraDaneY;
		this.exl3x2 = exl3x2 * sizeTree + extraDaneX;
		this.exl3y2 = exl3y2 * sizeTree + extraDaneY;
		this.exl3x3 = exl3x3 * sizeTree + extraDaneX;
		this.exl3y3 = exl3y3 * sizeTree + extraDaneY;
		this.exl3x1 = exl3x1 * sizeTree + extraDaneX;
		this.exl3y1 = exl3y1 * sizeTree + extraDaneY;
		this.exl3x2 = exl3x2 * sizeTree + extraDaneX;
		this.exl3y2 = exl3y2 * sizeTree + extraDaneY;
		this.exl3x3 = exl3x3 * sizeTree + extraDaneX;
		this.exl3y3 = exl3y3 * sizeTree + extraDaneY;

		this.exl8x1 = exl8x1 * sizeTree + extraDaneX;
		this.exl8y1 = exl8y1 * sizeTree + extraDaneY;
		this.exl8x2 = exl8x2 * sizeTree + extraDaneX;
		this.exl8y2 = exl8y2 * sizeTree + extraDaneY;
		this.exl8x3 = exl8x3 * sizeTree + extraDaneX;
		this.exl8y3 = exl8y3 * sizeTree + extraDaneY;
		this.exl8x1 = exl8x1 * sizeTree + extraDaneX;
		this.exl8y1 = exl8y1 * sizeTree + extraDaneY;
		this.exl8x2 = exl8x2 * sizeTree + extraDaneX;
		this.exl8y2 = exl8y2 * sizeTree + extraDaneY;
		this.exl8x3 = exl8x3 * sizeTree + extraDaneX;
		this.exl8y3 = exl8y3 * sizeTree + extraDaneY;

		this.exl7x1 = exl7x1 * sizeTree + extraDaneX;
		this.exl7y1 = exl7y1 * sizeTree + extraDaneY;
		this.exl7x2 = exl7x2 * sizeTree + extraDaneX;
		this.exl7y2 = exl7y2 * sizeTree + extraDaneY;
		this.exl7x3 = exl7x3 * sizeTree + extraDaneX;
		this.exl7y3 = exl7y3 * sizeTree + extraDaneY;
		this.exl7x1 = exl7x1 * sizeTree + extraDaneX;
		this.exl7y1 = exl7y1 * sizeTree + extraDaneY;
		this.exl7x2 = exl7x2 * sizeTree + extraDaneX;
		this.exl7y2 = exl7y2 * sizeTree + extraDaneY;
		this.exl7x3 = exl7x3 * sizeTree + extraDaneX;
		this.exl7y3 = exl7y3 * sizeTree + extraDaneY;

		this.exl13x1 = exl13x1 * sizeTree + extraDaneX;
		this.exl13y1 = exl13y1 * sizeTree + extraDaneY;
		this.exl13x2 = exl13x2 * sizeTree + extraDaneX;
		this.exl13y2 = exl13y2 * sizeTree + extraDaneY;
		this.exl13x3 = exl13x3 * sizeTree + extraDaneX;
		this.exl13y3 = exl13y3 * sizeTree + extraDaneY;
		this.exl13x1 = exl13x1 * sizeTree + extraDaneX;
		this.exl13y1 = exl13y1 * sizeTree + extraDaneY;
		this.exl13x2 = exl13x2 * sizeTree + extraDaneX;
		this.exl13y2 = exl13y2 * sizeTree + extraDaneY;
		this.exl13x3 = exl13x3 * sizeTree + extraDaneX;
		this.exl13y3 = exl13y3 * sizeTree + extraDaneY;
		// extra gałąź - end		
	}


	showTreeNo3Line0() {
		let sizeTree = this.sizeTreeNo3Line0;

		// extraDaneX/ extraDaneY dodatkowe dane (jakby w przyszłości coś chciano zmienić);
		let extraDaneX = 0;
		let extraDaneY = 0;

		// nie ma konturów drzewa - dla pnia drzewa
		noStroke(0);
		// kolor drzewa
		fill(treeColor1);

		// pień drzewa numer 3 - liczone od lewy, dolny róg pnia drzewa - wokół tych punktów nie tworzymy liści - start
		beginShape();
		vertex(this.m3l1x1 * sizeTree + extraDaneX,
			this.m3l1y1 * sizeTree + extraDaneY);

		bezierVertex(this.m3l1x1 * sizeTree + extraDaneX,
			this.m3l1y1 * sizeTree + extraDaneY,
			this.m3l1x2 * sizeTree + extraDaneX,
			this.m3l1y2 * sizeTree + extraDaneY,
			this.m3l1x3 * sizeTree + extraDaneX,
			this.m3l1y3 * sizeTree + extraDaneY); // m3l1 - linia 1

		bezierVertex(this.m3l2x1 * sizeTree + extraDaneX,
			this.m3l2y1 * sizeTree + extraDaneY,
			this.m3l2x2 * sizeTree + extraDaneX,
			this.m3l2y2 * sizeTree + extraDaneY,
			this.m3l2x3 * sizeTree + extraDaneX,
			this.m3l2y3 * sizeTree + extraDaneY); // m3l2 - linia 2

		bezierVertex(this.m3l3x1 * sizeTree + extraDaneX,
			this.m3l3y1 * sizeTree + extraDaneY,
			this.m3l3x2 * sizeTree + extraDaneX,
			this.m3l3y2 * sizeTree + extraDaneY,
			this.m3l3x3 * sizeTree + extraDaneX,
			this.m3l3y3 * sizeTree + extraDaneY); // m3l3 - linia 3

		bezierVertex(this.m3l4x1 * sizeTree + extraDaneX,
			this.m3l4y1 * sizeTree + extraDaneY,
			this.m3l4x2 * sizeTree + extraDaneX,
			this.m3l4y2 * sizeTree + extraDaneY,
			this.m3l4x3 * sizeTree + extraDaneX,
			this.m3l4y3 * sizeTree + extraDaneY); // m3l4 - linia 4);	// m3l4 - linia 4

		bezierVertex(this.m3l5x1 * sizeTree + extraDaneX,
			this.m3l5y1 * sizeTree + extraDaneY,
			this.m3l5x2 * sizeTree + extraDaneX,
			this.m3l5y2 * sizeTree + extraDaneY,
			this.m3l5x3 * sizeTree + extraDaneX,
			this.m3l5y3 * sizeTree + extraDaneY); // m3l5 - linia 5

		bezierVertex(this.m3l6x1 * sizeTree + extraDaneX,
			this.m3l6y1 * sizeTree + extraDaneY,
			this.m3l6x2 * sizeTree + extraDaneX,
			this.m3l6y2 * sizeTree + extraDaneY,
			this.m3l6x3 * sizeTree + extraDaneX,
			this.m3l6y3 * sizeTree + extraDaneY); // m3l6 - linia 6

		bezierVertex(this.m3l7x1 * sizeTree + extraDaneX,
			this.m3l7y1 * sizeTree + extraDaneY,
			this.m3l7x2 * sizeTree + extraDaneX,
			this.m3l7y2 * sizeTree + extraDaneY,
			this.m3l7x3 * sizeTree + extraDaneX,
			this.m3l7y3 * sizeTree + extraDaneY); // m3l7 - linia 7

		bezierVertex(this.m3l8x1 * sizeTree + extraDaneX,
			this.m3l8y1 * sizeTree + extraDaneY,
			this.m3l8x2 * sizeTree + extraDaneX,
			this.m3l8y2 * sizeTree + extraDaneY,
			this.m3l8x3 * sizeTree + extraDaneX,
			this.m3l8y3 * sizeTree + extraDaneY); // m3l8 - linia 8

		bezierVertex(this.m3l9x1 * sizeTree + extraDaneX,
			this.m3l9y1 * sizeTree + extraDaneY,
			this.m3l9x2 * sizeTree + extraDaneX,
			this.m3l9y2 * sizeTree + extraDaneY,
			this.m3l9x3 * sizeTree + extraDaneX,
			this.m3l9y3 * sizeTree + extraDaneY); // m3l9 - linia 9

		bezierVertex(this.m3l10x1 * sizeTree + extraDaneX,
			this.m3l10y1 * sizeTree + extraDaneY,
			this.m3l10x2 * sizeTree + extraDaneX,
			this.m3l10y2 * sizeTree + extraDaneY,
			this.m3l10x3 * sizeTree + extraDaneX,
			this.m3l10y3 * sizeTree + extraDaneY); // m3l10 - linia 10

		bezierVertex(this.m3l11x1 * sizeTree + extraDaneX,
			this.m3l11y1 * sizeTree + extraDaneY,
			this.m3l11x2 * sizeTree + extraDaneX,
			this.m3l11y2 * sizeTree + extraDaneY,
			this.m3l11x3 * sizeTree + extraDaneX,
			this.m3l11y3 * sizeTree + extraDaneY); // m3l11 - linia 11

		bezierVertex(this.m3l12x1 * sizeTree + extraDaneX,
			this.m3l12y1 * sizeTree + extraDaneY,
			this.m3l12x2 * sizeTree + extraDaneX,
			this.m3l12y2 * sizeTree + extraDaneY,
			this.m3l12x3 * sizeTree + extraDaneX,
			this.m3l12y3 * sizeTree + extraDaneY); // m3l12 - linia 12

		bezierVertex(this.m3l13x1 * sizeTree + extraDaneX,
			this.m3l13y1 * sizeTree + extraDaneY,
			this.m3l13x2 * sizeTree + extraDaneX,
			this.m3l13y2 * sizeTree + extraDaneY,
			this.m3l13x3 * sizeTree + extraDaneX,
			this.m3l13y3 * sizeTree + extraDaneY); // m3l13 - linia 13

		bezierVertex(this.m3l14x1 * sizeTree + extraDaneX,
			this.m3l14y1 * sizeTree + extraDaneY,
			this.m3l14x2 * sizeTree + extraDaneX,
			this.m3l14y2 * sizeTree + extraDaneY,
			this.m3l14x3 * sizeTree + extraDaneX,
			this.m3l14y3 * sizeTree + extraDaneY); // m3l14 - linia 14

		bezierVertex(this.m3l15x1 * sizeTree + extraDaneX,
			this.m3l15y1 * sizeTree + extraDaneY,
			this.m3l15x2 * sizeTree + extraDaneX,
			this.m3l15y2 * sizeTree + extraDaneY,
			this.m3l15x3 * sizeTree + extraDaneX,
			this.m3l15y3 * sizeTree + extraDaneY); // m3l15 - linia 15

		bezierVertex(this.m3l16x1 * sizeTree + extraDaneX,
			this.m3l16y1 * sizeTree + extraDaneY,
			this.m3l16x2 * sizeTree + extraDaneX,
			this.m3l16y2 * sizeTree + extraDaneY,
			this.m3l16x3 * sizeTree + extraDaneX,
			this.m3l16y3 * sizeTree + extraDaneY); // m3l16 - linia 16

		bezierVertex(this.m3l17x1 * sizeTree + extraDaneX,
			this.m3l17y1 * sizeTree + extraDaneY,
			this.m3l17x2 * sizeTree + extraDaneX,
			this.m3l17y2 * sizeTree + extraDaneY,
			this.m3l17x3 * sizeTree + extraDaneX,
			this.m3l17y3 * sizeTree + extraDaneY); // m3l17 - linia 17

		bezierVertex(this.m3l18x1 * sizeTree + extraDaneX,
			this.m3l18y1 * sizeTree + extraDaneY,
			this.m3l18x2 * sizeTree + extraDaneX,
			this.m3l18y2 * sizeTree + extraDaneY,
			this.m3l18x3 * sizeTree + extraDaneX,
			this.m3l18y3 * sizeTree + extraDaneY); // m3l18 - linia 18

		bezierVertex(this.m3l19x1 * sizeTree + extraDaneX,
			this.m3l19y1 * sizeTree + extraDaneY,
			this.m3l19x2 * sizeTree + extraDaneX,
			this.m3l19y2 * sizeTree + extraDaneY,
			this.m3l19x3 * sizeTree + extraDaneX,
			this.m3l19y3 * sizeTree + extraDaneY); // m3l19 - linia 19

		bezierVertex(this.m3l20x1 * sizeTree + extraDaneX,
			this.m3l20y1 * sizeTree + extraDaneY,
			this.m3l20x2 * sizeTree + extraDaneX,
			this.m3l20y2 * sizeTree + extraDaneY,
			this.m3l20x3 * sizeTree + extraDaneX,
			this.m3l20y3 * sizeTree + extraDaneY); // m3l20 - linia 20

		bezierVertex(this.m3l21x1 * sizeTree + extraDaneX,
			this.m3l21y1 * sizeTree + extraDaneY,
			this.m3l21x2 * sizeTree + extraDaneX,
			this.m3l21y2 * sizeTree + extraDaneY,
			this.m3l21x3 * sizeTree + extraDaneX,
			this.m3l21y3 * sizeTree + extraDaneY); // m3l21 - linia 21
		endShape();
		// pień drzewa numer - end


		strokeWeight(strokeWeightTreeNo3Line0);
		// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
		stroke(treeColor1);
		//		stroke(255,0,0);	
		noFill();
		beginShape();
		vertex(this.r1l1x1 * sizeTree + extraDaneX,
			this.r1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l1x1 * sizeTree + extraDaneX,
			this.r1l1y1 * sizeTree + extraDaneY,
			this.r1l1x2 * sizeTree + extraDaneX,
			this.r1l1y2 * sizeTree + extraDaneY,
			this.r1l1x3 * sizeTree + extraDaneX,
			this.r1l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		endShape();
		beginShape();
		vertex(this.r1l7x1 * sizeTree + extraDaneX,
			this.r1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l7x1 * sizeTree + extraDaneX,
			this.r1l7y1 * sizeTree + extraDaneY,
			this.r1l7x2 * sizeTree + extraDaneX,
			this.r1l7y2 * sizeTree + extraDaneY,
			this.r1l7x3 * sizeTree + extraDaneX,
			this.r1l7y3 * sizeTree + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.r1l28x1 * sizeTree + extraDaneX,
			this.r1l28y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l28x1 * sizeTree + extraDaneX,
			this.r1l28y1 * sizeTree + extraDaneY,
			this.r1l28x2 * sizeTree + extraDaneX,
			this.r1l28y2 * sizeTree + extraDaneY,
			this.r1l28x3 * sizeTree + extraDaneX,
			this.r1l28y3 * sizeTree + extraDaneY); //linia 28
		endShape();

		beginShape();
		vertex(this.r1l29x1 * sizeTree + extraDaneX,
			this.r1l29y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l29x1 * sizeTree + extraDaneX,
			this.r1l29y1 * sizeTree + extraDaneY,
			this.r1l29x2 * sizeTree + extraDaneX,
			this.r1l29y2 * sizeTree + extraDaneY,
			this.r1l29x3 * sizeTree + extraDaneX,
			this.r1l29y3 * sizeTree + extraDaneY); //linia 29
		endShape();

		beginShape();
		vertex(this.r1l30x1 * sizeTree + extraDaneX,
			this.r1l30y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l30x1 * sizeTree + extraDaneX,
			this.r1l30y1 * sizeTree + extraDaneY,
			this.r1l30x2 * sizeTree + extraDaneX,
			this.r1l30y2 * sizeTree + extraDaneY,
			this.r1l30x3 * sizeTree + extraDaneX,
			this.r1l30y3 * sizeTree + extraDaneY); //linia 30
		endShape();

		beginShape();
		vertex(this.r1l2x1 * sizeTree + extraDaneX,
			this.r1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l2x1 * sizeTree + extraDaneX,
			this.r1l2y1 * sizeTree + extraDaneY,
			this.r1l2x2 * sizeTree + extraDaneX,
			this.r1l2y2 * sizeTree + extraDaneY,
			this.r1l2x3 * sizeTree + extraDaneX,
			this.r1l2y3 * sizeTree + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.r1l8x1 * sizeTree + extraDaneX,
			this.r1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l8x1 * sizeTree + extraDaneX,
			this.r1l8y1 * sizeTree + extraDaneY,
			this.r1l8x2 * sizeTree + extraDaneX,
			this.r1l8y2 * sizeTree + extraDaneY,
			this.r1l8x3 * sizeTree + extraDaneX,
			this.r1l8y3 * sizeTree + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.r1l2ax1 * sizeTree + extraDaneX,
			this.r1l2ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l2ax1 * sizeTree + extraDaneX,
			this.r1l2ay1 * sizeTree + extraDaneY,
			this.r1l2ax2 * sizeTree + extraDaneX,
			this.r1l2ay2 * sizeTree + extraDaneY,
			this.r1l2ax3 * sizeTree + extraDaneX,
			this.r1l2ay3 * sizeTree + extraDaneY); //linia 2a
		endShape();

		beginShape();
		vertex(this.r1l3x1 * sizeTree + extraDaneX,
			this.r1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l3x1 * sizeTree + extraDaneX,
			this.r1l3y1 * sizeTree + extraDaneY,
			this.r1l3x2 * sizeTree + extraDaneX,
			this.r1l3y2 * sizeTree + extraDaneY,
			this.r1l3x3 * sizeTree + extraDaneX,
			this.r1l3y3 * sizeTree + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.r1l4x1 * sizeTree + extraDaneX,
			this.r1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l4x1 * sizeTree + extraDaneX,
			this.r1l4y1 * sizeTree + extraDaneY,
			this.r1l4x2 * sizeTree + extraDaneX,
			this.r1l4y2 * sizeTree + extraDaneY,
			this.r1l4x3 * sizeTree + extraDaneX,
			this.r1l4y3 * sizeTree + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.r1l5x1 * sizeTree + extraDaneX,
			this.r1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l5x1 * sizeTree + extraDaneX,
			this.r1l5y1 * sizeTree + extraDaneY,
			this.r1l5x2 * sizeTree + extraDaneX,
			this.r1l5y2 * sizeTree + extraDaneY,
			this.r1l5x3 * sizeTree + extraDaneX,
			this.r1l5y3 * sizeTree + extraDaneY); //linia 5
		endShape();

		beginShape();
		vertex(this.r1l6x1 * sizeTree + extraDaneX,
			this.r1l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l6x1 * sizeTree + extraDaneX,
			this.r1l6y1 * sizeTree + extraDaneY,
			this.r1l6x2 * sizeTree + extraDaneX,
			this.r1l6y2 * sizeTree + extraDaneY,
			this.r1l6x3 * sizeTree + extraDaneX,
			this.r1l6y3 * sizeTree + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.r1l9x1 * sizeTree + extraDaneX,
			this.r1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l9x1 * sizeTree + extraDaneX,
			this.r1l9y1 * sizeTree + extraDaneY,
			this.r1l9x2 * sizeTree + extraDaneX,
			this.r1l9y2 * sizeTree + extraDaneY,
			this.r1l9x3 * sizeTree + extraDaneX,
			this.r1l9y3 * sizeTree + extraDaneY); //linia 9
		endShape();

		beginShape();
		vertex(this.r1l10x1 * sizeTree + extraDaneX,
			this.r1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l10x1 * sizeTree + extraDaneX,
			this.r1l10y1 * sizeTree + extraDaneY,
			this.r1l10x2 * sizeTree + extraDaneX,
			this.r1l10y2 * sizeTree + extraDaneY,
			this.r1l10x3 * sizeTree + extraDaneX,
			this.r1l10y3 * sizeTree + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.r1l11x1 * sizeTree + extraDaneX,
			this.r1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l11x1 * sizeTree + extraDaneX,
			this.r1l11y1 * sizeTree + extraDaneY,
			this.r1l11x2 * sizeTree + extraDaneX,
			this.r1l11y2 * sizeTree + extraDaneY,
			this.r1l11x3 * sizeTree + extraDaneX,
			this.r1l11y3 * sizeTree + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.r1l14x1 * sizeTree + extraDaneX,
			this.r1l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l14x1 * sizeTree + extraDaneX,
			this.r1l14y1 * sizeTree + extraDaneY,
			this.r1l14x2 * sizeTree + extraDaneX,
			this.r1l14y2 * sizeTree + extraDaneY,
			this.r1l14x3 * sizeTree + extraDaneX,
			this.r1l14y3 * sizeTree + extraDaneY); //linia 14
		endShape();

		beginShape();
		vertex(this.r1l13x1 * sizeTree + extraDaneX,
			this.r1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l13x1 * sizeTree + extraDaneX,
			this.r1l13y1 * sizeTree + extraDaneY,
			this.r1l13x2 * sizeTree + extraDaneX,
			this.r1l13y2 * sizeTree + extraDaneY,
			this.r1l13x3 * sizeTree + extraDaneX,
			this.r1l13y3 * sizeTree + extraDaneY); //linia 13
		endShape();

		beginShape();
		vertex(this.r1l12x1 * sizeTree + extraDaneX,
			this.r1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l12x1 * sizeTree + extraDaneX,
			this.r1l12y1 * sizeTree + extraDaneY,
			this.r1l12x2 * sizeTree + extraDaneX,
			this.r1l12y2 * sizeTree + extraDaneY,
			this.r1l12x3 * sizeTree + extraDaneX,
			this.r1l12y3 * sizeTree + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.r1l15x1 * sizeTree + extraDaneX,
			this.r1l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l15x1 * sizeTree + extraDaneX,
			this.r1l15y1 * sizeTree + extraDaneY,
			this.r1l15x2 * sizeTree + extraDaneX,
			this.r1l15y2 * sizeTree + extraDaneY,
			this.r1l15x3 * sizeTree + extraDaneX,
			this.r1l15y3 * sizeTree + extraDaneY); //linia 15
		endShape();

		beginShape();
		vertex(this.r1l17x1 * sizeTree + extraDaneX,
			this.r1l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l17x1 * sizeTree + extraDaneX,
			this.r1l17y1 * sizeTree + extraDaneY,
			this.r1l17x2 * sizeTree + extraDaneX,
			this.r1l17y2 * sizeTree + extraDaneY,
			this.r1l17x3 * sizeTree + extraDaneX,
			this.r1l17y3 * sizeTree + extraDaneY); //linia 17
		endShape();

		beginShape();
		vertex(this.r1l19x1 * sizeTree + extraDaneX,
			this.r1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l19x1 * sizeTree + extraDaneX,
			this.r1l19y1 * sizeTree + extraDaneY,
			this.r1l19x2 * sizeTree + extraDaneX,
			this.r1l19y2 * sizeTree + extraDaneY,
			this.r1l19x3 * sizeTree + extraDaneX,
			this.r1l19y3 * sizeTree + extraDaneY); //linia 19
		endShape();

		beginShape();
		vertex(this.r1l18x1 * sizeTree + extraDaneX,
			this.r1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l18x1 * sizeTree + extraDaneX,
			this.r1l18y1 * sizeTree + extraDaneY,
			this.r1l18x2 * sizeTree + extraDaneX,
			this.r1l18y2 * sizeTree + extraDaneY,
			this.r1l18x3 * sizeTree + extraDaneX,
			this.r1l18y3 * sizeTree + extraDaneY); //linia 18
		endShape();

		beginShape();
		vertex(this.r1l17ax1 * sizeTree + extraDaneX,
			this.r1l17ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l17ax1 * sizeTree + extraDaneX,
			this.r1l17ay1 * sizeTree + extraDaneY,
			this.r1l17ax2 * sizeTree + extraDaneX,
			this.r1l17ay2 * sizeTree + extraDaneY,
			this.r1l17ax3 * sizeTree + extraDaneX,
			this.r1l17ay3 * sizeTree + extraDaneY); //linia 17a
		endShape();

		beginShape();
		vertex(this.r1l22x1 * sizeTree + extraDaneX,
			this.r1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l22x1 * sizeTree + extraDaneX,
			this.r1l22y1 * sizeTree + extraDaneY,
			this.r1l22x2 * sizeTree + extraDaneX,
			this.r1l22y2 * sizeTree + extraDaneY,
			this.r1l22x3 * sizeTree + extraDaneX,
			this.r1l22y3 * sizeTree + extraDaneY); //linia 22
		endShape();

		beginShape();
		vertex(this.r1l23x1 * sizeTree + extraDaneX,
			this.r1l23y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l23x1 * sizeTree + extraDaneX,
			this.r1l23y1 * sizeTree + extraDaneY,
			this.r1l23x2 * sizeTree + extraDaneX,
			this.r1l23y2 * sizeTree + extraDaneY,
			this.r1l23x3 * sizeTree + extraDaneX,
			this.r1l23y3 * sizeTree + extraDaneY); //linia 23


		beginShape();
		vertex(this.r1l24x1 * sizeTree + extraDaneX,
			this.r1l24y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l24x1 * sizeTree + extraDaneX,
			this.r1l24y1 * sizeTree + extraDaneY,
			this.r1l24x2 * sizeTree + extraDaneX,
			this.r1l24y2 * sizeTree + extraDaneY,
			this.r1l24x3 * sizeTree + extraDaneX,
			this.r1l24y3 * sizeTree + extraDaneY); //linia 24
		endShape();

		// pierwsza gałąź - end	

		// druga gałąź - gałąź fioletowa 1 - start
		//		stroke(0, 0, 255);
		beginShape();
		vertex(this.p1l1x1 * sizeTree + extraDaneX,
			this.p1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l1x1 * sizeTree + extraDaneX,
			this.p1l1y1 * sizeTree + extraDaneY,
			this.p1l1x2 * sizeTree + extraDaneX,
			this.p1l1y2 * sizeTree + extraDaneY,
			this.p1l1x3 * sizeTree + extraDaneX,
			this.p1l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p1l7x1 * sizeTree + extraDaneX,
			this.p1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l7x1 * sizeTree + extraDaneX,
			this.p1l7y1 * sizeTree + extraDaneY,
			this.p1l7x2 * sizeTree + extraDaneX,
			this.p1l7y2 * sizeTree + extraDaneY,
			this.p1l7x3 * sizeTree + extraDaneX,
			this.p1l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p1l8x1 * sizeTree + extraDaneX,
			this.p1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l8x1 * sizeTree + extraDaneX,
			this.p1l8y1 * sizeTree + extraDaneY,
			this.p1l8x2 * sizeTree + extraDaneX,
			this.p1l8y2 * sizeTree + extraDaneY,
			this.p1l8x3 * sizeTree + extraDaneX,
			this.p1l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p1l9x1 * sizeTree + extraDaneX,
			this.p1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l9x1 * sizeTree + extraDaneX,
			this.p1l9y1 * sizeTree + extraDaneY,
			this.p1l9x2 * sizeTree + extraDaneX,
			this.p1l9y2 * sizeTree + extraDaneY,
			this.p1l9x3 * sizeTree + extraDaneX,
			this.p1l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.p1l10x1 * sizeTree + extraDaneX,
			this.p1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l10x1 * sizeTree + extraDaneX,
			this.p1l10y1 * sizeTree + extraDaneY,
			this.p1l10x2 * sizeTree + extraDaneX,
			this.p1l10y2 * sizeTree + extraDaneY,
			this.p1l10x3 * sizeTree + extraDaneX,
			this.p1l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p1l11ax1 * sizeTree + extraDaneX,
			this.p1l11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l11ax1 * sizeTree + extraDaneX,
			this.p1l11ay1 * sizeTree + extraDaneY,
			this.p1l11ax2 * sizeTree + extraDaneX,
			this.p1l11ay2 * sizeTree + extraDaneY,
			this.p1l11ax3 * sizeTree + extraDaneX,
			this.p1l11ay3 * sizeTree + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.p1l11bx1 * sizeTree + extraDaneX,
			this.p1l11by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l11bx1 * sizeTree + extraDaneX,
			this.p1l11by1 * sizeTree + extraDaneY,
			this.p1l11bx2 * sizeTree + extraDaneX,
			this.p1l11by2 * sizeTree + extraDaneY,
			this.p1l11bx3 * sizeTree + extraDaneX,
			this.p1l11by3 * sizeTree + extraDaneY); // linia 11b
		endShape();

		beginShape();
		vertex(this.p1l12x1 * sizeTree + extraDaneX,
			this.p1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l12x1 * sizeTree + extraDaneX,
			this.p1l12y1 * sizeTree + extraDaneY,
			this.p1l12x2 * sizeTree + extraDaneX,
			this.p1l12y2 * sizeTree + extraDaneY,
			this.p1l12x3 * sizeTree + extraDaneX,
			this.p1l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p1l13x1 * sizeTree + extraDaneX,
			this.p1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l13x1 * sizeTree + extraDaneX,
			this.p1l13y1 * sizeTree + extraDaneY,
			this.p1l13x2 * sizeTree + extraDaneX,
			this.p1l13y2 * sizeTree + extraDaneY,
			this.p1l13x3 * sizeTree + extraDaneX,
			this.p1l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p1l14x1 * sizeTree + extraDaneX,
			this.p1l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l14x1 * sizeTree + extraDaneX,
			this.p1l14y1 * sizeTree + extraDaneY,
			this.p1l14x2 * sizeTree + extraDaneX,
			this.p1l14y2 * sizeTree + extraDaneY,
			this.p1l14x3 * sizeTree + extraDaneX,
			this.p1l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p1l15x1 * sizeTree + extraDaneX,
			this.p1l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l15x1 * sizeTree + extraDaneX,
			this.p1l15y1 * sizeTree + extraDaneY,
			this.p1l15x2 * sizeTree + extraDaneX,
			this.p1l15y2 * sizeTree + extraDaneY,
			this.p1l15x3 * sizeTree + extraDaneX,
			this.p1l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p1l16x1 * sizeTree + extraDaneX,
			this.p1l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l16x1 * sizeTree + extraDaneX,
			this.p1l16y1 * sizeTree + extraDaneY,
			this.p1l16x2 * sizeTree + extraDaneX,
			this.p1l16y2 * sizeTree + extraDaneY,
			this.p1l16x3 * sizeTree + extraDaneX,
			this.p1l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.p1l17ax1 * sizeTree + extraDaneX,
			this.p1l17ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l17ax1 * sizeTree + extraDaneX,
			this.p1l17ay1 * sizeTree + extraDaneY,
			this.p1l17ax2 * sizeTree + extraDaneX,
			this.p1l17ay2 * sizeTree + extraDaneY,
			this.p1l17ax3 * sizeTree + extraDaneX,
			this.p1l17ay3 * sizeTree + extraDaneY); // linia 17a
		endShape();

		beginShape();
		vertex(this.p1l17bx1 * sizeTree + extraDaneX,
			this.p1l17by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l17bx1 * sizeTree + extraDaneX,
			this.p1l17by1 * sizeTree + extraDaneY,
			this.p1l17bx2 * sizeTree + extraDaneX,
			this.p1l17by2 * sizeTree + extraDaneY,
			this.p1l17bx3 * sizeTree + extraDaneX,
			this.p1l17by3 * sizeTree + extraDaneY); // linia 17b
		endShape();

		beginShape();
		vertex(this.p1l18x1 * sizeTree + extraDaneX,
			this.p1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l18x1 * sizeTree + extraDaneX,
			this.p1l18y1 * sizeTree + extraDaneY,
			this.p1l18x2 * sizeTree + extraDaneX,
			this.p1l18y2 * sizeTree + extraDaneY,
			this.p1l18x3 * sizeTree + extraDaneX,
			this.p1l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.p1l19x1 * sizeTree + extraDaneX,
			this.p1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l19x1 * sizeTree + extraDaneX,
			this.p1l19y1 * sizeTree + extraDaneY,
			this.p1l19x2 * sizeTree + extraDaneX,
			this.p1l19y2 * sizeTree + extraDaneY,
			this.p1l19x3 * sizeTree + extraDaneX,
			this.p1l19y3 * sizeTree + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.p1l18ax1 * sizeTree + extraDaneX,
			this.p1l18ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l18ax1 * sizeTree + extraDaneX,
			this.p1l18ay1 * sizeTree + extraDaneY,
			this.p1l18ax2 * sizeTree + extraDaneX,
			this.p1l18ay2 * sizeTree + extraDaneY,
			this.p1l18ax3 * sizeTree + extraDaneX,
			this.p1l18ay3 * sizeTree + extraDaneY); // linia 18a
		endShape();

		beginShape();
		vertex(this.p1l20x1 * sizeTree + extraDaneX,
			this.p1l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l20x1 * sizeTree + extraDaneX,
			this.p1l20y1 * sizeTree + extraDaneY,
			this.p1l20x2 * sizeTree + extraDaneX,
			this.p1l20y2 * sizeTree + extraDaneY,
			this.p1l20x3 * sizeTree + extraDaneX,
			this.p1l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.p1l21x1 * sizeTree + extraDaneX,
			this.p1l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l21x1 * sizeTree + extraDaneX,
			this.p1l21y1 * sizeTree + extraDaneY,
			this.p1l21x2 * sizeTree + extraDaneX,
			this.p1l21y2 * sizeTree + extraDaneY,
			this.p1l21x3 * sizeTree + extraDaneX,
			this.p1l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.p1l22x1 * sizeTree + extraDaneX,
			this.p1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l22x1 * sizeTree + extraDaneX,
			this.p1l22y1 * sizeTree + extraDaneY,
			this.p1l22x2 * sizeTree + extraDaneX,
			this.p1l22y2 * sizeTree + extraDaneY,
			this.p1l22x3 * sizeTree + extraDaneX,
			this.p1l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.p1l23x1 * sizeTree + extraDaneX,
			this.p1l23y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l23x1 * sizeTree + extraDaneX,
			this.p1l23y1 * sizeTree + extraDaneY,
			this.p1l23x2 * sizeTree + extraDaneX,
			this.p1l23y2 * sizeTree + extraDaneY,
			this.p1l23x3 * sizeTree + extraDaneX,
			this.p1l23y3 * sizeTree + extraDaneY); // linia 23
		endShape();

		beginShape();
		vertex(this.p1l24x1 * sizeTree + extraDaneX,
			this.p1l24y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l24x1 * sizeTree + extraDaneX,
			this.p1l24y1 * sizeTree + extraDaneY,
			this.p1l24x2 * sizeTree + extraDaneX,
			this.p1l24y2 * sizeTree + extraDaneY,
			this.p1l24x3 * sizeTree + extraDaneX,
			this.p1l24y3 * sizeTree + extraDaneY); // linia 24
		endShape();

		beginShape();
		vertex(this.p1l25x1 * sizeTree + extraDaneX,
			this.p1l25y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l25x1 * sizeTree + extraDaneX,
			this.p1l25y1 * sizeTree + extraDaneY,
			this.p1l25x2 * sizeTree + extraDaneX,
			this.p1l25y2 * sizeTree + extraDaneY,
			this.p1l25x3 * sizeTree + extraDaneX,
			this.p1l25y3 * sizeTree + extraDaneY); // linia 25
		endShape();

		beginShape();
		vertex(this.p1l27x1 * sizeTree + extraDaneX,
			this.p1l27y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l27x1 * sizeTree + extraDaneX,
			this.p1l27y1 * sizeTree + extraDaneY,
			this.p1l27x2 * sizeTree + extraDaneX,
			this.p1l27y2 * sizeTree + extraDaneY,
			this.p1l27x3 * sizeTree + extraDaneX,
			this.p1l27y3 * sizeTree + extraDaneY); // linia 27
		endShape();

		beginShape();
		vertex(this.p1l28x1 * sizeTree + extraDaneX,
			this.p1l28y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l28x1 * sizeTree + extraDaneX,
			this.p1l28y1 * sizeTree + extraDaneY,
			this.p1l28x2 * sizeTree + extraDaneX,
			this.p1l28y2 * sizeTree + extraDaneY,
			this.p1l28x3 * sizeTree + extraDaneX,
			this.p1l28y3 * sizeTree + extraDaneY); // linia 28
		endShape();

		beginShape();
		vertex(this.p1l29ax1 * sizeTree + extraDaneX,
			this.p1l29ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l29ax1 * sizeTree + extraDaneX,
			this.p1l29ay1 * sizeTree + extraDaneY,
			this.p1l29ax2 * sizeTree + extraDaneX,
			this.p1l29ay2 * sizeTree + extraDaneY,
			this.p1l29ax3 * sizeTree + extraDaneX,
			this.p1l29ay3 * sizeTree + extraDaneY); // linia 29a
		endShape();

		beginShape();
		vertex(this.p1l29bx1 * sizeTree + extraDaneX,
			this.p1l29by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l29bx1 * sizeTree + extraDaneX,
			this.p1l29by1 * sizeTree + extraDaneY,
			this.p1l29bx2 * sizeTree + extraDaneX,
			this.p1l29by2 * sizeTree + extraDaneY,
			this.p1l29bx3 * sizeTree + extraDaneX,
			this.p1l29by3 * sizeTree + extraDaneY); // linia 29b
		endShape();

		beginShape();
		vertex(this.p1l30ax1 * sizeTree + extraDaneX,
			this.p1l30ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l30ax1 * sizeTree + extraDaneX,
			this.p1l30ay1 * sizeTree + extraDaneY,
			this.p1l30ax2 * sizeTree + extraDaneX,
			this.p1l30ay2 * sizeTree + extraDaneY,
			this.p1l30ax3 * sizeTree + extraDaneX,
			this.p1l30ay3 * sizeTree + extraDaneY); // linia 30a
		endShape();

		beginShape();
		vertex(this.p1l30bx1 * sizeTree + extraDaneX,
			this.p1l30by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l30bx1 * sizeTree + extraDaneX,
			this.p1l30by1 * sizeTree + extraDaneY,
			this.p1l30bx2 * sizeTree + extraDaneX,
			this.p1l30by2 * sizeTree + extraDaneY,
			this.p1l30bx3 * sizeTree + extraDaneX,
			this.p1l30by3 * sizeTree + extraDaneY); // linia 30b
		endShape();

		beginShape();
		vertex(this.p1l31x1 * sizeTree + extraDaneX,
			this.p1l31y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l31x1 * sizeTree + extraDaneX,
			this.p1l31y1 * sizeTree + extraDaneY,
			this.p1l31x2 * sizeTree + extraDaneX,
			this.p1l31y2 * sizeTree + extraDaneY,
			this.p1l31x3 * sizeTree + extraDaneX,
			this.p1l31y3 * sizeTree + extraDaneY); // linia 31
		endShape();

		beginShape();
		vertex(this.p1l32ax1 * sizeTree + extraDaneX,
			this.p1l32ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l32ax1 * sizeTree + extraDaneX,
			this.p1l32ay1 * sizeTree + extraDaneY,
			this.p1l32ax2 * sizeTree + extraDaneX,
			this.p1l32ay2 * sizeTree + extraDaneY,
			this.p1l32ax3 * sizeTree + extraDaneX,
			this.p1l32ay3 * sizeTree + extraDaneY); // linia 32a
		endShape();

		beginShape();
		vertex(this.p1l33x1 * sizeTree + extraDaneX,
			this.p1l33y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l33x1 * sizeTree + extraDaneX,
			this.p1l33y1 * sizeTree + extraDaneY,
			this.p1l33x2 * sizeTree + extraDaneX,
			this.p1l33y2 * sizeTree + extraDaneY,
			this.p1l33x3 * sizeTree + extraDaneX,
			this.p1l33y3 * sizeTree + extraDaneY); // linia 33
		endShape();

		beginShape();
		vertex(this.p1l34x1 * sizeTree + extraDaneX,
			this.p1l34y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l34x1 * sizeTree + extraDaneX,
			this.p1l34y1 * sizeTree + extraDaneY,
			this.p1l34x2 * sizeTree + extraDaneX,
			this.p1l34y2 * sizeTree + extraDaneY,
			this.p1l34x3 * sizeTree + extraDaneX,
			this.p1l34y3 * sizeTree + extraDaneY); // linia 34
		endShape();

		beginShape();
		vertex(this.p1l35x1 * sizeTree + extraDaneX,
			this.p1l35y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l35x1 * sizeTree + extraDaneX,
			this.p1l35y1 * sizeTree + extraDaneY,
			this.p1l35x2 * sizeTree + extraDaneX,
			this.p1l35y2 * sizeTree + extraDaneY,
			this.p1l35x3 * sizeTree + extraDaneX,
			this.p1l35y3 * sizeTree + extraDaneY); // linia 35
		endShape();

		beginShape();
		vertex(this.p1l36x1 * sizeTree + extraDaneX,
			this.p1l36y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l36x1 * sizeTree + extraDaneX,
			this.p1l36y1 * sizeTree + extraDaneY,
			this.p1l36x2 * sizeTree + extraDaneX,
			this.p1l36y2 * sizeTree + extraDaneY,
			this.p1l36x3 * sizeTree + extraDaneX,
			this.p1l36y3 * sizeTree + extraDaneY); // linia 36
		endShape();
		// druga gałąź - end


		// trzecia gałąź - licząc od lewej - gałąź zielona 1 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.z1l1ax1 * sizeTree + extraDaneX,
			this.z1l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l1ax1 * sizeTree + extraDaneX,
			this.z1l1ay1 * sizeTree + extraDaneY,
			this.z1l1ax2 * sizeTree + extraDaneX,
			this.z1l1ay2 * sizeTree + extraDaneY,
			this.z1l1ax3 * sizeTree + extraDaneX,
			this.z1l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z1l1bx1 * sizeTree + extraDaneX,
			this.z1l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l1bx1 * sizeTree + extraDaneX,
			this.z1l1by1 * sizeTree + extraDaneY,
			this.z1l1bx2 * sizeTree + extraDaneX,
			this.z1l1by2 * sizeTree + extraDaneY,
			this.z1l1bx3 * sizeTree + extraDaneX,
			this.z1l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z1l8x1 * sizeTree + extraDaneX,
			this.z1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l8x1 * sizeTree + extraDaneX,
			this.z1l8y1 * sizeTree + extraDaneY,
			this.z1l8x2 * sizeTree + extraDaneX,
			this.z1l8y2 * sizeTree + extraDaneY,
			this.z1l8x3 * sizeTree + extraDaneX,
			this.z1l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z1l5x1 * sizeTree + extraDaneX,
			this.z1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l5x1 * sizeTree + extraDaneX,
			this.z1l5y1 * sizeTree + extraDaneY,
			this.z1l5x2 * sizeTree + extraDaneX,
			this.z1l5y2 * sizeTree + extraDaneY,
			this.z1l5x3 * sizeTree + extraDaneX,
			this.z1l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z1l2x1 * sizeTree + extraDaneX,
			this.z1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l2x1 * sizeTree + extraDaneX,
			this.z1l2y1 * sizeTree + extraDaneY,
			this.z1l2x2 * sizeTree + extraDaneX,
			this.z1l2y2 * sizeTree + extraDaneY,
			this.z1l2x3 * sizeTree + extraDaneX,
			this.z1l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z1l3x1 * sizeTree + extraDaneX,
			this.z1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l3x1 * sizeTree + extraDaneX,
			this.z1l3y1 * sizeTree + extraDaneY,
			this.z1l3x2 * sizeTree + extraDaneX,
			this.z1l3y2 * sizeTree + extraDaneY,
			this.z1l3x3 * sizeTree + extraDaneX,
			this.z1l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z1l4x1 * sizeTree + extraDaneX,
			this.z1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l4x1 * sizeTree + extraDaneX,
			this.z1l4y1 * sizeTree + extraDaneY,
			this.z1l4x2 * sizeTree + extraDaneX,
			this.z1l4y2 * sizeTree + extraDaneY,
			this.z1l4x3 * sizeTree + extraDaneX,
			this.z1l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z1l10x1 * sizeTree + extraDaneX,
			this.z1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l10x1 * sizeTree + extraDaneX,
			this.z1l10y1 * sizeTree + extraDaneY,
			this.z1l10x2 * sizeTree + extraDaneX,
			this.z1l10y2 * sizeTree + extraDaneY,
			this.z1l10x3 * sizeTree + extraDaneX,
			this.z1l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.z1l9x1 * sizeTree + extraDaneX,
			this.z1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l9x1 * sizeTree + extraDaneX,
			this.z1l9y1 * sizeTree + extraDaneY,
			this.z1l9x2 * sizeTree + extraDaneX,
			this.z1l9y2 * sizeTree + extraDaneY,
			this.z1l9x3 * sizeTree + extraDaneX,
			this.z1l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z1l11x1 * sizeTree + extraDaneX,
			this.z1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l11x1 * sizeTree + extraDaneX,
			this.z1l11y1 * sizeTree + extraDaneY,
			this.z1l11x2 * sizeTree + extraDaneX,
			this.z1l11y2 * sizeTree + extraDaneY,
			this.z1l11x3 * sizeTree + extraDaneX,
			this.z1l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.z1l11ax1 * sizeTree + extraDaneX,
			this.z1l11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l11ax1 * sizeTree + extraDaneX,
			this.z1l11ay1 * sizeTree + extraDaneY,
			this.z1l11ax2 * sizeTree + extraDaneX,
			this.z1l11ay2 * sizeTree + extraDaneY,
			this.z1l11ax3 * sizeTree + extraDaneX,
			this.z1l11ay3 * sizeTree + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.z1l22x1 * sizeTree + extraDaneX,
			this.z1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l22x1 * sizeTree + extraDaneX,
			this.z1l22y1 * sizeTree + extraDaneY,
			this.z1l22x2 * sizeTree + extraDaneX,
			this.z1l22y2 * sizeTree + extraDaneY,
			this.z1l22x3 * sizeTree + extraDaneX,
			this.z1l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z1l18x1 * sizeTree + extraDaneX,
			this.z1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l18x1 * sizeTree + extraDaneX,
			this.z1l18y1 * sizeTree + extraDaneY,
			this.z1l18x2 * sizeTree + extraDaneX,
			this.z1l18y2 * sizeTree + extraDaneY,
			this.z1l18x3 * sizeTree + extraDaneX,
			this.z1l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z1l21x1 * sizeTree + extraDaneX,
			this.z1l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l21x1 * sizeTree + extraDaneX,
			this.z1l21y1 * sizeTree + extraDaneY,
			this.z1l21x2 * sizeTree + extraDaneX,
			this.z1l21y2 * sizeTree + extraDaneY,
			this.z1l21x3 * sizeTree + extraDaneX,
			this.z1l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z1l19x1 * sizeTree + extraDaneX,
			this.z1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l19x1 * sizeTree + extraDaneX,
			this.z1l19y1 * sizeTree + extraDaneY,
			this.z1l19x2 * sizeTree + extraDaneX,
			this.z1l19y2 * sizeTree + extraDaneY,
			this.z1l19x3 * sizeTree + extraDaneX,
			this.z1l19y3 * sizeTree + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.z1l20x1 * sizeTree + extraDaneX,
			this.z1l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l20x1 * sizeTree + extraDaneX,
			this.z1l20y1 * sizeTree + extraDaneY,
			this.z1l20x2 * sizeTree + extraDaneX,
			this.z1l20y2 * sizeTree + extraDaneY,
			this.z1l20x3 * sizeTree + extraDaneX,
			this.z1l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z1l14ax1 * sizeTree + extraDaneX,
			this.z1l14ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l14ax1 * sizeTree + extraDaneX,
			this.z1l14ay1 * sizeTree + extraDaneY,
			this.z1l14ax2 * sizeTree + extraDaneX,
			this.z1l14ay2 * sizeTree + extraDaneY,
			this.z1l14ax3 * sizeTree + extraDaneX,
			this.z1l14ay3 * sizeTree + extraDaneY); // linia 14a
		endShape();

		beginShape();
		vertex(this.z1l14bx1 * sizeTree + extraDaneX,
			this.z1l14by1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l14bx1 * sizeTree + extraDaneX,
			this.z1l14by1 * sizeTree + extraDaneY,
			this.z1l14bx2 * sizeTree + extraDaneX,
			this.z1l14by2 * sizeTree + extraDaneY,
			this.z1l14bx3 * sizeTree + extraDaneX,
			this.z1l14by3 * sizeTree + extraDaneY); // linia 14b
		endShape();

		beginShape();
		vertex(this.z1l16x1 * sizeTree + extraDaneX,
			this.z1l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l16x1 * sizeTree + extraDaneX,
			this.z1l16y1 * sizeTree + extraDaneY,
			this.z1l16x2 * sizeTree + extraDaneX,
			this.z1l16y2 * sizeTree + extraDaneY,
			this.z1l16x3 * sizeTree + extraDaneX,
			this.z1l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z1l17x1 * sizeTree + extraDaneX,
			this.z1l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l17x1 * sizeTree + extraDaneX,
			this.z1l17y1 * sizeTree + extraDaneY,
			this.z1l17x2 * sizeTree + extraDaneX,
			this.z1l17y2 * sizeTree + extraDaneY,
			this.z1l17x3 * sizeTree + extraDaneX,
			this.z1l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z1l13x1 * sizeTree + extraDaneX,
			this.z1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l13x1 * sizeTree + extraDaneX,
			this.z1l13y1 * sizeTree + extraDaneY,
			this.z1l13x2 * sizeTree + extraDaneX,
			this.z1l13y2 * sizeTree + extraDaneY,
			this.z1l13x3 * sizeTree + extraDaneX,
			this.z1l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z1l12x1 * sizeTree + extraDaneX,
			this.z1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l12x1 * sizeTree + extraDaneX,
			this.z1l12y1 * sizeTree + extraDaneY,
			this.z1l12x2 * sizeTree + extraDaneX,
			this.z1l12y2 * sizeTree + extraDaneY,
			this.z1l12x3 * sizeTree + extraDaneX,
			this.z1l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		// trzecia gałąź - end		

		// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
		//		stroke(150, 255, 100);	
		beginShape();
		vertex(this.z2l2x1 * sizeTree + extraDaneX,
			this.z2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l2x1 * sizeTree + extraDaneX,
			this.z2l2y1 * sizeTree + extraDaneY,
			this.z2l2x2 * sizeTree + extraDaneX,
			this.z2l2y2 * sizeTree + extraDaneY,
			this.z2l2x3 * sizeTree + extraDaneX,
			this.z2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z2l1ax1 * sizeTree + extraDaneX,
			this.z2l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l1ax1 * sizeTree + extraDaneX,
			this.z2l1ay1 * sizeTree + extraDaneY,
			this.z2l1ax2 * sizeTree + extraDaneX,
			this.z2l1ay2 * sizeTree + extraDaneY,
			this.z2l1ax3 * sizeTree + extraDaneX,
			this.z2l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z2l1bx1 * sizeTree + extraDaneX,
			this.z2l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l1bx1 * sizeTree + extraDaneX,
			this.z2l1by1 * sizeTree + extraDaneY,
			this.z2l1bx2 * sizeTree + extraDaneX,
			this.z2l1by2 * sizeTree + extraDaneY,
			this.z2l1bx3 * sizeTree + extraDaneX,
			this.z2l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z2l21x1 * sizeTree + extraDaneX,
			this.z2l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l21x1 * sizeTree + extraDaneX,
			this.z2l21y1 * sizeTree + extraDaneY,
			this.z2l21x2 * sizeTree + extraDaneX,
			this.z2l21y2 * sizeTree + extraDaneY,
			this.z2l21x3 * sizeTree + extraDaneX,
			this.z2l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z2l22x1 * sizeTree + extraDaneX,
			this.z2l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l22x1 * sizeTree + extraDaneX,
			this.z2l22y1 * sizeTree + extraDaneY,
			this.z2l22x2 * sizeTree + extraDaneX,
			this.z2l22y2 * sizeTree + extraDaneY,
			this.z2l22x3 * sizeTree + extraDaneX,
			this.z2l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z2l18x1 * sizeTree + extraDaneX,
			this.z2l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l18x1 * sizeTree + extraDaneX,
			this.z2l18y1 * sizeTree + extraDaneY,
			this.z2l18x2 * sizeTree + extraDaneX,
			this.z2l18y2 * sizeTree + extraDaneY,
			this.z2l18x3 * sizeTree + extraDaneX,
			this.z2l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z2l20x1 * sizeTree + extraDaneX,
			this.z2l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l20x1 * sizeTree + extraDaneX,
			this.z2l20y1 * sizeTree + extraDaneY,
			this.z2l20x2 * sizeTree + extraDaneX,
			this.z2l20y2 * sizeTree + extraDaneY,
			this.z2l20x3 * sizeTree + extraDaneX,
			this.z2l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z2l17x1 * sizeTree + extraDaneX,
			this.z2l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l17x1 * sizeTree + extraDaneX,
			this.z2l17y1 * sizeTree + extraDaneY,
			this.z2l17x2 * sizeTree + extraDaneX,
			this.z2l17y2 * sizeTree + extraDaneY,
			this.z2l17x3 * sizeTree + extraDaneX,
			this.z2l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z2l16x1 * sizeTree + extraDaneX,
			this.z2l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l16x1 * sizeTree + extraDaneX,
			this.z2l16y1 * sizeTree + extraDaneY,
			this.z2l16x2 * sizeTree + extraDaneX,
			this.z2l16y2 * sizeTree + extraDaneY,
			this.z2l16x3 * sizeTree + extraDaneX,
			this.z2l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z2l15x1 * sizeTree + extraDaneX,
			this.z2l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l15x1 * sizeTree + extraDaneX,
			this.z2l15y1 * sizeTree + extraDaneY,
			this.z2l15x2 * sizeTree + extraDaneX,
			this.z2l15y2 * sizeTree + extraDaneY,
			this.z2l15x3 * sizeTree + extraDaneX,
			this.z2l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.z2l14x1 * sizeTree + extraDaneX,
			this.z2l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l14x1 * sizeTree + extraDaneX,
			this.z2l14y1 * sizeTree + extraDaneY,
			this.z2l14x2 * sizeTree + extraDaneX,
			this.z2l14y2 * sizeTree + extraDaneY,
			this.z2l14x3 * sizeTree + extraDaneX,
			this.z2l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.z2l13x1 * sizeTree + extraDaneX,
			this.z2l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l13x1 * sizeTree + extraDaneX,
			this.z2l13y1 * sizeTree + extraDaneY,
			this.z2l13x2 * sizeTree + extraDaneX,
			this.z2l13y2 * sizeTree + extraDaneY,
			this.z2l13x3 * sizeTree + extraDaneX,
			this.z2l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z2l4ax1 * sizeTree + extraDaneX,
			this.z2l4ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l4ax1 * sizeTree + extraDaneX,
			this.z2l4ay1 * sizeTree + extraDaneY,
			this.z2l4ax2 * sizeTree + extraDaneX,
			this.z2l4ay2 * sizeTree + extraDaneY,
			this.z2l4ax3 * sizeTree + extraDaneX,
			this.z2l4ay3 * sizeTree + extraDaneY); // linia 4a
		endShape();

		beginShape();
		vertex(this.z2l4bx1 * sizeTree + extraDaneX,
			this.z2l4by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l4bx1 * sizeTree + extraDaneX,
			this.z2l4by1 * sizeTree + extraDaneY,
			this.z2l4bx2 * sizeTree + extraDaneX,
			this.z2l4by2 * sizeTree + extraDaneY,
			this.z2l4bx3 * sizeTree + extraDaneX,
			this.z2l4by3 * sizeTree + extraDaneY); // linia 4b
		endShape();

		beginShape();
		vertex(this.z2l3x1 * sizeTree + extraDaneX,
			this.z2l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l3x1 * sizeTree + extraDaneX,
			this.z2l3y1 * sizeTree + extraDaneY,
			this.z2l3x2 * sizeTree + extraDaneX,
			this.z2l3y2 * sizeTree + extraDaneY,
			this.z2l3x3 * sizeTree + extraDaneX,
			this.z2l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z2l6x1 * sizeTree + extraDaneX,
			this.z2l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l6x1 * sizeTree + extraDaneX,
			this.z2l6y1 * sizeTree + extraDaneY,
			this.z2l6x2 * sizeTree + extraDaneX,
			this.z2l6y2 * sizeTree + extraDaneY,
			this.z2l6x3 * sizeTree + extraDaneX,
			this.z2l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z2l5x1 * sizeTree + extraDaneX,
			this.z2l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l5x1 * sizeTree + extraDaneX,
			this.z2l5y1 * sizeTree + extraDaneY,
			this.z2l5x2 * sizeTree + extraDaneX,
			this.z2l5y2 * sizeTree + extraDaneY,
			this.z2l5x3 * sizeTree + extraDaneX,
			this.z2l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z2l8x1 * sizeTree + extraDaneX,
			this.z2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l8x1 * sizeTree + extraDaneX,
			this.z2l8y1 * sizeTree + extraDaneY,
			this.z2l8x2 * sizeTree + extraDaneX,
			this.z2l8y2 * sizeTree + extraDaneY,
			this.z2l8x3 * sizeTree + extraDaneX,
			this.z2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z2l7x1 * sizeTree + extraDaneX,
			this.z2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l7x1 * sizeTree + extraDaneX,
			this.z2l7y1 * sizeTree + extraDaneY,
			this.z2l7x2 * sizeTree + extraDaneX,
			this.z2l7y2 * sizeTree + extraDaneY,
			this.z2l7x3 * sizeTree + extraDaneX,
			this.z2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.z2l12x1 * sizeTree + extraDaneX,
			this.z2l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12x1 * sizeTree + extraDaneX,
			this.z2l12y1 * sizeTree + extraDaneY,
			this.z2l12x2 * sizeTree + extraDaneX,
			this.z2l12y2 * sizeTree + extraDaneY,
			this.z2l12x3 * sizeTree + extraDaneX,
			this.z2l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.z2l12bx1 * sizeTree + extraDaneX,
			this.z2l12by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12bx1 * sizeTree + extraDaneX,
			this.z2l12by1 * sizeTree + extraDaneY,
			this.z2l12bx2 * sizeTree + extraDaneX,
			this.z2l12by2 * sizeTree + extraDaneY,
			this.z2l12bx3 * sizeTree + extraDaneX,
			this.z2l12by3 * sizeTree + extraDaneY); // linia 12b
		endShape();

		beginShape();
		vertex(this.z2l12cx1 * sizeTree + extraDaneX,
			this.z2l12cy1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12cx1 * sizeTree + extraDaneX,
			this.z2l12cy1 * sizeTree + extraDaneY,
			this.z2l12cx2 * sizeTree + extraDaneX,
			this.z2l12cy2 * sizeTree + extraDaneY,
			this.z2l12cx3 * sizeTree + extraDaneX,
			this.z2l12cy3 * sizeTree + extraDaneY); // linia 12c
		endShape();

		// czwarta gałąź - end			


		// piąta gałąź - licząc od lewej - gałąź zielona 3 - start
		//		stroke(0, 255, 255);	
		beginShape();
		vertex(this.z3l1ax1 * sizeTree + extraDaneX,
			this.z3l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l1ax1 * sizeTree + extraDaneX,
			this.z3l1ay1 * sizeTree + extraDaneY,
			this.z3l1ax2 * sizeTree + extraDaneX,
			this.z3l1ay2 * sizeTree + extraDaneY,
			this.z3l1ax3 * sizeTree + extraDaneX,
			this.z3l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z3l1bx1 * sizeTree + extraDaneX,
			this.z3l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l1bx1 * sizeTree + extraDaneX,
			this.z3l1by1 * sizeTree + extraDaneY,
			this.z3l1bx2 * sizeTree + extraDaneX,
			this.z3l1by2 * sizeTree + extraDaneY,
			this.z3l1bx3 * sizeTree + extraDaneX,
			this.z3l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z3l3x1 * sizeTree + extraDaneX,
			this.z3l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l3x1 * sizeTree + extraDaneX,
			this.z3l3y1 * sizeTree + extraDaneY,
			this.z3l3x2 * sizeTree + extraDaneX,
			this.z3l3y2 * sizeTree + extraDaneY,
			this.z3l3x3 * sizeTree + extraDaneX,
			this.z3l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z3l4x1 * sizeTree + extraDaneX,
			this.z3l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l4x1 * sizeTree + extraDaneX,
			this.z3l4y1 * sizeTree + extraDaneY,
			this.z3l4x2 * sizeTree + extraDaneX,
			this.z3l4y2 * sizeTree + extraDaneY,
			this.z3l4x3 * sizeTree + extraDaneX,
			this.z3l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z3l5x1 * sizeTree + extraDaneX,
			this.z3l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l5x1 * sizeTree + extraDaneX,
			this.z3l5y1 * sizeTree + extraDaneY,
			this.z3l5x2 * sizeTree + extraDaneX,
			this.z3l5y2 * sizeTree + extraDaneY,
			this.z3l5x3 * sizeTree + extraDaneX,
			this.z3l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z3l6x1 * sizeTree + extraDaneX,
			this.z3l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l6x1 * sizeTree + extraDaneX,
			this.z3l6y1 * sizeTree + extraDaneY,
			this.z3l6x2 * sizeTree + extraDaneX,
			this.z3l6y2 * sizeTree + extraDaneY,
			this.z3l6x3 * sizeTree + extraDaneX,
			this.z3l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z3l8x1 * sizeTree + extraDaneX,
			this.z3l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l8x1 * sizeTree + extraDaneX,
			this.z3l8y1 * sizeTree + extraDaneY,
			this.z3l8x2 * sizeTree + extraDaneX,
			this.z3l8y2 * sizeTree + extraDaneY,
			this.z3l8x3 * sizeTree + extraDaneX,
			this.z3l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z3l9x1 * sizeTree + extraDaneX,
			this.z3l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l9x1 * sizeTree + extraDaneX,
			this.z3l9y1 * sizeTree + extraDaneY,
			this.z3l9x2 * sizeTree + extraDaneX,
			this.z3l9y2 * sizeTree + extraDaneY,
			this.z3l9x3 * sizeTree + extraDaneX,
			this.z3l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z3l7x1 * sizeTree + extraDaneX,
			this.z3l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l7x1 * sizeTree + extraDaneX,
			this.z3l7y1 * sizeTree + extraDaneY,
			this.z3l7x2 * sizeTree + extraDaneX,
			this.z3l7y2 * sizeTree + extraDaneY,
			this.z3l7x3 * sizeTree + extraDaneX,
			this.z3l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();
		// piąta gałąź - end	

		// szusta gałąź - gałąź czerwona 2 - start
		//		stroke(255);	
		beginShape();
		vertex(this.r2l1x1 * sizeTree + extraDaneX,
			this.r2l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l1x1 * sizeTree + extraDaneX,
			this.r2l1y1 * sizeTree + extraDaneY,
			this.r2l1x2 * sizeTree + extraDaneX,
			this.r2l1y2 * sizeTree + extraDaneY,
			this.r2l1x3 * sizeTree + extraDaneX,
			this.r2l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r2l2x1 * sizeTree + extraDaneX,
			this.r2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l2x1 * sizeTree + extraDaneX,
			this.r2l2y1 * sizeTree + extraDaneY,
			this.r2l2x2 * sizeTree + extraDaneX,
			this.r2l2y2 * sizeTree + extraDaneY,
			this.r2l2x3 * sizeTree + extraDaneX,
			this.r2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r2l3x1 * sizeTree + extraDaneX,
			this.r2l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l3x1 * sizeTree + extraDaneX,
			this.r2l3y1 * sizeTree + extraDaneY,
			this.r2l3x2 * sizeTree + extraDaneX,
			this.r2l3y2 * sizeTree + extraDaneY,
			this.r2l3x3 * sizeTree + extraDaneX,
			this.r2l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r2l7x1 * sizeTree + extraDaneX,
			this.r2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l7x1 * sizeTree + extraDaneX,
			this.r2l7y1 * sizeTree + extraDaneY,
			this.r2l7x2 * sizeTree + extraDaneX,
			this.r2l7y2 * sizeTree + extraDaneY,
			this.r2l7x3 * sizeTree + extraDaneX,
			this.r2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r2l8x1 * sizeTree + extraDaneX,
			this.r2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l8x1 * sizeTree + extraDaneX,
			this.r2l8y1 * sizeTree + extraDaneY,
			this.r2l8x2 * sizeTree + extraDaneX,
			this.r2l8y2 * sizeTree + extraDaneY,
			this.r2l8x3 * sizeTree + extraDaneX,
			this.r2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r2l9x1 * sizeTree + extraDaneX,
			this.r2l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l9x1 * sizeTree + extraDaneX,
			this.r2l9y1 * sizeTree + extraDaneY,
			this.r2l9x2 * sizeTree + extraDaneX,
			this.r2l9y2 * sizeTree + extraDaneY,
			this.r2l9x3 * sizeTree + extraDaneX,
			this.r2l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r2l10x1 * sizeTree + extraDaneX,
			this.r2l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l10x1 * sizeTree + extraDaneX,
			this.r2l10y1 * sizeTree + extraDaneY,
			this.r2l10x2 * sizeTree + extraDaneX,
			this.r2l10y2 * sizeTree + extraDaneY,
			this.r2l10x3 * sizeTree + extraDaneX,
			this.r2l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r2l11x1 * sizeTree + extraDaneX,
			this.r2l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l11x1 * sizeTree + extraDaneX,
			this.r2l11y1 * sizeTree + extraDaneY,
			this.r2l11x2 * sizeTree + extraDaneX,
			this.r2l11y2 * sizeTree + extraDaneY,
			this.r2l11x3 * sizeTree + extraDaneX,
			this.r2l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r2l1ax1 * sizeTree + extraDaneX,
			this.r2l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l1ax1 * sizeTree + extraDaneX,
			this.r2l1ay1 * sizeTree + extraDaneY,
			this.r2l1ax2 * sizeTree + extraDaneX,
			this.r2l1ay2 * sizeTree + extraDaneY,
			this.r2l1ax3 * sizeTree + extraDaneX,
			this.r2l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();
		// szusta gałąź - end

		// siódma gałąź - gałąź czerwona 4 - start
		//		stroke(0, 255, 0);

		beginShape();
		vertex(this.r4l2x1 * sizeTree + extraDaneX,
			this.r4l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l2x1 * sizeTree + extraDaneX,
			this.r4l2y1 * sizeTree + extraDaneY,
			this.r4l2x2 * sizeTree + extraDaneX,
			this.r4l2y2 * sizeTree + extraDaneY,
			this.r4l2x3 * sizeTree + extraDaneX,
			this.r4l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r4l3x1 * sizeTree + extraDaneX,
			this.r4l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l3x1 * sizeTree + extraDaneX,
			this.r4l3y1 * sizeTree + extraDaneY,
			this.r4l3x2 * sizeTree + extraDaneX,
			this.r4l3y2 * sizeTree + extraDaneY,
			this.r4l3x3 * sizeTree + extraDaneX,
			this.r4l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r4l4x1 * sizeTree + extraDaneX,
			this.r4l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l4x1 * sizeTree + extraDaneX,
			this.r4l4y1 * sizeTree + extraDaneY,
			this.r4l4x2 * sizeTree + extraDaneX,
			this.r4l4y2 * sizeTree + extraDaneY,
			this.r4l4x3 * sizeTree + extraDaneX,
			this.r4l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.r4l7x1 * sizeTree + extraDaneX,
			this.r4l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l7x1 * sizeTree + extraDaneX,
			this.r4l7y1 * sizeTree + extraDaneY,
			this.r4l7x2 * sizeTree + extraDaneX,
			this.r4l7y2 * sizeTree + extraDaneY,
			this.r4l7x3 * sizeTree + extraDaneX,
			this.r4l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r4l11x1 * sizeTree + extraDaneX,
			this.r4l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l11x1 * sizeTree + extraDaneX,
			this.r4l11y1 * sizeTree + extraDaneY,
			this.r4l11x2 * sizeTree + extraDaneX,
			this.r4l11y2 * sizeTree + extraDaneY,
			this.r4l11x3 * sizeTree + extraDaneX,
			this.r4l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r4l9x1 * sizeTree + extraDaneX,
			this.r4l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l9x1 * sizeTree + extraDaneX,
			this.r4l9y1 * sizeTree + extraDaneY,
			this.r4l9x2 * sizeTree + extraDaneX,
			this.r4l9y2 * sizeTree + extraDaneY,
			this.r4l9x3 * sizeTree + extraDaneX,
			this.r4l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r4l10x1 * sizeTree + extraDaneX,
			this.r4l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l10x1 * sizeTree + extraDaneX,
			this.r4l10y1 * sizeTree + extraDaneY,
			this.r4l10x2 * sizeTree + extraDaneX,
			this.r4l10y2 * sizeTree + extraDaneY,
			this.r4l10x3 * sizeTree + extraDaneX,
			this.r4l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r4l13x1 * sizeTree + extraDaneX,
			this.r4l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l13x1 * sizeTree + extraDaneX,
			this.r4l13y1 * sizeTree + extraDaneY,
			this.r4l13x2 * sizeTree + extraDaneX,
			this.r4l13y2 * sizeTree + extraDaneY,
			this.r4l13x3 * sizeTree + extraDaneX,
			this.r4l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r4l8x1 * sizeTree + extraDaneX,
			this.r4l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l8x1 * sizeTree + extraDaneX,
			this.r4l8y1 * sizeTree + extraDaneY,
			this.r4l8x2 * sizeTree + extraDaneX,
			this.r4l8y2 * sizeTree + extraDaneY,
			this.r4l8x3 * sizeTree + extraDaneX,
			this.r4l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();
		// siódma gałąź -  end	

		// ósma gałąź - gałąź fioletowa 2 - start
		//		stroke(0, 0, 255);	
		beginShape();
		vertex(this.p2l1x1 * sizeTree + extraDaneX,
			this.p2l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l1x1 * sizeTree + extraDaneX,
			this.p2l1y1 * sizeTree + extraDaneY,
			this.p2l1x2 * sizeTree + extraDaneX,
			this.p2l1y2 * sizeTree + extraDaneY,
			this.p2l1x3 * sizeTree + extraDaneX,
			this.p2l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p2l2x1 * sizeTree + extraDaneX,
			this.p2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l2x1 * sizeTree + extraDaneX,
			this.p2l2y1 * sizeTree + extraDaneY,
			this.p2l2x2 * sizeTree + extraDaneX,
			this.p2l2y2 * sizeTree + extraDaneY,
			this.p2l2x3 * sizeTree + extraDaneX,
			this.p2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.p2l6x1 * sizeTree + extraDaneX,
			this.p2l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l6x1 * sizeTree + extraDaneX,
			this.p2l6y1 * sizeTree + extraDaneY,
			this.p2l6x2 * sizeTree + extraDaneX,
			this.p2l6y2 * sizeTree + extraDaneY,
			this.p2l6x3 * sizeTree + extraDaneX,
			this.p2l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.p2l3ax1 * sizeTree + extraDaneX,
			this.p2l3ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l3ax1 * sizeTree + extraDaneX,
			this.p2l3ay1 * sizeTree + extraDaneY,
			this.p2l3ax2 * sizeTree + extraDaneX,
			this.p2l3ay2 * sizeTree + extraDaneY,
			this.p2l3ax3 * sizeTree + extraDaneX,
			this.p2l3ay3 * sizeTree + extraDaneY); // linia 3a
		endShape();

		beginShape();
		vertex(this.p2l3bx1 * sizeTree + extraDaneX,
			this.p2l3by1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l3bx1 * sizeTree + extraDaneX,
			this.p2l3by1 * sizeTree + extraDaneY,
			this.p2l3bx2 * sizeTree + extraDaneX,
			this.p2l3by2 * sizeTree + extraDaneY,
			this.p2l3bx3 * sizeTree + extraDaneX,
			this.p2l3by3 * sizeTree + extraDaneY); // linia 3b
		endShape();

		beginShape();
		vertex(this.p2l4x1 * sizeTree + extraDaneX,
			this.p2l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l4x1 * sizeTree + extraDaneX,
			this.p2l4y1 * sizeTree + extraDaneY,
			this.p2l4x2 * sizeTree + extraDaneX,
			this.p2l4y2 * sizeTree + extraDaneY,
			this.p2l4x3 * sizeTree + extraDaneX,
			this.p2l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.p2l5x1 * sizeTree + extraDaneX,
			this.p2l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l5x1 * sizeTree + extraDaneX,
			this.p2l5y1 * sizeTree + extraDaneY,
			this.p2l5x2 * sizeTree + extraDaneX,
			this.p2l5y2 * sizeTree + extraDaneY,
			this.p2l5x3 * sizeTree + extraDaneX,
			this.p2l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.p2l7x1 * sizeTree + extraDaneX,
			this.p2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l7x1 * sizeTree + extraDaneX,
			this.p2l7y1 * sizeTree + extraDaneY,
			this.p2l7x2 * sizeTree + extraDaneX,
			this.p2l7y2 * sizeTree + extraDaneY,
			this.p2l7x3 * sizeTree + extraDaneX,
			this.p2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p2l8x1 * sizeTree + extraDaneX,
			this.p2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l8x1 * sizeTree + extraDaneX,
			this.p2l8y1 * sizeTree + extraDaneY,
			this.p2l8x2 * sizeTree + extraDaneX,
			this.p2l8y2 * sizeTree + extraDaneY,
			this.p2l8x3 * sizeTree + extraDaneX,
			this.p2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p2l14x1 * sizeTree + extraDaneX,
			this.p2l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l14x1 * sizeTree + extraDaneX,
			this.p2l14y1 * sizeTree + extraDaneY,
			this.p2l14x2 * sizeTree + extraDaneX,
			this.p2l14y2 * sizeTree + extraDaneY,
			this.p2l14x3 * sizeTree + extraDaneX,
			this.p2l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p2l15x1 * sizeTree + extraDaneX,
			this.p2l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l15x1 * sizeTree + extraDaneX,
			this.p2l15y1 * sizeTree + extraDaneY,
			this.p2l15x2 * sizeTree + extraDaneX,
			this.p2l15y2 * sizeTree + extraDaneY,
			this.p2l15x3 * sizeTree + extraDaneX,
			this.p2l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p2l17x1 * sizeTree + extraDaneX,
			this.p2l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l17x1 * sizeTree + extraDaneX,
			this.p2l17y1 * sizeTree + extraDaneY,
			this.p2l17x2 * sizeTree + extraDaneX,
			this.p2l17y2 * sizeTree + extraDaneY,
			this.p2l17x3 * sizeTree + extraDaneX,
			this.p2l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.p2l16ax1 * sizeTree + extraDaneX,
			this.p2l16ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l16ax1 * sizeTree + extraDaneX,
			this.p2l16ay1 * sizeTree + extraDaneY,
			this.p2l16ax2 * sizeTree + extraDaneX,
			this.p2l16ay2 * sizeTree + extraDaneY,
			this.p2l16ax3 * sizeTree + extraDaneX,
			this.p2l16ay3 * sizeTree + extraDaneY); // linia 16a
		endShape();

		beginShape();
		vertex(this.p2l16bx1 * sizeTree + extraDaneX,
			this.p2l16by1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l16bx1 * sizeTree + extraDaneX,
			this.p2l16by1 * sizeTree + extraDaneY,
			this.p2l16bx2 * sizeTree + extraDaneX,
			this.p2l16by2 * sizeTree + extraDaneY,
			this.p2l16bx3 * sizeTree + extraDaneX,
			this.p2l16by3 * sizeTree + extraDaneY); // linia 16b
		endShape();

		beginShape();
		vertex(this.p2l12x1 * sizeTree + extraDaneX,
			this.p2l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l12x1 * sizeTree + extraDaneX,
			this.p2l12y1 * sizeTree + extraDaneY,
			this.p2l12x2 * sizeTree + extraDaneX,
			this.p2l12y2 * sizeTree + extraDaneY,
			this.p2l12x3 * sizeTree + extraDaneX,
			this.p2l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p2l13x1 * sizeTree + extraDaneX,
			this.p2l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l13x1 * sizeTree + extraDaneX,
			this.p2l13y1 * sizeTree + extraDaneY,
			this.p2l13x2 * sizeTree + extraDaneX,
			this.p2l13y2 * sizeTree + extraDaneY,
			this.p2l13x3 * sizeTree + extraDaneX,
			this.p2l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p2l10x1 * sizeTree + extraDaneX,
			this.p2l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l10x1 * sizeTree + extraDaneX,
			this.p2l10y1 * sizeTree + extraDaneY,
			this.p2l10x2 * sizeTree + extraDaneX,
			this.p2l10y2 * sizeTree + extraDaneY,
			this.p2l10x3 * sizeTree + extraDaneX,
			this.p2l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p2l11x1 * sizeTree + extraDaneX,
			this.p2l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l11x1 * sizeTree + extraDaneX,
			this.p2l11y1 * sizeTree + extraDaneY,
			this.p2l11x2 * sizeTree + extraDaneX,
			this.p2l11y2 * sizeTree + extraDaneY,
			this.p2l11x3 * sizeTree + extraDaneX,
			this.p2l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();
		// ósma gałąź - end	


		// dziewiąta gałąź - gałąź czerwona 3 - start
		//		stroke(0, 255, 0);
		beginShape();
		vertex(this.r3l1x1 * sizeTree + extraDaneX,
			this.r3l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l1x1 * sizeTree + extraDaneX,
			this.r3l1y1 * sizeTree + extraDaneY,
			this.r3l1x2 * sizeTree + extraDaneX,
			this.r3l1y2 * sizeTree + extraDaneY,
			this.r3l1x3 * sizeTree + extraDaneX,
			this.r3l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r3l2x1 * sizeTree + extraDaneX,
			this.r3l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l2x1 * sizeTree + extraDaneX,
			this.r3l2y1 * sizeTree + extraDaneY,
			this.r3l2x2 * sizeTree + extraDaneX,
			this.r3l2y2 * sizeTree + extraDaneY,
			this.r3l2x3 * sizeTree + extraDaneX,
			this.r3l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r3l17x1 * sizeTree + extraDaneX,
			this.r3l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l17x1 * sizeTree + extraDaneX,
			this.r3l17y1 * sizeTree + extraDaneY,
			this.r3l17x2 * sizeTree + extraDaneX,
			this.r3l17y2 * sizeTree + extraDaneY,
			this.r3l17x3 * sizeTree + extraDaneX,
			this.r3l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.r3l16x1 * sizeTree + extraDaneX,
			this.r3l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l16x1 * sizeTree + extraDaneX,
			this.r3l16y1 * sizeTree + extraDaneY,
			this.r3l16x2 * sizeTree + extraDaneX,
			this.r3l16y2 * sizeTree + extraDaneY,
			this.r3l16x3 * sizeTree + extraDaneX,
			this.r3l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.r3l3x1 * sizeTree + extraDaneX,
			this.r3l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l3x1 * sizeTree + extraDaneX,
			this.r3l3y1 * sizeTree + extraDaneY,
			this.r3l3x2 * sizeTree + extraDaneX,
			this.r3l3y2 * sizeTree + extraDaneY,
			this.r3l3x3 * sizeTree + extraDaneX,
			this.r3l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r3l7x1 * sizeTree + extraDaneX,
			this.r3l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l7x1 * sizeTree + extraDaneX,
			this.r3l7y1 * sizeTree + extraDaneY,
			this.r3l7x2 * sizeTree + extraDaneX,
			this.r3l7y2 * sizeTree + extraDaneY,
			this.r3l7x3 * sizeTree + extraDaneX,
			this.r3l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r3l8x1 * sizeTree + extraDaneX,
			this.r3l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l8x1 * sizeTree + extraDaneX,
			this.r3l8y1 * sizeTree + extraDaneY,
			this.r3l8x2 * sizeTree + extraDaneX,
			this.r3l8y2 * sizeTree + extraDaneY,
			this.r3l8x3 * sizeTree + extraDaneX,
			this.r3l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r3l9x1 * sizeTree + extraDaneX,
			this.r3l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l9x1 * sizeTree + extraDaneX,
			this.r3l9y1 * sizeTree + extraDaneY,
			this.r3l9x2 * sizeTree + extraDaneX,
			this.r3l9y2 * sizeTree + extraDaneY,
			this.r3l9x3 * sizeTree + extraDaneX,
			this.r3l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r3l10x1 * sizeTree + extraDaneX,
			this.r3l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l10x1 * sizeTree + extraDaneX,
			this.r3l10y1 * sizeTree + extraDaneY,
			this.r3l10x2 * sizeTree + extraDaneX,
			this.r3l10y2 * sizeTree + extraDaneY,
			this.r3l10x3 * sizeTree + extraDaneX,
			this.r3l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r3l11x1 * sizeTree + extraDaneX,
			this.r3l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l11x1 * sizeTree + extraDaneX,
			this.r3l11y1 * sizeTree + extraDaneY,
			this.r3l11x2 * sizeTree + extraDaneX,
			this.r3l11y2 * sizeTree + extraDaneY,
			this.r3l11x3 * sizeTree + extraDaneX,
			this.r3l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r3l12x1 * sizeTree + extraDaneX,
			this.r3l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l12x1 * sizeTree + extraDaneX,
			this.r3l12y1 * sizeTree + extraDaneY,
			this.r3l12x2 * sizeTree + extraDaneX,
			this.r3l12y2 * sizeTree + extraDaneY,
			this.r3l12x3 * sizeTree + extraDaneX,
			this.r3l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.r3l15x1 * sizeTree + extraDaneX,
			this.r3l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l15x1 * sizeTree + extraDaneX,
			this.r3l15y1 * sizeTree + extraDaneY,
			this.r3l15x2 * sizeTree + extraDaneX,
			this.r3l15y2 * sizeTree + extraDaneY,
			this.r3l15x3 * sizeTree + extraDaneX,
			this.r3l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.r3l13x1 * sizeTree + extraDaneX,
			this.r3l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l13x1 * sizeTree + extraDaneX,
			this.r3l13y1 * sizeTree + extraDaneY,
			this.r3l13x2 * sizeTree + extraDaneX,
			this.r3l13y2 * sizeTree + extraDaneY,
			this.r3l13x3 * sizeTree + extraDaneX,
			this.r3l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r3l14x1 * sizeTree + extraDaneX,
			this.r3l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l14x1 * sizeTree + extraDaneX,
			this.r3l14y1 * sizeTree + extraDaneY,
			this.r3l14x2 * sizeTree + extraDaneX,
			this.r3l14y2 * sizeTree + extraDaneY,
			this.r3l14x3 * sizeTree + extraDaneX,
			this.r3l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.r3l6x1 * sizeTree + extraDaneX,
			this.r3l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l6x1 * sizeTree + extraDaneX,
			this.r3l6y1 * sizeTree + extraDaneY,
			this.r3l6x2 * sizeTree + extraDaneX,
			this.r3l6y2 * sizeTree + extraDaneY,
			this.r3l6x3 * sizeTree + extraDaneX,
			this.r3l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.r3l5x1 * sizeTree + extraDaneX,
			this.r3l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l5x1 * sizeTree + extraDaneX,
			this.r3l5y1 * sizeTree + extraDaneY,
			this.r3l5x2 * sizeTree + extraDaneX,
			this.r3l5y2 * sizeTree + extraDaneY,
			this.r3l5x3 * sizeTree + extraDaneX,
			this.r3l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.r3l4x1 * sizeTree + extraDaneX,
			this.r3l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l4x1 * sizeTree + extraDaneX,
			this.r3l4y1 * sizeTree + extraDaneY,
			this.r3l4x2 * sizeTree + extraDaneX,
			this.r3l4y2 * sizeTree + extraDaneY,
			this.r3l4x3 * sizeTree + extraDaneX,
			this.r3l4y3 * sizeTree + extraDaneY); // linia 4
		// linia 4
		endShape();
		// dziewiąta gałąź - end	

		// gałąź dziesiąta - na dole przy pniu drzewa - start
		//		stroke(200, 115, 0);
		beginShape();
		vertex(this.d1l12x1 * sizeTree + extraDaneX,
			this.d1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l12x1 * sizeTree + extraDaneX,
			this.d1l12y1 * sizeTree + extraDaneY,
			this.d1l12x2 * sizeTree + extraDaneX,
			this.d1l12y2 * sizeTree + extraDaneY,
			this.d1l12x3 * sizeTree + extraDaneX,
			this.d1l12y3 * sizeTree + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.d1l1x1 * sizeTree + extraDaneX,
			this.d1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l1x1 * sizeTree + extraDaneX,
			this.d1l1y1 * sizeTree + extraDaneY,
			this.d1l1x2 * sizeTree + extraDaneX,
			this.d1l1y2 * sizeTree + extraDaneY,
			this.d1l1x3 * sizeTree + extraDaneX,
			this.d1l1y3 * sizeTree + extraDaneY); //linia 1
		endShape();

		beginShape();
		vertex(this.d1l2x1 * sizeTree + extraDaneX,
			this.d1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l2x1 * sizeTree + extraDaneX,
			this.d1l2y1 * sizeTree + extraDaneY,
			this.d1l2x2 * sizeTree + extraDaneX,
			this.d1l2y2 * sizeTree + extraDaneY,
			this.d1l2x3 * sizeTree + extraDaneX,
			this.d1l2y3 * sizeTree + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.d1l10x1 * sizeTree + extraDaneX,
			this.d1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l10x1 * sizeTree + extraDaneX,
			this.d1l10y1 * sizeTree + extraDaneY,
			this.d1l10x2 * sizeTree + extraDaneX,
			this.d1l10y2 * sizeTree + extraDaneY,
			this.d1l10x3 * sizeTree + extraDaneX,
			this.d1l10y3 * sizeTree + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.d1l11x1 * sizeTree + extraDaneX,
			this.d1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l11x1 * sizeTree + extraDaneX,
			this.d1l11y1 * sizeTree + extraDaneY,
			this.d1l11x2 * sizeTree + extraDaneX,
			this.d1l11y2 * sizeTree + extraDaneY,
			this.d1l11x3 * sizeTree + extraDaneX,
			this.d1l11y3 * sizeTree + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.d1l8x1 * sizeTree + extraDaneX,
			this.d1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l8x1 * sizeTree + extraDaneX,
			this.d1l8y1 * sizeTree + extraDaneY,
			this.d1l8x2 * sizeTree + extraDaneX,
			this.d1l8y2 * sizeTree + extraDaneY,
			this.d1l8x3 * sizeTree + extraDaneX,
			this.d1l8y3 * sizeTree + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.d1l7x1 * sizeTree + extraDaneX,
			this.d1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l7x1 * sizeTree + extraDaneX,
			this.d1l7y1 * sizeTree + extraDaneY,
			this.d1l7x2 * sizeTree + extraDaneX,
			this.d1l7y2 * sizeTree + extraDaneY,
			this.d1l7x3 * sizeTree + extraDaneX,
			this.d1l7y3 * sizeTree + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.d1l6x1 * sizeTree + extraDaneX,
			this.d1l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l6x1 * sizeTree + extraDaneX,
			this.d1l6y1 * sizeTree + extraDaneY,
			this.d1l6x2 * sizeTree + extraDaneX,
			this.d1l6y2 * sizeTree + extraDaneY,
			this.d1l6x3 * sizeTree + extraDaneX,
			this.d1l6y3 * sizeTree + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.d1l3x1 * sizeTree + extraDaneX,
			this.d1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l3x1 * sizeTree + extraDaneX,
			this.d1l3y1 * sizeTree + extraDaneY,
			this.d1l3x2 * sizeTree + extraDaneX,
			this.d1l3y2 * sizeTree + extraDaneY,
			this.d1l3x3 * sizeTree + extraDaneX,
			this.d1l3y3 * sizeTree + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.d1l4x1 * sizeTree + extraDaneX,
			this.d1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l4x1 * sizeTree + extraDaneX,
			this.d1l4y1 * sizeTree + extraDaneY,
			this.d1l4x2 * sizeTree + extraDaneX,
			this.d1l4y2 * sizeTree + extraDaneY,
			this.d1l4x3 * sizeTree + extraDaneX,
			this.d1l4y3 * sizeTree + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.d1l5x1 * sizeTree + extraDaneX,
			this.d1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l5x1 * sizeTree + extraDaneX,
			this.d1l5y1 * sizeTree + extraDaneY,
			this.d1l5x2 * sizeTree + extraDaneX,
			this.d1l5y2 * sizeTree + extraDaneY,
			this.d1l5x3 * sizeTree + extraDaneX,
			this.d1l5y3 * sizeTree + extraDaneY); //linia 5
		endShape();
		// gałąź dziesiąta - end 		

		// extra gałąź - strat	
		//		stroke(255, 255, 100);	
		beginShape();
		vertex(this.exl9x1 * sizeTree + extraDaneX,
			this.exl9y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl9x1 * sizeTree + extraDaneX,
			this.exl9y1 * sizeTree + extraDaneY,
			this.exl9x2 * sizeTree + extraDaneX,
			this.exl9y2 * sizeTree + extraDaneY,
			this.exl9x3 * sizeTree + extraDaneX,
			this.exl9y3 * sizeTree + extraDaneY); // linia 9ex
		endShape();

		beginShape();
		vertex(this.exl10x1 * sizeTree + extraDaneX,
			this.exl10y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl10x1 * sizeTree + extraDaneX,
			this.exl10y1 * sizeTree + extraDaneY,
			this.exl10x2 * sizeTree + extraDaneX,
			this.exl10y2 * sizeTree + extraDaneY,
			this.exl10x3 * sizeTree + extraDaneX,
			this.exl10y3 * sizeTree + extraDaneY); // linia 10ex
		endShape();

		beginShape();
		vertex(this.exl11x1 * sizeTree + extraDaneX,
			this.exl11y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl11x1 * sizeTree + extraDaneX,
			this.exl11y1 * sizeTree + extraDaneY,
			this.exl11x2 * sizeTree + extraDaneX,
			this.exl11y2 * sizeTree + extraDaneY,
			this.exl11x3 * sizeTree + extraDaneX,
			this.exl11y3 * sizeTree + extraDaneY); // linia 11ex
		endShape();

		beginShape();
		vertex(this.exl4x1 * sizeTree + extraDaneX,
			this.exl4y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl4x1 * sizeTree + extraDaneX,
			this.exl4y1 * sizeTree + extraDaneY,
			this.exl4x2 * sizeTree + extraDaneX,
			this.exl4y2 * sizeTree + extraDaneY,
			this.exl4x3 * sizeTree + extraDaneX,
			this.exl4y3 * sizeTree + extraDaneY); // linia 4ex
		endShape();


		beginShape();
		vertex(this.exl6x1 * sizeTree + extraDaneX,
			this.exl6y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl6x1 * sizeTree + extraDaneX,
			this.exl6y1 * sizeTree + extraDaneY,
			this.exl6x2 * sizeTree + extraDaneX,
			this.exl6y2 * sizeTree + extraDaneY,
			this.exl6x3 * sizeTree + extraDaneX,
			this.exl6y3 * sizeTree + extraDaneY); // linia 6ex
		endShape();

		beginShape();
		vertex(this.exl5x1 * sizeTree + extraDaneX,
			this.exl5y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl5x1 * sizeTree + extraDaneX,
			this.exl5y1 * sizeTree + extraDaneY,
			this.exl5x2 * sizeTree + extraDaneX,
			this.exl5y2 * sizeTree + extraDaneY,
			this.exl5x3 * sizeTree + extraDaneX,
			this.exl5y3 * sizeTree + extraDaneY); // linia 5ex
		endShape();

		beginShape();
		vertex(this.exl12x1 * sizeTree + extraDaneX,
			this.exl12y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl12x1 * sizeTree + extraDaneX,
			this.exl12y1 * sizeTree + extraDaneY,
			this.exl12x2 * sizeTree + extraDaneX,
			this.exl12y2 * sizeTree + extraDaneY,
			this.exl12x3 * sizeTree + extraDaneX,
			this.exl12y3 * sizeTree + extraDaneY); // linia 12ex
		endShape();

		beginShape();
		vertex(this.exl11ax1 * sizeTree + extraDaneX,
			this.exl11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.exl11ax1 * sizeTree + extraDaneX,
			this.exl11ay1 * sizeTree + extraDaneY,
			this.exl11ax2 * sizeTree + extraDaneX,
			this.exl11ay2 * sizeTree + extraDaneY,
			this.exl11ax3 * sizeTree + extraDaneX,
			this.exl11ay3 * sizeTree + extraDaneY); // linia 11aex
		endShape();

		beginShape();
		vertex(this.exl1x1 * sizeTree + extraDaneX,
			this.exl1y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl1x1 * sizeTree + extraDaneX,
			this.exl1y1 * sizeTree + extraDaneY,
			this.exl1x2 * sizeTree + extraDaneX,
			this.exl1y2 * sizeTree + extraDaneY,
			this.exl1x3 * sizeTree + extraDaneX,
			this.exl1y3 * sizeTree + extraDaneY); // linia 1ex
		endShape();

		beginShape();
		vertex(this.exl2x1 * sizeTree + extraDaneX,
			this.exl2y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl2x1 * sizeTree + extraDaneX,
			this.exl2y1 * sizeTree + extraDaneY,
			this.exl2x2 * sizeTree + extraDaneX,
			this.exl2y2 * sizeTree + extraDaneY,
			this.exl2x3 * sizeTree + extraDaneX,
			this.exl2y3 * sizeTree + extraDaneY); // linia 2ex
		endShape();

		beginShape();
		vertex(this.exl3x1 * sizeTree + extraDaneX,
			this.exl3y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl3x1 * sizeTree + extraDaneX,
			this.exl3y1 * sizeTree + extraDaneY,
			this.exl3x2 * sizeTree + extraDaneX,
			this.exl3y2 * sizeTree + extraDaneY,
			this.exl3x3 * sizeTree + extraDaneX,
			this.exl3y3 * sizeTree + extraDaneY); // linia 3ex
		endShape();

		beginShape();
		vertex(this.exl8x1 * sizeTree + extraDaneX,
			this.exl8y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl8x1 * sizeTree + extraDaneX,
			this.exl8y1 * sizeTree + extraDaneY,
			this.exl8x2 * sizeTree + extraDaneX,
			this.exl8y2 * sizeTree + extraDaneY,
			this.exl8x3 * sizeTree + extraDaneX,
			this.exl8y3 * sizeTree + extraDaneY); //linia 8ex
		endShape();

		beginShape();
		vertex(this.exl7x1 * sizeTree + extraDaneX,
			this.exl7y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl7x1 * sizeTree + extraDaneX,
			this.exl7y1 * sizeTree + extraDaneY,
			this.exl7x2 * sizeTree + extraDaneX,
			this.exl7y2 * sizeTree + extraDaneY,
			this.exl7x3 * sizeTree + extraDaneX,
			this.exl7y3 * sizeTree + extraDaneY); //linia 7ex
		endShape();

		beginShape();
		vertex(this.exl13x1 * sizeTree + extraDaneX,
			this.exl13y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl13x1 * sizeTree + extraDaneX,
			this.exl13y1 * sizeTree + extraDaneY,
			this.exl13x2 * sizeTree + extraDaneX,
			this.exl13y2 * sizeTree + extraDaneY,
			this.exl13x3 * sizeTree + extraDaneX,
			this.exl13y3 * sizeTree + extraDaneY); //linia 13ex
		endShape();
		// extra gałąź - end		
	}

	showTreeNo3Line1() {
		let sizeTree = this.sizeTreeNo3Line1;
		let extraDaneX = 0;
		let extraDaneY = 0;
		noStroke(0);
		fill(treeColor2);

		// pień drzewa numer 3 - liczone od lewy, dolny róg pnia drzewa - wokół tych punktów nie tworzymy liści - start
		beginShape();
		vertex(this.m3l1x1 * sizeTree + extraDaneX,
			this.m3l1y1 * sizeTree + extraDaneY);

		bezierVertex(this.m3l1x1 * sizeTree + extraDaneX,
			this.m3l1y1 * sizeTree + extraDaneY,
			this.m3l1x2 * sizeTree + extraDaneX,
			this.m3l1y2 * sizeTree + extraDaneY,
			this.m3l1x3 * sizeTree + extraDaneX,
			this.m3l1y3 * sizeTree + extraDaneY); // m3l1 - linia 1

		bezierVertex(this.m3l2x1 * sizeTree + extraDaneX,
			this.m3l2y1 * sizeTree + extraDaneY,
			this.m3l2x2 * sizeTree + extraDaneX,
			this.m3l2y2 * sizeTree + extraDaneY,
			this.m3l2x3 * sizeTree + extraDaneX,
			this.m3l2y3 * sizeTree + extraDaneY); // m3l2 - linia 2

		bezierVertex(this.m3l3x1 * sizeTree + extraDaneX,
			this.m3l3y1 * sizeTree + extraDaneY,
			this.m3l3x2 * sizeTree + extraDaneX,
			this.m3l3y2 * sizeTree + extraDaneY,
			this.m3l3x3 * sizeTree + extraDaneX,
			this.m3l3y3 * sizeTree + extraDaneY); // m3l3 - linia 3

		bezierVertex(this.m3l4x1 * sizeTree + extraDaneX,
			this.m3l4y1 * sizeTree + extraDaneY,
			this.m3l4x2 * sizeTree + extraDaneX,
			this.m3l4y2 * sizeTree + extraDaneY,
			this.m3l4x3 * sizeTree + extraDaneX,
			this.m3l4y3 * sizeTree + extraDaneY); // m3l4 - linia 4);	// m3l4 - linia 4

		bezierVertex(this.m3l5x1 * sizeTree + extraDaneX,
			this.m3l5y1 * sizeTree + extraDaneY,
			this.m3l5x2 * sizeTree + extraDaneX,
			this.m3l5y2 * sizeTree + extraDaneY,
			this.m3l5x3 * sizeTree + extraDaneX,
			this.m3l5y3 * sizeTree + extraDaneY); // m3l5 - linia 5

		bezierVertex(this.m3l6x1 * sizeTree + extraDaneX,
			this.m3l6y1 * sizeTree + extraDaneY,
			this.m3l6x2 * sizeTree + extraDaneX,
			this.m3l6y2 * sizeTree + extraDaneY,
			this.m3l6x3 * sizeTree + extraDaneX,
			this.m3l6y3 * sizeTree + extraDaneY); // m3l6 - linia 6

		bezierVertex(this.m3l7x1 * sizeTree + extraDaneX,
			this.m3l7y1 * sizeTree + extraDaneY,
			this.m3l7x2 * sizeTree + extraDaneX,
			this.m3l7y2 * sizeTree + extraDaneY,
			this.m3l7x3 * sizeTree + extraDaneX,
			this.m3l7y3 * sizeTree + extraDaneY); // m3l7 - linia 7

		bezierVertex(this.m3l8x1 * sizeTree + extraDaneX,
			this.m3l8y1 * sizeTree + extraDaneY,
			this.m3l8x2 * sizeTree + extraDaneX,
			this.m3l8y2 * sizeTree + extraDaneY,
			this.m3l8x3 * sizeTree + extraDaneX,
			this.m3l8y3 * sizeTree + extraDaneY); // m3l8 - linia 8

		bezierVertex(this.m3l9x1 * sizeTree + extraDaneX,
			this.m3l9y1 * sizeTree + extraDaneY,
			this.m3l9x2 * sizeTree + extraDaneX,
			this.m3l9y2 * sizeTree + extraDaneY,
			this.m3l9x3 * sizeTree + extraDaneX,
			this.m3l9y3 * sizeTree + extraDaneY); // m3l9 - linia 9

		bezierVertex(this.m3l10x1 * sizeTree + extraDaneX,
			this.m3l10y1 * sizeTree + extraDaneY,
			this.m3l10x2 * sizeTree + extraDaneX,
			this.m3l10y2 * sizeTree + extraDaneY,
			this.m3l10x3 * sizeTree + extraDaneX,
			this.m3l10y3 * sizeTree + extraDaneY); // m3l10 - linia 10

		bezierVertex(this.m3l11x1 * sizeTree + extraDaneX,
			this.m3l11y1 * sizeTree + extraDaneY,
			this.m3l11x2 * sizeTree + extraDaneX,
			this.m3l11y2 * sizeTree + extraDaneY,
			this.m3l11x3 * sizeTree + extraDaneX,
			this.m3l11y3 * sizeTree + extraDaneY); // m3l11 - linia 11

		bezierVertex(this.m3l12x1 * sizeTree + extraDaneX,
			this.m3l12y1 * sizeTree + extraDaneY,
			this.m3l12x2 * sizeTree + extraDaneX,
			this.m3l12y2 * sizeTree + extraDaneY,
			this.m3l12x3 * sizeTree + extraDaneX,
			this.m3l12y3 * sizeTree + extraDaneY); // m3l12 - linia 12

		bezierVertex(this.m3l13x1 * sizeTree + extraDaneX,
			this.m3l13y1 * sizeTree + extraDaneY,
			this.m3l13x2 * sizeTree + extraDaneX,
			this.m3l13y2 * sizeTree + extraDaneY,
			this.m3l13x3 * sizeTree + extraDaneX,
			this.m3l13y3 * sizeTree + extraDaneY); // m3l13 - linia 13

		bezierVertex(this.m3l14x1 * sizeTree + extraDaneX,
			this.m3l14y1 * sizeTree + extraDaneY,
			this.m3l14x2 * sizeTree + extraDaneX,
			this.m3l14y2 * sizeTree + extraDaneY,
			this.m3l14x3 * sizeTree + extraDaneX,
			this.m3l14y3 * sizeTree + extraDaneY); // m3l14 - linia 14

		bezierVertex(this.m3l15x1 * sizeTree + extraDaneX,
			this.m3l15y1 * sizeTree + extraDaneY,
			this.m3l15x2 * sizeTree + extraDaneX,
			this.m3l15y2 * sizeTree + extraDaneY,
			this.m3l15x3 * sizeTree + extraDaneX,
			this.m3l15y3 * sizeTree + extraDaneY); // m3l15 - linia 15

		bezierVertex(this.m3l16x1 * sizeTree + extraDaneX,
			this.m3l16y1 * sizeTree + extraDaneY,
			this.m3l16x2 * sizeTree + extraDaneX,
			this.m3l16y2 * sizeTree + extraDaneY,
			this.m3l16x3 * sizeTree + extraDaneX,
			this.m3l16y3 * sizeTree + extraDaneY); // m3l16 - linia 16

		bezierVertex(this.m3l17x1 * sizeTree + extraDaneX,
			this.m3l17y1 * sizeTree + extraDaneY,
			this.m3l17x2 * sizeTree + extraDaneX,
			this.m3l17y2 * sizeTree + extraDaneY,
			this.m3l17x3 * sizeTree + extraDaneX,
			this.m3l17y3 * sizeTree + extraDaneY); // m3l17 - linia 17

		bezierVertex(this.m3l18x1 * sizeTree + extraDaneX,
			this.m3l18y1 * sizeTree + extraDaneY,
			this.m3l18x2 * sizeTree + extraDaneX,
			this.m3l18y2 * sizeTree + extraDaneY,
			this.m3l18x3 * sizeTree + extraDaneX,
			this.m3l18y3 * sizeTree + extraDaneY); // m3l18 - linia 18

		bezierVertex(this.m3l19x1 * sizeTree + extraDaneX,
			this.m3l19y1 * sizeTree + extraDaneY,
			this.m3l19x2 * sizeTree + extraDaneX,
			this.m3l19y2 * sizeTree + extraDaneY,
			this.m3l19x3 * sizeTree + extraDaneX,
			this.m3l19y3 * sizeTree + extraDaneY); // m3l19 - linia 19

		bezierVertex(this.m3l20x1 * sizeTree + extraDaneX,
			this.m3l20y1 * sizeTree + extraDaneY,
			this.m3l20x2 * sizeTree + extraDaneX,
			this.m3l20y2 * sizeTree + extraDaneY,
			this.m3l20x3 * sizeTree + extraDaneX,
			this.m3l20y3 * sizeTree + extraDaneY); // m3l20 - linia 20

		bezierVertex(this.m3l21x1 * sizeTree + extraDaneX,
			this.m3l21y1 * sizeTree + extraDaneY,
			this.m3l21x2 * sizeTree + extraDaneX,
			this.m3l21y2 * sizeTree + extraDaneY,
			this.m3l21x3 * sizeTree + extraDaneX,
			this.m3l21y3 * sizeTree + extraDaneY); // m3l21 - linia 21
		endShape();
		// pień drzewa numer - end

		strokeWeight(strokeWeightTreeNo3Line1);
		// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
		//		stroke(255);
		stroke(treeColor2);
		noFill();
		beginShape();
		vertex(this.r1l1x1 * sizeTree + extraDaneX,
			this.r1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l1x1 * sizeTree + extraDaneX,
			this.r1l1y1 * sizeTree + extraDaneY,
			this.r1l1x2 * sizeTree + extraDaneX,
			this.r1l1y2 * sizeTree + extraDaneY,
			this.r1l1x3 * sizeTree + extraDaneX,
			this.r1l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		endShape();
		beginShape();
		vertex(this.r1l7x1 * sizeTree + extraDaneX,
			this.r1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l7x1 * sizeTree + extraDaneX,
			this.r1l7y1 * sizeTree + extraDaneY,
			this.r1l7x2 * sizeTree + extraDaneX,
			this.r1l7y2 * sizeTree + extraDaneY,
			this.r1l7x3 * sizeTree + extraDaneX,
			this.r1l7y3 * sizeTree + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.r1l28x1 * sizeTree + extraDaneX,
			this.r1l28y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l28x1 * sizeTree + extraDaneX,
			this.r1l28y1 * sizeTree + extraDaneY,
			this.r1l28x2 * sizeTree + extraDaneX,
			this.r1l28y2 * sizeTree + extraDaneY,
			this.r1l28x3 * sizeTree + extraDaneX,
			this.r1l28y3 * sizeTree + extraDaneY); //linia 28
		endShape();

		beginShape();
		vertex(this.r1l29x1 * sizeTree + extraDaneX,
			this.r1l29y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l29x1 * sizeTree + extraDaneX,
			this.r1l29y1 * sizeTree + extraDaneY,
			this.r1l29x2 * sizeTree + extraDaneX,
			this.r1l29y2 * sizeTree + extraDaneY,
			this.r1l29x3 * sizeTree + extraDaneX,
			this.r1l29y3 * sizeTree + extraDaneY); //linia 29
		endShape();

		beginShape();
		vertex(this.r1l30x1 * sizeTree + extraDaneX,
			this.r1l30y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l30x1 * sizeTree + extraDaneX,
			this.r1l30y1 * sizeTree + extraDaneY,
			this.r1l30x2 * sizeTree + extraDaneX,
			this.r1l30y2 * sizeTree + extraDaneY,
			this.r1l30x3 * sizeTree + extraDaneX,
			this.r1l30y3 * sizeTree + extraDaneY); //linia 30
		endShape();

		beginShape();
		vertex(this.r1l2x1 * sizeTree + extraDaneX,
			this.r1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l2x1 * sizeTree + extraDaneX,
			this.r1l2y1 * sizeTree + extraDaneY,
			this.r1l2x2 * sizeTree + extraDaneX,
			this.r1l2y2 * sizeTree + extraDaneY,
			this.r1l2x3 * sizeTree + extraDaneX,
			this.r1l2y3 * sizeTree + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.r1l8x1 * sizeTree + extraDaneX,
			this.r1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l8x1 * sizeTree + extraDaneX,
			this.r1l8y1 * sizeTree + extraDaneY,
			this.r1l8x2 * sizeTree + extraDaneX,
			this.r1l8y2 * sizeTree + extraDaneY,
			this.r1l8x3 * sizeTree + extraDaneX,
			this.r1l8y3 * sizeTree + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.r1l2ax1 * sizeTree + extraDaneX,
			this.r1l2ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l2ax1 * sizeTree + extraDaneX,
			this.r1l2ay1 * sizeTree + extraDaneY,
			this.r1l2ax2 * sizeTree + extraDaneX,
			this.r1l2ay2 * sizeTree + extraDaneY,
			this.r1l2ax3 * sizeTree + extraDaneX,
			this.r1l2ay3 * sizeTree + extraDaneY); //linia 2a
		endShape();

		beginShape();
		vertex(this.r1l3x1 * sizeTree + extraDaneX,
			this.r1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l3x1 * sizeTree + extraDaneX,
			this.r1l3y1 * sizeTree + extraDaneY,
			this.r1l3x2 * sizeTree + extraDaneX,
			this.r1l3y2 * sizeTree + extraDaneY,
			this.r1l3x3 * sizeTree + extraDaneX,
			this.r1l3y3 * sizeTree + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.r1l4x1 * sizeTree + extraDaneX,
			this.r1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l4x1 * sizeTree + extraDaneX,
			this.r1l4y1 * sizeTree + extraDaneY,
			this.r1l4x2 * sizeTree + extraDaneX,
			this.r1l4y2 * sizeTree + extraDaneY,
			this.r1l4x3 * sizeTree + extraDaneX,
			this.r1l4y3 * sizeTree + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.r1l5x1 * sizeTree + extraDaneX,
			this.r1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l5x1 * sizeTree + extraDaneX,
			this.r1l5y1 * sizeTree + extraDaneY,
			this.r1l5x2 * sizeTree + extraDaneX,
			this.r1l5y2 * sizeTree + extraDaneY,
			this.r1l5x3 * sizeTree + extraDaneX,
			this.r1l5y3 * sizeTree + extraDaneY); //linia 5
		endShape();

		beginShape();
		vertex(this.r1l6x1 * sizeTree + extraDaneX,
			this.r1l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l6x1 * sizeTree + extraDaneX,
			this.r1l6y1 * sizeTree + extraDaneY,
			this.r1l6x2 * sizeTree + extraDaneX,
			this.r1l6y2 * sizeTree + extraDaneY,
			this.r1l6x3 * sizeTree + extraDaneX,
			this.r1l6y3 * sizeTree + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.r1l9x1 * sizeTree + extraDaneX,
			this.r1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l9x1 * sizeTree + extraDaneX,
			this.r1l9y1 * sizeTree + extraDaneY,
			this.r1l9x2 * sizeTree + extraDaneX,
			this.r1l9y2 * sizeTree + extraDaneY,
			this.r1l9x3 * sizeTree + extraDaneX,
			this.r1l9y3 * sizeTree + extraDaneY); //linia 9
		endShape();

		beginShape();
		vertex(this.r1l10x1 * sizeTree + extraDaneX,
			this.r1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l10x1 * sizeTree + extraDaneX,
			this.r1l10y1 * sizeTree + extraDaneY,
			this.r1l10x2 * sizeTree + extraDaneX,
			this.r1l10y2 * sizeTree + extraDaneY,
			this.r1l10x3 * sizeTree + extraDaneX,
			this.r1l10y3 * sizeTree + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.r1l11x1 * sizeTree + extraDaneX,
			this.r1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l11x1 * sizeTree + extraDaneX,
			this.r1l11y1 * sizeTree + extraDaneY,
			this.r1l11x2 * sizeTree + extraDaneX,
			this.r1l11y2 * sizeTree + extraDaneY,
			this.r1l11x3 * sizeTree + extraDaneX,
			this.r1l11y3 * sizeTree + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.r1l14x1 * sizeTree + extraDaneX,
			this.r1l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l14x1 * sizeTree + extraDaneX,
			this.r1l14y1 * sizeTree + extraDaneY,
			this.r1l14x2 * sizeTree + extraDaneX,
			this.r1l14y2 * sizeTree + extraDaneY,
			this.r1l14x3 * sizeTree + extraDaneX,
			this.r1l14y3 * sizeTree + extraDaneY); //linia 14
		endShape();

		beginShape();
		vertex(this.r1l13x1 * sizeTree + extraDaneX,
			this.r1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l13x1 * sizeTree + extraDaneX,
			this.r1l13y1 * sizeTree + extraDaneY,
			this.r1l13x2 * sizeTree + extraDaneX,
			this.r1l13y2 * sizeTree + extraDaneY,
			this.r1l13x3 * sizeTree + extraDaneX,
			this.r1l13y3 * sizeTree + extraDaneY); //linia 13
		endShape();

		beginShape();
		vertex(this.r1l12x1 * sizeTree + extraDaneX,
			this.r1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l12x1 * sizeTree + extraDaneX,
			this.r1l12y1 * sizeTree + extraDaneY,
			this.r1l12x2 * sizeTree + extraDaneX,
			this.r1l12y2 * sizeTree + extraDaneY,
			this.r1l12x3 * sizeTree + extraDaneX,
			this.r1l12y3 * sizeTree + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.r1l15x1 * sizeTree + extraDaneX,
			this.r1l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l15x1 * sizeTree + extraDaneX,
			this.r1l15y1 * sizeTree + extraDaneY,
			this.r1l15x2 * sizeTree + extraDaneX,
			this.r1l15y2 * sizeTree + extraDaneY,
			this.r1l15x3 * sizeTree + extraDaneX,
			this.r1l15y3 * sizeTree + extraDaneY); //linia 15
		endShape();

		beginShape();
		vertex(this.r1l17x1 * sizeTree + extraDaneX,
			this.r1l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l17x1 * sizeTree + extraDaneX,
			this.r1l17y1 * sizeTree + extraDaneY,
			this.r1l17x2 * sizeTree + extraDaneX,
			this.r1l17y2 * sizeTree + extraDaneY,
			this.r1l17x3 * sizeTree + extraDaneX,
			this.r1l17y3 * sizeTree + extraDaneY); //linia 17
		endShape();

		beginShape();
		vertex(this.r1l19x1 * sizeTree + extraDaneX,
			this.r1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l19x1 * sizeTree + extraDaneX,
			this.r1l19y1 * sizeTree + extraDaneY,
			this.r1l19x2 * sizeTree + extraDaneX,
			this.r1l19y2 * sizeTree + extraDaneY,
			this.r1l19x3 * sizeTree + extraDaneX,
			this.r1l19y3 * sizeTree + extraDaneY); //linia 19
		endShape();

		beginShape();
		vertex(this.r1l18x1 * sizeTree + extraDaneX,
			this.r1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l18x1 * sizeTree + extraDaneX,
			this.r1l18y1 * sizeTree + extraDaneY,
			this.r1l18x2 * sizeTree + extraDaneX,
			this.r1l18y2 * sizeTree + extraDaneY,
			this.r1l18x3 * sizeTree + extraDaneX,
			this.r1l18y3 * sizeTree + extraDaneY); //linia 18
		endShape();

		beginShape();
		vertex(this.r1l17ax1 * sizeTree + extraDaneX,
			this.r1l17ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l17ax1 * sizeTree + extraDaneX,
			this.r1l17ay1 * sizeTree + extraDaneY,
			this.r1l17ax2 * sizeTree + extraDaneX,
			this.r1l17ay2 * sizeTree + extraDaneY,
			this.r1l17ax3 * sizeTree + extraDaneX,
			this.r1l17ay3 * sizeTree + extraDaneY); //linia 17a
		endShape();

		beginShape();
		vertex(this.r1l22x1 * sizeTree + extraDaneX,
			this.r1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l22x1 * sizeTree + extraDaneX,
			this.r1l22y1 * sizeTree + extraDaneY,
			this.r1l22x2 * sizeTree + extraDaneX,
			this.r1l22y2 * sizeTree + extraDaneY,
			this.r1l22x3 * sizeTree + extraDaneX,
			this.r1l22y3 * sizeTree + extraDaneY); //linia 22
		endShape();

		beginShape();
		vertex(this.r1l23x1 * sizeTree + extraDaneX,
			this.r1l23y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l23x1 * sizeTree + extraDaneX,
			this.r1l23y1 * sizeTree + extraDaneY,
			this.r1l23x2 * sizeTree + extraDaneX,
			this.r1l23y2 * sizeTree + extraDaneY,
			this.r1l23x3 * sizeTree + extraDaneX,
			this.r1l23y3 * sizeTree + extraDaneY); //linia 23


		beginShape();
		vertex(this.r1l24x1 * sizeTree + extraDaneX,
			this.r1l24y1 * sizeTree + extraDaneY);
		bezierVertex(this.r1l24x1 * sizeTree + extraDaneX,
			this.r1l24y1 * sizeTree + extraDaneY,
			this.r1l24x2 * sizeTree + extraDaneX,
			this.r1l24y2 * sizeTree + extraDaneY,
			this.r1l24x3 * sizeTree + extraDaneX,
			this.r1l24y3 * sizeTree + extraDaneY); //linia 24
		endShape();

		// pierwsza gałąź - end	

		// druga gałąź - gałąź fioletowa 1 - start
		//		stroke(0, 0, 255);
		beginShape();
		vertex(this.p1l1x1 * sizeTree + extraDaneX,
			this.p1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l1x1 * sizeTree + extraDaneX,
			this.p1l1y1 * sizeTree + extraDaneY,
			this.p1l1x2 * sizeTree + extraDaneX,
			this.p1l1y2 * sizeTree + extraDaneY,
			this.p1l1x3 * sizeTree + extraDaneX,
			this.p1l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p1l7x1 * sizeTree + extraDaneX,
			this.p1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l7x1 * sizeTree + extraDaneX,
			this.p1l7y1 * sizeTree + extraDaneY,
			this.p1l7x2 * sizeTree + extraDaneX,
			this.p1l7y2 * sizeTree + extraDaneY,
			this.p1l7x3 * sizeTree + extraDaneX,
			this.p1l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p1l8x1 * sizeTree + extraDaneX,
			this.p1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l8x1 * sizeTree + extraDaneX,
			this.p1l8y1 * sizeTree + extraDaneY,
			this.p1l8x2 * sizeTree + extraDaneX,
			this.p1l8y2 * sizeTree + extraDaneY,
			this.p1l8x3 * sizeTree + extraDaneX,
			this.p1l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p1l9x1 * sizeTree + extraDaneX,
			this.p1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l9x1 * sizeTree + extraDaneX,
			this.p1l9y1 * sizeTree + extraDaneY,
			this.p1l9x2 * sizeTree + extraDaneX,
			this.p1l9y2 * sizeTree + extraDaneY,
			this.p1l9x3 * sizeTree + extraDaneX,
			this.p1l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.p1l10x1 * sizeTree + extraDaneX,
			this.p1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l10x1 * sizeTree + extraDaneX,
			this.p1l10y1 * sizeTree + extraDaneY,
			this.p1l10x2 * sizeTree + extraDaneX,
			this.p1l10y2 * sizeTree + extraDaneY,
			this.p1l10x3 * sizeTree + extraDaneX,
			this.p1l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p1l11ax1 * sizeTree + extraDaneX,
			this.p1l11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l11ax1 * sizeTree + extraDaneX,
			this.p1l11ay1 * sizeTree + extraDaneY,
			this.p1l11ax2 * sizeTree + extraDaneX,
			this.p1l11ay2 * sizeTree + extraDaneY,
			this.p1l11ax3 * sizeTree + extraDaneX,
			this.p1l11ay3 * sizeTree + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.p1l11bx1 * sizeTree + extraDaneX,
			this.p1l11by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l11bx1 * sizeTree + extraDaneX,
			this.p1l11by1 * sizeTree + extraDaneY,
			this.p1l11bx2 * sizeTree + extraDaneX,
			this.p1l11by2 * sizeTree + extraDaneY,
			this.p1l11bx3 * sizeTree + extraDaneX,
			this.p1l11by3 * sizeTree + extraDaneY); // linia 11b
		endShape();

		beginShape();
		vertex(this.p1l12x1 * sizeTree + extraDaneX,
			this.p1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l12x1 * sizeTree + extraDaneX,
			this.p1l12y1 * sizeTree + extraDaneY,
			this.p1l12x2 * sizeTree + extraDaneX,
			this.p1l12y2 * sizeTree + extraDaneY,
			this.p1l12x3 * sizeTree + extraDaneX,
			this.p1l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p1l13x1 * sizeTree + extraDaneX,
			this.p1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l13x1 * sizeTree + extraDaneX,
			this.p1l13y1 * sizeTree + extraDaneY,
			this.p1l13x2 * sizeTree + extraDaneX,
			this.p1l13y2 * sizeTree + extraDaneY,
			this.p1l13x3 * sizeTree + extraDaneX,
			this.p1l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p1l14x1 * sizeTree + extraDaneX,
			this.p1l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l14x1 * sizeTree + extraDaneX,
			this.p1l14y1 * sizeTree + extraDaneY,
			this.p1l14x2 * sizeTree + extraDaneX,
			this.p1l14y2 * sizeTree + extraDaneY,
			this.p1l14x3 * sizeTree + extraDaneX,
			this.p1l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p1l15x1 * sizeTree + extraDaneX,
			this.p1l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l15x1 * sizeTree + extraDaneX,
			this.p1l15y1 * sizeTree + extraDaneY,
			this.p1l15x2 * sizeTree + extraDaneX,
			this.p1l15y2 * sizeTree + extraDaneY,
			this.p1l15x3 * sizeTree + extraDaneX,
			this.p1l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p1l16x1 * sizeTree + extraDaneX,
			this.p1l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l16x1 * sizeTree + extraDaneX,
			this.p1l16y1 * sizeTree + extraDaneY,
			this.p1l16x2 * sizeTree + extraDaneX,
			this.p1l16y2 * sizeTree + extraDaneY,
			this.p1l16x3 * sizeTree + extraDaneX,
			this.p1l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.p1l17ax1 * sizeTree + extraDaneX,
			this.p1l17ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l17ax1 * sizeTree + extraDaneX,
			this.p1l17ay1 * sizeTree + extraDaneY,
			this.p1l17ax2 * sizeTree + extraDaneX,
			this.p1l17ay2 * sizeTree + extraDaneY,
			this.p1l17ax3 * sizeTree + extraDaneX,
			this.p1l17ay3 * sizeTree + extraDaneY); // linia 17a
		endShape();

		beginShape();
		vertex(this.p1l17bx1 * sizeTree + extraDaneX,
			this.p1l17by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l17bx1 * sizeTree + extraDaneX,
			this.p1l17by1 * sizeTree + extraDaneY,
			this.p1l17bx2 * sizeTree + extraDaneX,
			this.p1l17by2 * sizeTree + extraDaneY,
			this.p1l17bx3 * sizeTree + extraDaneX,
			this.p1l17by3 * sizeTree + extraDaneY); // linia 17b
		endShape();

		beginShape();
		vertex(this.p1l18x1 * sizeTree + extraDaneX,
			this.p1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l18x1 * sizeTree + extraDaneX,
			this.p1l18y1 * sizeTree + extraDaneY,
			this.p1l18x2 * sizeTree + extraDaneX,
			this.p1l18y2 * sizeTree + extraDaneY,
			this.p1l18x3 * sizeTree + extraDaneX,
			this.p1l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.p1l19x1 * sizeTree + extraDaneX,
			this.p1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l19x1 * sizeTree + extraDaneX,
			this.p1l19y1 * sizeTree + extraDaneY,
			this.p1l19x2 * sizeTree + extraDaneX,
			this.p1l19y2 * sizeTree + extraDaneY,
			this.p1l19x3 * sizeTree + extraDaneX,
			this.p1l19y3 * sizeTree + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.p1l18ax1 * sizeTree + extraDaneX,
			this.p1l18ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l18ax1 * sizeTree + extraDaneX,
			this.p1l18ay1 * sizeTree + extraDaneY,
			this.p1l18ax2 * sizeTree + extraDaneX,
			this.p1l18ay2 * sizeTree + extraDaneY,
			this.p1l18ax3 * sizeTree + extraDaneX,
			this.p1l18ay3 * sizeTree + extraDaneY); // linia 18a
		endShape();

		beginShape();
		vertex(this.p1l20x1 * sizeTree + extraDaneX,
			this.p1l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l20x1 * sizeTree + extraDaneX,
			this.p1l20y1 * sizeTree + extraDaneY,
			this.p1l20x2 * sizeTree + extraDaneX,
			this.p1l20y2 * sizeTree + extraDaneY,
			this.p1l20x3 * sizeTree + extraDaneX,
			this.p1l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.p1l21x1 * sizeTree + extraDaneX,
			this.p1l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l21x1 * sizeTree + extraDaneX,
			this.p1l21y1 * sizeTree + extraDaneY,
			this.p1l21x2 * sizeTree + extraDaneX,
			this.p1l21y2 * sizeTree + extraDaneY,
			this.p1l21x3 * sizeTree + extraDaneX,
			this.p1l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.p1l22x1 * sizeTree + extraDaneX,
			this.p1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l22x1 * sizeTree + extraDaneX,
			this.p1l22y1 * sizeTree + extraDaneY,
			this.p1l22x2 * sizeTree + extraDaneX,
			this.p1l22y2 * sizeTree + extraDaneY,
			this.p1l22x3 * sizeTree + extraDaneX,
			this.p1l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.p1l23x1 * sizeTree + extraDaneX,
			this.p1l23y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l23x1 * sizeTree + extraDaneX,
			this.p1l23y1 * sizeTree + extraDaneY,
			this.p1l23x2 * sizeTree + extraDaneX,
			this.p1l23y2 * sizeTree + extraDaneY,
			this.p1l23x3 * sizeTree + extraDaneX,
			this.p1l23y3 * sizeTree + extraDaneY); // linia 23
		endShape();

		beginShape();
		vertex(this.p1l24x1 * sizeTree + extraDaneX,
			this.p1l24y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l24x1 * sizeTree + extraDaneX,
			this.p1l24y1 * sizeTree + extraDaneY,
			this.p1l24x2 * sizeTree + extraDaneX,
			this.p1l24y2 * sizeTree + extraDaneY,
			this.p1l24x3 * sizeTree + extraDaneX,
			this.p1l24y3 * sizeTree + extraDaneY); // linia 24
		endShape();

		beginShape();
		vertex(this.p1l25x1 * sizeTree + extraDaneX,
			this.p1l25y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l25x1 * sizeTree + extraDaneX,
			this.p1l25y1 * sizeTree + extraDaneY,
			this.p1l25x2 * sizeTree + extraDaneX,
			this.p1l25y2 * sizeTree + extraDaneY,
			this.p1l25x3 * sizeTree + extraDaneX,
			this.p1l25y3 * sizeTree + extraDaneY); // linia 25
		endShape();

		beginShape();
		vertex(this.p1l27x1 * sizeTree + extraDaneX,
			this.p1l27y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l27x1 * sizeTree + extraDaneX,
			this.p1l27y1 * sizeTree + extraDaneY,
			this.p1l27x2 * sizeTree + extraDaneX,
			this.p1l27y2 * sizeTree + extraDaneY,
			this.p1l27x3 * sizeTree + extraDaneX,
			this.p1l27y3 * sizeTree + extraDaneY); // linia 27
		endShape();

		beginShape();
		vertex(this.p1l28x1 * sizeTree + extraDaneX,
			this.p1l28y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l28x1 * sizeTree + extraDaneX,
			this.p1l28y1 * sizeTree + extraDaneY,
			this.p1l28x2 * sizeTree + extraDaneX,
			this.p1l28y2 * sizeTree + extraDaneY,
			this.p1l28x3 * sizeTree + extraDaneX,
			this.p1l28y3 * sizeTree + extraDaneY); // linia 28
		endShape();

		beginShape();
		vertex(this.p1l29ax1 * sizeTree + extraDaneX,
			this.p1l29ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l29ax1 * sizeTree + extraDaneX,
			this.p1l29ay1 * sizeTree + extraDaneY,
			this.p1l29ax2 * sizeTree + extraDaneX,
			this.p1l29ay2 * sizeTree + extraDaneY,
			this.p1l29ax3 * sizeTree + extraDaneX,
			this.p1l29ay3 * sizeTree + extraDaneY); // linia 29a
		endShape();

		beginShape();
		vertex(this.p1l29bx1 * sizeTree + extraDaneX,
			this.p1l29by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l29bx1 * sizeTree + extraDaneX,
			this.p1l29by1 * sizeTree + extraDaneY,
			this.p1l29bx2 * sizeTree + extraDaneX,
			this.p1l29by2 * sizeTree + extraDaneY,
			this.p1l29bx3 * sizeTree + extraDaneX,
			this.p1l29by3 * sizeTree + extraDaneY); // linia 29b
		endShape();

		beginShape();
		vertex(this.p1l30ax1 * sizeTree + extraDaneX,
			this.p1l30ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l30ax1 * sizeTree + extraDaneX,
			this.p1l30ay1 * sizeTree + extraDaneY,
			this.p1l30ax2 * sizeTree + extraDaneX,
			this.p1l30ay2 * sizeTree + extraDaneY,
			this.p1l30ax3 * sizeTree + extraDaneX,
			this.p1l30ay3 * sizeTree + extraDaneY); // linia 30a
		endShape();

		beginShape();
		vertex(this.p1l30bx1 * sizeTree + extraDaneX,
			this.p1l30by1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l30bx1 * sizeTree + extraDaneX,
			this.p1l30by1 * sizeTree + extraDaneY,
			this.p1l30bx2 * sizeTree + extraDaneX,
			this.p1l30by2 * sizeTree + extraDaneY,
			this.p1l30bx3 * sizeTree + extraDaneX,
			this.p1l30by3 * sizeTree + extraDaneY); // linia 30b
		endShape();

		beginShape();
		vertex(this.p1l31x1 * sizeTree + extraDaneX,
			this.p1l31y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l31x1 * sizeTree + extraDaneX,
			this.p1l31y1 * sizeTree + extraDaneY,
			this.p1l31x2 * sizeTree + extraDaneX,
			this.p1l31y2 * sizeTree + extraDaneY,
			this.p1l31x3 * sizeTree + extraDaneX,
			this.p1l31y3 * sizeTree + extraDaneY); // linia 31
		endShape();

		beginShape();
		vertex(this.p1l32ax1 * sizeTree + extraDaneX,
			this.p1l32ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l32ax1 * sizeTree + extraDaneX,
			this.p1l32ay1 * sizeTree + extraDaneY,
			this.p1l32ax2 * sizeTree + extraDaneX,
			this.p1l32ay2 * sizeTree + extraDaneY,
			this.p1l32ax3 * sizeTree + extraDaneX,
			this.p1l32ay3 * sizeTree + extraDaneY); // linia 32a
		endShape();

		beginShape();
		vertex(this.p1l33x1 * sizeTree + extraDaneX,
			this.p1l33y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l33x1 * sizeTree + extraDaneX,
			this.p1l33y1 * sizeTree + extraDaneY,
			this.p1l33x2 * sizeTree + extraDaneX,
			this.p1l33y2 * sizeTree + extraDaneY,
			this.p1l33x3 * sizeTree + extraDaneX,
			this.p1l33y3 * sizeTree + extraDaneY); // linia 33
		endShape();

		beginShape();
		vertex(this.p1l34x1 * sizeTree + extraDaneX,
			this.p1l34y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l34x1 * sizeTree + extraDaneX,
			this.p1l34y1 * sizeTree + extraDaneY,
			this.p1l34x2 * sizeTree + extraDaneX,
			this.p1l34y2 * sizeTree + extraDaneY,
			this.p1l34x3 * sizeTree + extraDaneX,
			this.p1l34y3 * sizeTree + extraDaneY); // linia 34
		endShape();

		beginShape();
		vertex(this.p1l35x1 * sizeTree + extraDaneX,
			this.p1l35y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l35x1 * sizeTree + extraDaneX,
			this.p1l35y1 * sizeTree + extraDaneY,
			this.p1l35x2 * sizeTree + extraDaneX,
			this.p1l35y2 * sizeTree + extraDaneY,
			this.p1l35x3 * sizeTree + extraDaneX,
			this.p1l35y3 * sizeTree + extraDaneY); // linia 35
		endShape();

		beginShape();
		vertex(this.p1l36x1 * sizeTree + extraDaneX,
			this.p1l36y1 * sizeTree + extraDaneY);
		bezierVertex(this.p1l36x1 * sizeTree + extraDaneX,
			this.p1l36y1 * sizeTree + extraDaneY,
			this.p1l36x2 * sizeTree + extraDaneX,
			this.p1l36y2 * sizeTree + extraDaneY,
			this.p1l36x3 * sizeTree + extraDaneX,
			this.p1l36y3 * sizeTree + extraDaneY); // linia 36
		endShape();
		// druga gałąź - end


		// trzecia gałąź - licząc od lewej - gałąź zielona 1 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.z1l1ax1 * sizeTree + extraDaneX,
			this.z1l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l1ax1 * sizeTree + extraDaneX,
			this.z1l1ay1 * sizeTree + extraDaneY,
			this.z1l1ax2 * sizeTree + extraDaneX,
			this.z1l1ay2 * sizeTree + extraDaneY,
			this.z1l1ax3 * sizeTree + extraDaneX,
			this.z1l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z1l1bx1 * sizeTree + extraDaneX,
			this.z1l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l1bx1 * sizeTree + extraDaneX,
			this.z1l1by1 * sizeTree + extraDaneY,
			this.z1l1bx2 * sizeTree + extraDaneX,
			this.z1l1by2 * sizeTree + extraDaneY,
			this.z1l1bx3 * sizeTree + extraDaneX,
			this.z1l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z1l8x1 * sizeTree + extraDaneX,
			this.z1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l8x1 * sizeTree + extraDaneX,
			this.z1l8y1 * sizeTree + extraDaneY,
			this.z1l8x2 * sizeTree + extraDaneX,
			this.z1l8y2 * sizeTree + extraDaneY,
			this.z1l8x3 * sizeTree + extraDaneX,
			this.z1l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z1l5x1 * sizeTree + extraDaneX,
			this.z1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l5x1 * sizeTree + extraDaneX,
			this.z1l5y1 * sizeTree + extraDaneY,
			this.z1l5x2 * sizeTree + extraDaneX,
			this.z1l5y2 * sizeTree + extraDaneY,
			this.z1l5x3 * sizeTree + extraDaneX,
			this.z1l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z1l2x1 * sizeTree + extraDaneX,
			this.z1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l2x1 * sizeTree + extraDaneX,
			this.z1l2y1 * sizeTree + extraDaneY,
			this.z1l2x2 * sizeTree + extraDaneX,
			this.z1l2y2 * sizeTree + extraDaneY,
			this.z1l2x3 * sizeTree + extraDaneX,
			this.z1l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z1l3x1 * sizeTree + extraDaneX,
			this.z1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l3x1 * sizeTree + extraDaneX,
			this.z1l3y1 * sizeTree + extraDaneY,
			this.z1l3x2 * sizeTree + extraDaneX,
			this.z1l3y2 * sizeTree + extraDaneY,
			this.z1l3x3 * sizeTree + extraDaneX,
			this.z1l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z1l4x1 * sizeTree + extraDaneX,
			this.z1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l4x1 * sizeTree + extraDaneX,
			this.z1l4y1 * sizeTree + extraDaneY,
			this.z1l4x2 * sizeTree + extraDaneX,
			this.z1l4y2 * sizeTree + extraDaneY,
			this.z1l4x3 * sizeTree + extraDaneX,
			this.z1l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z1l10x1 * sizeTree + extraDaneX,
			this.z1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l10x1 * sizeTree + extraDaneX,
			this.z1l10y1 * sizeTree + extraDaneY,
			this.z1l10x2 * sizeTree + extraDaneX,
			this.z1l10y2 * sizeTree + extraDaneY,
			this.z1l10x3 * sizeTree + extraDaneX,
			this.z1l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.z1l9x1 * sizeTree + extraDaneX,
			this.z1l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l9x1 * sizeTree + extraDaneX,
			this.z1l9y1 * sizeTree + extraDaneY,
			this.z1l9x2 * sizeTree + extraDaneX,
			this.z1l9y2 * sizeTree + extraDaneY,
			this.z1l9x3 * sizeTree + extraDaneX,
			this.z1l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z1l11x1 * sizeTree + extraDaneX,
			this.z1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l11x1 * sizeTree + extraDaneX,
			this.z1l11y1 * sizeTree + extraDaneY,
			this.z1l11x2 * sizeTree + extraDaneX,
			this.z1l11y2 * sizeTree + extraDaneY,
			this.z1l11x3 * sizeTree + extraDaneX,
			this.z1l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.z1l11ax1 * sizeTree + extraDaneX,
			this.z1l11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l11ax1 * sizeTree + extraDaneX,
			this.z1l11ay1 * sizeTree + extraDaneY,
			this.z1l11ax2 * sizeTree + extraDaneX,
			this.z1l11ay2 * sizeTree + extraDaneY,
			this.z1l11ax3 * sizeTree + extraDaneX,
			this.z1l11ay3 * sizeTree + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.z1l22x1 * sizeTree + extraDaneX,
			this.z1l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l22x1 * sizeTree + extraDaneX,
			this.z1l22y1 * sizeTree + extraDaneY,
			this.z1l22x2 * sizeTree + extraDaneX,
			this.z1l22y2 * sizeTree + extraDaneY,
			this.z1l22x3 * sizeTree + extraDaneX,
			this.z1l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z1l18x1 * sizeTree + extraDaneX,
			this.z1l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l18x1 * sizeTree + extraDaneX,
			this.z1l18y1 * sizeTree + extraDaneY,
			this.z1l18x2 * sizeTree + extraDaneX,
			this.z1l18y2 * sizeTree + extraDaneY,
			this.z1l18x3 * sizeTree + extraDaneX,
			this.z1l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z1l21x1 * sizeTree + extraDaneX,
			this.z1l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l21x1 * sizeTree + extraDaneX,
			this.z1l21y1 * sizeTree + extraDaneY,
			this.z1l21x2 * sizeTree + extraDaneX,
			this.z1l21y2 * sizeTree + extraDaneY,
			this.z1l21x3 * sizeTree + extraDaneX,
			this.z1l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z1l19x1 * sizeTree + extraDaneX,
			this.z1l19y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l19x1 * sizeTree + extraDaneX,
			this.z1l19y1 * sizeTree + extraDaneY,
			this.z1l19x2 * sizeTree + extraDaneX,
			this.z1l19y2 * sizeTree + extraDaneY,
			this.z1l19x3 * sizeTree + extraDaneX,
			this.z1l19y3 * sizeTree + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.z1l20x1 * sizeTree + extraDaneX,
			this.z1l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l20x1 * sizeTree + extraDaneX,
			this.z1l20y1 * sizeTree + extraDaneY,
			this.z1l20x2 * sizeTree + extraDaneX,
			this.z1l20y2 * sizeTree + extraDaneY,
			this.z1l20x3 * sizeTree + extraDaneX,
			this.z1l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z1l14ax1 * sizeTree + extraDaneX,
			this.z1l14ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l14ax1 * sizeTree + extraDaneX,
			this.z1l14ay1 * sizeTree + extraDaneY,
			this.z1l14ax2 * sizeTree + extraDaneX,
			this.z1l14ay2 * sizeTree + extraDaneY,
			this.z1l14ax3 * sizeTree + extraDaneX,
			this.z1l14ay3 * sizeTree + extraDaneY); // linia 14a
		endShape();

		beginShape();
		vertex(this.z1l14bx1 * sizeTree + extraDaneX,
			this.z1l14by1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l14bx1 * sizeTree + extraDaneX,
			this.z1l14by1 * sizeTree + extraDaneY,
			this.z1l14bx2 * sizeTree + extraDaneX,
			this.z1l14by2 * sizeTree + extraDaneY,
			this.z1l14bx3 * sizeTree + extraDaneX,
			this.z1l14by3 * sizeTree + extraDaneY); // linia 14b
		endShape();

		beginShape();
		vertex(this.z1l16x1 * sizeTree + extraDaneX,
			this.z1l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l16x1 * sizeTree + extraDaneX,
			this.z1l16y1 * sizeTree + extraDaneY,
			this.z1l16x2 * sizeTree + extraDaneX,
			this.z1l16y2 * sizeTree + extraDaneY,
			this.z1l16x3 * sizeTree + extraDaneX,
			this.z1l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z1l17x1 * sizeTree + extraDaneX,
			this.z1l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l17x1 * sizeTree + extraDaneX,
			this.z1l17y1 * sizeTree + extraDaneY,
			this.z1l17x2 * sizeTree + extraDaneX,
			this.z1l17y2 * sizeTree + extraDaneY,
			this.z1l17x3 * sizeTree + extraDaneX,
			this.z1l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z1l13x1 * sizeTree + extraDaneX,
			this.z1l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l13x1 * sizeTree + extraDaneX,
			this.z1l13y1 * sizeTree + extraDaneY,
			this.z1l13x2 * sizeTree + extraDaneX,
			this.z1l13y2 * sizeTree + extraDaneY,
			this.z1l13x3 * sizeTree + extraDaneX,
			this.z1l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z1l12x1 * sizeTree + extraDaneX,
			this.z1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.z1l12x1 * sizeTree + extraDaneX,
			this.z1l12y1 * sizeTree + extraDaneY,
			this.z1l12x2 * sizeTree + extraDaneX,
			this.z1l12y2 * sizeTree + extraDaneY,
			this.z1l12x3 * sizeTree + extraDaneX,
			this.z1l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		// trzecia gałąź - end		

		// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
		//		stroke(150, 255, 100);	
		beginShape();
		vertex(this.z2l2x1 * sizeTree + extraDaneX,
			this.z2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l2x1 * sizeTree + extraDaneX,
			this.z2l2y1 * sizeTree + extraDaneY,
			this.z2l2x2 * sizeTree + extraDaneX,
			this.z2l2y2 * sizeTree + extraDaneY,
			this.z2l2x3 * sizeTree + extraDaneX,
			this.z2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z2l1ax1 * sizeTree + extraDaneX,
			this.z2l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l1ax1 * sizeTree + extraDaneX,
			this.z2l1ay1 * sizeTree + extraDaneY,
			this.z2l1ax2 * sizeTree + extraDaneX,
			this.z2l1ay2 * sizeTree + extraDaneY,
			this.z2l1ax3 * sizeTree + extraDaneX,
			this.z2l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z2l1bx1 * sizeTree + extraDaneX,
			this.z2l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l1bx1 * sizeTree + extraDaneX,
			this.z2l1by1 * sizeTree + extraDaneY,
			this.z2l1bx2 * sizeTree + extraDaneX,
			this.z2l1by2 * sizeTree + extraDaneY,
			this.z2l1bx3 * sizeTree + extraDaneX,
			this.z2l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z2l21x1 * sizeTree + extraDaneX,
			this.z2l21y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l21x1 * sizeTree + extraDaneX,
			this.z2l21y1 * sizeTree + extraDaneY,
			this.z2l21x2 * sizeTree + extraDaneX,
			this.z2l21y2 * sizeTree + extraDaneY,
			this.z2l21x3 * sizeTree + extraDaneX,
			this.z2l21y3 * sizeTree + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z2l22x1 * sizeTree + extraDaneX,
			this.z2l22y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l22x1 * sizeTree + extraDaneX,
			this.z2l22y1 * sizeTree + extraDaneY,
			this.z2l22x2 * sizeTree + extraDaneX,
			this.z2l22y2 * sizeTree + extraDaneY,
			this.z2l22x3 * sizeTree + extraDaneX,
			this.z2l22y3 * sizeTree + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z2l18x1 * sizeTree + extraDaneX,
			this.z2l18y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l18x1 * sizeTree + extraDaneX,
			this.z2l18y1 * sizeTree + extraDaneY,
			this.z2l18x2 * sizeTree + extraDaneX,
			this.z2l18y2 * sizeTree + extraDaneY,
			this.z2l18x3 * sizeTree + extraDaneX,
			this.z2l18y3 * sizeTree + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z2l20x1 * sizeTree + extraDaneX,
			this.z2l20y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l20x1 * sizeTree + extraDaneX,
			this.z2l20y1 * sizeTree + extraDaneY,
			this.z2l20x2 * sizeTree + extraDaneX,
			this.z2l20y2 * sizeTree + extraDaneY,
			this.z2l20x3 * sizeTree + extraDaneX,
			this.z2l20y3 * sizeTree + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z2l17x1 * sizeTree + extraDaneX,
			this.z2l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l17x1 * sizeTree + extraDaneX,
			this.z2l17y1 * sizeTree + extraDaneY,
			this.z2l17x2 * sizeTree + extraDaneX,
			this.z2l17y2 * sizeTree + extraDaneY,
			this.z2l17x3 * sizeTree + extraDaneX,
			this.z2l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z2l16x1 * sizeTree + extraDaneX,
			this.z2l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l16x1 * sizeTree + extraDaneX,
			this.z2l16y1 * sizeTree + extraDaneY,
			this.z2l16x2 * sizeTree + extraDaneX,
			this.z2l16y2 * sizeTree + extraDaneY,
			this.z2l16x3 * sizeTree + extraDaneX,
			this.z2l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z2l15x1 * sizeTree + extraDaneX,
			this.z2l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l15x1 * sizeTree + extraDaneX,
			this.z2l15y1 * sizeTree + extraDaneY,
			this.z2l15x2 * sizeTree + extraDaneX,
			this.z2l15y2 * sizeTree + extraDaneY,
			this.z2l15x3 * sizeTree + extraDaneX,
			this.z2l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.z2l14x1 * sizeTree + extraDaneX,
			this.z2l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l14x1 * sizeTree + extraDaneX,
			this.z2l14y1 * sizeTree + extraDaneY,
			this.z2l14x2 * sizeTree + extraDaneX,
			this.z2l14y2 * sizeTree + extraDaneY,
			this.z2l14x3 * sizeTree + extraDaneX,
			this.z2l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.z2l13x1 * sizeTree + extraDaneX,
			this.z2l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l13x1 * sizeTree + extraDaneX,
			this.z2l13y1 * sizeTree + extraDaneY,
			this.z2l13x2 * sizeTree + extraDaneX,
			this.z2l13y2 * sizeTree + extraDaneY,
			this.z2l13x3 * sizeTree + extraDaneX,
			this.z2l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z2l4ax1 * sizeTree + extraDaneX,
			this.z2l4ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l4ax1 * sizeTree + extraDaneX,
			this.z2l4ay1 * sizeTree + extraDaneY,
			this.z2l4ax2 * sizeTree + extraDaneX,
			this.z2l4ay2 * sizeTree + extraDaneY,
			this.z2l4ax3 * sizeTree + extraDaneX,
			this.z2l4ay3 * sizeTree + extraDaneY); // linia 4a
		endShape();

		beginShape();
		vertex(this.z2l4bx1 * sizeTree + extraDaneX,
			this.z2l4by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l4bx1 * sizeTree + extraDaneX,
			this.z2l4by1 * sizeTree + extraDaneY,
			this.z2l4bx2 * sizeTree + extraDaneX,
			this.z2l4by2 * sizeTree + extraDaneY,
			this.z2l4bx3 * sizeTree + extraDaneX,
			this.z2l4by3 * sizeTree + extraDaneY); // linia 4b
		endShape();

		beginShape();
		vertex(this.z2l3x1 * sizeTree + extraDaneX,
			this.z2l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l3x1 * sizeTree + extraDaneX,
			this.z2l3y1 * sizeTree + extraDaneY,
			this.z2l3x2 * sizeTree + extraDaneX,
			this.z2l3y2 * sizeTree + extraDaneY,
			this.z2l3x3 * sizeTree + extraDaneX,
			this.z2l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z2l6x1 * sizeTree + extraDaneX,
			this.z2l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l6x1 * sizeTree + extraDaneX,
			this.z2l6y1 * sizeTree + extraDaneY,
			this.z2l6x2 * sizeTree + extraDaneX,
			this.z2l6y2 * sizeTree + extraDaneY,
			this.z2l6x3 * sizeTree + extraDaneX,
			this.z2l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z2l5x1 * sizeTree + extraDaneX,
			this.z2l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l5x1 * sizeTree + extraDaneX,
			this.z2l5y1 * sizeTree + extraDaneY,
			this.z2l5x2 * sizeTree + extraDaneX,
			this.z2l5y2 * sizeTree + extraDaneY,
			this.z2l5x3 * sizeTree + extraDaneX,
			this.z2l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z2l8x1 * sizeTree + extraDaneX,
			this.z2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l8x1 * sizeTree + extraDaneX,
			this.z2l8y1 * sizeTree + extraDaneY,
			this.z2l8x2 * sizeTree + extraDaneX,
			this.z2l8y2 * sizeTree + extraDaneY,
			this.z2l8x3 * sizeTree + extraDaneX,
			this.z2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z2l7x1 * sizeTree + extraDaneX,
			this.z2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l7x1 * sizeTree + extraDaneX,
			this.z2l7y1 * sizeTree + extraDaneY,
			this.z2l7x2 * sizeTree + extraDaneX,
			this.z2l7y2 * sizeTree + extraDaneY,
			this.z2l7x3 * sizeTree + extraDaneX,
			this.z2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.z2l12x1 * sizeTree + extraDaneX,
			this.z2l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12x1 * sizeTree + extraDaneX,
			this.z2l12y1 * sizeTree + extraDaneY,
			this.z2l12x2 * sizeTree + extraDaneX,
			this.z2l12y2 * sizeTree + extraDaneY,
			this.z2l12x3 * sizeTree + extraDaneX,
			this.z2l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.z2l12bx1 * sizeTree + extraDaneX,
			this.z2l12by1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12bx1 * sizeTree + extraDaneX,
			this.z2l12by1 * sizeTree + extraDaneY,
			this.z2l12bx2 * sizeTree + extraDaneX,
			this.z2l12by2 * sizeTree + extraDaneY,
			this.z2l12bx3 * sizeTree + extraDaneX,
			this.z2l12by3 * sizeTree + extraDaneY); // linia 12b
		endShape();

		beginShape();
		vertex(this.z2l12cx1 * sizeTree + extraDaneX,
			this.z2l12cy1 * sizeTree + extraDaneY);
		bezierVertex(this.z2l12cx1 * sizeTree + extraDaneX,
			this.z2l12cy1 * sizeTree + extraDaneY,
			this.z2l12cx2 * sizeTree + extraDaneX,
			this.z2l12cy2 * sizeTree + extraDaneY,
			this.z2l12cx3 * sizeTree + extraDaneX,
			this.z2l12cy3 * sizeTree + extraDaneY); // linia 12c
		endShape();

		// czwarta gałąź - end			


		// piąta gałąź - licząc od lewej - gałąź zielona 3 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.z3l1ax1 * sizeTree + extraDaneX,
			this.z3l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l1ax1 * sizeTree + extraDaneX,
			this.z3l1ay1 * sizeTree + extraDaneY,
			this.z3l1ax2 * sizeTree + extraDaneX,
			this.z3l1ay2 * sizeTree + extraDaneY,
			this.z3l1ax3 * sizeTree + extraDaneX,
			this.z3l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z3l1bx1 * sizeTree + extraDaneX,
			this.z3l1by1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l1bx1 * sizeTree + extraDaneX,
			this.z3l1by1 * sizeTree + extraDaneY,
			this.z3l1bx2 * sizeTree + extraDaneX,
			this.z3l1by2 * sizeTree + extraDaneY,
			this.z3l1bx3 * sizeTree + extraDaneX,
			this.z3l1by3 * sizeTree + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z3l3x1 * sizeTree + extraDaneX,
			this.z3l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l3x1 * sizeTree + extraDaneX,
			this.z3l3y1 * sizeTree + extraDaneY,
			this.z3l3x2 * sizeTree + extraDaneX,
			this.z3l3y2 * sizeTree + extraDaneY,
			this.z3l3x3 * sizeTree + extraDaneX,
			this.z3l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z3l4x1 * sizeTree + extraDaneX,
			this.z3l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l4x1 * sizeTree + extraDaneX,
			this.z3l4y1 * sizeTree + extraDaneY,
			this.z3l4x2 * sizeTree + extraDaneX,
			this.z3l4y2 * sizeTree + extraDaneY,
			this.z3l4x3 * sizeTree + extraDaneX,
			this.z3l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z3l5x1 * sizeTree + extraDaneX,
			this.z3l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l5x1 * sizeTree + extraDaneX,
			this.z3l5y1 * sizeTree + extraDaneY,
			this.z3l5x2 * sizeTree + extraDaneX,
			this.z3l5y2 * sizeTree + extraDaneY,
			this.z3l5x3 * sizeTree + extraDaneX,
			this.z3l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z3l6x1 * sizeTree + extraDaneX,
			this.z3l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l6x1 * sizeTree + extraDaneX,
			this.z3l6y1 * sizeTree + extraDaneY,
			this.z3l6x2 * sizeTree + extraDaneX,
			this.z3l6y2 * sizeTree + extraDaneY,
			this.z3l6x3 * sizeTree + extraDaneX,
			this.z3l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z3l8x1 * sizeTree + extraDaneX,
			this.z3l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l8x1 * sizeTree + extraDaneX,
			this.z3l8y1 * sizeTree + extraDaneY,
			this.z3l8x2 * sizeTree + extraDaneX,
			this.z3l8y2 * sizeTree + extraDaneY,
			this.z3l8x3 * sizeTree + extraDaneX,
			this.z3l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z3l9x1 * sizeTree + extraDaneX,
			this.z3l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l9x1 * sizeTree + extraDaneX,
			this.z3l9y1 * sizeTree + extraDaneY,
			this.z3l9x2 * sizeTree + extraDaneX,
			this.z3l9y2 * sizeTree + extraDaneY,
			this.z3l9x3 * sizeTree + extraDaneX,
			this.z3l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z3l7x1 * sizeTree + extraDaneX,
			this.z3l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.z3l7x1 * sizeTree + extraDaneX,
			this.z3l7y1 * sizeTree + extraDaneY,
			this.z3l7x2 * sizeTree + extraDaneX,
			this.z3l7y2 * sizeTree + extraDaneY,
			this.z3l7x3 * sizeTree + extraDaneX,
			this.z3l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();
		// piąta gałąź - end	


		// szusta gałąź - gałąź czerwona 2 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.r2l1x1 * sizeTree + extraDaneX,
			this.r2l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l1x1 * sizeTree + extraDaneX,
			this.r2l1y1 * sizeTree + extraDaneY,
			this.r2l1x2 * sizeTree + extraDaneX,
			this.r2l1y2 * sizeTree + extraDaneY,
			this.r2l1x3 * sizeTree + extraDaneX,
			this.r2l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r2l2x1 * sizeTree + extraDaneX,
			this.r2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l2x1 * sizeTree + extraDaneX,
			this.r2l2y1 * sizeTree + extraDaneY,
			this.r2l2x2 * sizeTree + extraDaneX,
			this.r2l2y2 * sizeTree + extraDaneY,
			this.r2l2x3 * sizeTree + extraDaneX,
			this.r2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r2l3x1 * sizeTree + extraDaneX,
			this.r2l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l3x1 * sizeTree + extraDaneX,
			this.r2l3y1 * sizeTree + extraDaneY,
			this.r2l3x2 * sizeTree + extraDaneX,
			this.r2l3y2 * sizeTree + extraDaneY,
			this.r2l3x3 * sizeTree + extraDaneX,
			this.r2l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r2l7x1 * sizeTree + extraDaneX,
			this.r2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l7x1 * sizeTree + extraDaneX,
			this.r2l7y1 * sizeTree + extraDaneY,
			this.r2l7x2 * sizeTree + extraDaneX,
			this.r2l7y2 * sizeTree + extraDaneY,
			this.r2l7x3 * sizeTree + extraDaneX,
			this.r2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r2l8x1 * sizeTree + extraDaneX,
			this.r2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l8x1 * sizeTree + extraDaneX,
			this.r2l8y1 * sizeTree + extraDaneY,
			this.r2l8x2 * sizeTree + extraDaneX,
			this.r2l8y2 * sizeTree + extraDaneY,
			this.r2l8x3 * sizeTree + extraDaneX,
			this.r2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r2l9x1 * sizeTree + extraDaneX,
			this.r2l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l9x1 * sizeTree + extraDaneX,
			this.r2l9y1 * sizeTree + extraDaneY,
			this.r2l9x2 * sizeTree + extraDaneX,
			this.r2l9y2 * sizeTree + extraDaneY,
			this.r2l9x3 * sizeTree + extraDaneX,
			this.r2l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r2l10x1 * sizeTree + extraDaneX,
			this.r2l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l10x1 * sizeTree + extraDaneX,
			this.r2l10y1 * sizeTree + extraDaneY,
			this.r2l10x2 * sizeTree + extraDaneX,
			this.r2l10y2 * sizeTree + extraDaneY,
			this.r2l10x3 * sizeTree + extraDaneX,
			this.r2l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r2l11x1 * sizeTree + extraDaneX,
			this.r2l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l11x1 * sizeTree + extraDaneX,
			this.r2l11y1 * sizeTree + extraDaneY,
			this.r2l11x2 * sizeTree + extraDaneX,
			this.r2l11y2 * sizeTree + extraDaneY,
			this.r2l11x3 * sizeTree + extraDaneX,
			this.r2l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r2l1ax1 * sizeTree + extraDaneX,
			this.r2l1ay1 * sizeTree + extraDaneY);
		bezierVertex(this.r2l1ax1 * sizeTree + extraDaneX,
			this.r2l1ay1 * sizeTree + extraDaneY,
			this.r2l1ax2 * sizeTree + extraDaneX,
			this.r2l1ay2 * sizeTree + extraDaneY,
			this.r2l1ax3 * sizeTree + extraDaneX,
			this.r2l1ay3 * sizeTree + extraDaneY); // linia 1a
		endShape();
		// szusta gałąź - end

		// siódma gałąź - gałąź czerwona 4 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.r4l2x1 * sizeTree + extraDaneX,
			this.r4l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l2x1 * sizeTree + extraDaneX,
			this.r4l2y1 * sizeTree + extraDaneY,
			this.r4l2x2 * sizeTree + extraDaneX,
			this.r4l2y2 * sizeTree + extraDaneY,
			this.r4l2x3 * sizeTree + extraDaneX,
			this.r4l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r4l3x1 * sizeTree + extraDaneX,
			this.r4l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l3x1 * sizeTree + extraDaneX,
			this.r4l3y1 * sizeTree + extraDaneY,
			this.r4l3x2 * sizeTree + extraDaneX,
			this.r4l3y2 * sizeTree + extraDaneY,
			this.r4l3x3 * sizeTree + extraDaneX,
			this.r4l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r4l4x1 * sizeTree + extraDaneX,
			this.r4l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l4x1 * sizeTree + extraDaneX,
			this.r4l4y1 * sizeTree + extraDaneY,
			this.r4l4x2 * sizeTree + extraDaneX,
			this.r4l4y2 * sizeTree + extraDaneY,
			this.r4l4x3 * sizeTree + extraDaneX,
			this.r4l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.r4l7x1 * sizeTree + extraDaneX,
			this.r4l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l7x1 * sizeTree + extraDaneX,
			this.r4l7y1 * sizeTree + extraDaneY,
			this.r4l7x2 * sizeTree + extraDaneX,
			this.r4l7y2 * sizeTree + extraDaneY,
			this.r4l7x3 * sizeTree + extraDaneX,
			this.r4l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r4l11x1 * sizeTree + extraDaneX,
			this.r4l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l11x1 * sizeTree + extraDaneX,
			this.r4l11y1 * sizeTree + extraDaneY,
			this.r4l11x2 * sizeTree + extraDaneX,
			this.r4l11y2 * sizeTree + extraDaneY,
			this.r4l11x3 * sizeTree + extraDaneX,
			this.r4l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r4l9x1 * sizeTree + extraDaneX,
			this.r4l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l9x1 * sizeTree + extraDaneX,
			this.r4l9y1 * sizeTree + extraDaneY,
			this.r4l9x2 * sizeTree + extraDaneX,
			this.r4l9y2 * sizeTree + extraDaneY,
			this.r4l9x3 * sizeTree + extraDaneX,
			this.r4l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r4l10x1 * sizeTree + extraDaneX,
			this.r4l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l10x1 * sizeTree + extraDaneX,
			this.r4l10y1 * sizeTree + extraDaneY,
			this.r4l10x2 * sizeTree + extraDaneX,
			this.r4l10y2 * sizeTree + extraDaneY,
			this.r4l10x3 * sizeTree + extraDaneX,
			this.r4l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r4l13x1 * sizeTree + extraDaneX,
			this.r4l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l13x1 * sizeTree + extraDaneX,
			this.r4l13y1 * sizeTree + extraDaneY,
			this.r4l13x2 * sizeTree + extraDaneX,
			this.r4l13y2 * sizeTree + extraDaneY,
			this.r4l13x3 * sizeTree + extraDaneX,
			this.r4l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r4l8x1 * sizeTree + extraDaneX,
			this.r4l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r4l8x1 * sizeTree + extraDaneX,
			this.r4l8y1 * sizeTree + extraDaneY,
			this.r4l8x2 * sizeTree + extraDaneX,
			this.r4l8y2 * sizeTree + extraDaneY,
			this.r4l8x3 * sizeTree + extraDaneX,
			this.r4l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();
		// siódma gałąź -  end	

		// ósma gałąź - gałąź fioletowa 2 - start
		//		stroke(0, 0, 255);	
		beginShape();
		vertex(this.p2l1x1 * sizeTree + extraDaneX,
			this.p2l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l1x1 * sizeTree + extraDaneX,
			this.p2l1y1 * sizeTree + extraDaneY,
			this.p2l1x2 * sizeTree + extraDaneX,
			this.p2l1y2 * sizeTree + extraDaneY,
			this.p2l1x3 * sizeTree + extraDaneX,
			this.p2l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p2l2x1 * sizeTree + extraDaneX,
			this.p2l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l2x1 * sizeTree + extraDaneX,
			this.p2l2y1 * sizeTree + extraDaneY,
			this.p2l2x2 * sizeTree + extraDaneX,
			this.p2l2y2 * sizeTree + extraDaneY,
			this.p2l2x3 * sizeTree + extraDaneX,
			this.p2l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.p2l6x1 * sizeTree + extraDaneX,
			this.p2l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l6x1 * sizeTree + extraDaneX,
			this.p2l6y1 * sizeTree + extraDaneY,
			this.p2l6x2 * sizeTree + extraDaneX,
			this.p2l6y2 * sizeTree + extraDaneY,
			this.p2l6x3 * sizeTree + extraDaneX,
			this.p2l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.p2l3ax1 * sizeTree + extraDaneX,
			this.p2l3ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l3ax1 * sizeTree + extraDaneX,
			this.p2l3ay1 * sizeTree + extraDaneY,
			this.p2l3ax2 * sizeTree + extraDaneX,
			this.p2l3ay2 * sizeTree + extraDaneY,
			this.p2l3ax3 * sizeTree + extraDaneX,
			this.p2l3ay3 * sizeTree + extraDaneY); // linia 3a
		endShape();

		beginShape();
		vertex(this.p2l3bx1 * sizeTree + extraDaneX,
			this.p2l3by1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l3bx1 * sizeTree + extraDaneX,
			this.p2l3by1 * sizeTree + extraDaneY,
			this.p2l3bx2 * sizeTree + extraDaneX,
			this.p2l3by2 * sizeTree + extraDaneY,
			this.p2l3bx3 * sizeTree + extraDaneX,
			this.p2l3by3 * sizeTree + extraDaneY); // linia 3b
		endShape();

		beginShape();
		vertex(this.p2l4x1 * sizeTree + extraDaneX,
			this.p2l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l4x1 * sizeTree + extraDaneX,
			this.p2l4y1 * sizeTree + extraDaneY,
			this.p2l4x2 * sizeTree + extraDaneX,
			this.p2l4y2 * sizeTree + extraDaneY,
			this.p2l4x3 * sizeTree + extraDaneX,
			this.p2l4y3 * sizeTree + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.p2l5x1 * sizeTree + extraDaneX,
			this.p2l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l5x1 * sizeTree + extraDaneX,
			this.p2l5y1 * sizeTree + extraDaneY,
			this.p2l5x2 * sizeTree + extraDaneX,
			this.p2l5y2 * sizeTree + extraDaneY,
			this.p2l5x3 * sizeTree + extraDaneX,
			this.p2l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.p2l7x1 * sizeTree + extraDaneX,
			this.p2l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l7x1 * sizeTree + extraDaneX,
			this.p2l7y1 * sizeTree + extraDaneY,
			this.p2l7x2 * sizeTree + extraDaneX,
			this.p2l7y2 * sizeTree + extraDaneY,
			this.p2l7x3 * sizeTree + extraDaneX,
			this.p2l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p2l8x1 * sizeTree + extraDaneX,
			this.p2l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l8x1 * sizeTree + extraDaneX,
			this.p2l8y1 * sizeTree + extraDaneY,
			this.p2l8x2 * sizeTree + extraDaneX,
			this.p2l8y2 * sizeTree + extraDaneY,
			this.p2l8x3 * sizeTree + extraDaneX,
			this.p2l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p2l14x1 * sizeTree + extraDaneX,
			this.p2l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l14x1 * sizeTree + extraDaneX,
			this.p2l14y1 * sizeTree + extraDaneY,
			this.p2l14x2 * sizeTree + extraDaneX,
			this.p2l14y2 * sizeTree + extraDaneY,
			this.p2l14x3 * sizeTree + extraDaneX,
			this.p2l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p2l15x1 * sizeTree + extraDaneX,
			this.p2l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l15x1 * sizeTree + extraDaneX,
			this.p2l15y1 * sizeTree + extraDaneY,
			this.p2l15x2 * sizeTree + extraDaneX,
			this.p2l15y2 * sizeTree + extraDaneY,
			this.p2l15x3 * sizeTree + extraDaneX,
			this.p2l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p2l17x1 * sizeTree + extraDaneX,
			this.p2l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l17x1 * sizeTree + extraDaneX,
			this.p2l17y1 * sizeTree + extraDaneY,
			this.p2l17x2 * sizeTree + extraDaneX,
			this.p2l17y2 * sizeTree + extraDaneY,
			this.p2l17x3 * sizeTree + extraDaneX,
			this.p2l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.p2l16ax1 * sizeTree + extraDaneX,
			this.p2l16ay1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l16ax1 * sizeTree + extraDaneX,
			this.p2l16ay1 * sizeTree + extraDaneY,
			this.p2l16ax2 * sizeTree + extraDaneX,
			this.p2l16ay2 * sizeTree + extraDaneY,
			this.p2l16ax3 * sizeTree + extraDaneX,
			this.p2l16ay3 * sizeTree + extraDaneY); // linia 16a
		endShape();

		beginShape();
		vertex(this.p2l16bx1 * sizeTree + extraDaneX,
			this.p2l16by1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l16bx1 * sizeTree + extraDaneX,
			this.p2l16by1 * sizeTree + extraDaneY,
			this.p2l16bx2 * sizeTree + extraDaneX,
			this.p2l16by2 * sizeTree + extraDaneY,
			this.p2l16bx3 * sizeTree + extraDaneX,
			this.p2l16by3 * sizeTree + extraDaneY); // linia 16b
		endShape();

		beginShape();
		vertex(this.p2l12x1 * sizeTree + extraDaneX,
			this.p2l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l12x1 * sizeTree + extraDaneX,
			this.p2l12y1 * sizeTree + extraDaneY,
			this.p2l12x2 * sizeTree + extraDaneX,
			this.p2l12y2 * sizeTree + extraDaneY,
			this.p2l12x3 * sizeTree + extraDaneX,
			this.p2l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p2l13x1 * sizeTree + extraDaneX,
			this.p2l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l13x1 * sizeTree + extraDaneX,
			this.p2l13y1 * sizeTree + extraDaneY,
			this.p2l13x2 * sizeTree + extraDaneX,
			this.p2l13y2 * sizeTree + extraDaneY,
			this.p2l13x3 * sizeTree + extraDaneX,
			this.p2l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p2l10x1 * sizeTree + extraDaneX,
			this.p2l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l10x1 * sizeTree + extraDaneX,
			this.p2l10y1 * sizeTree + extraDaneY,
			this.p2l10x2 * sizeTree + extraDaneX,
			this.p2l10y2 * sizeTree + extraDaneY,
			this.p2l10x3 * sizeTree + extraDaneX,
			this.p2l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p2l11x1 * sizeTree + extraDaneX,
			this.p2l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.p2l11x1 * sizeTree + extraDaneX,
			this.p2l11y1 * sizeTree + extraDaneY,
			this.p2l11x2 * sizeTree + extraDaneX,
			this.p2l11y2 * sizeTree + extraDaneY,
			this.p2l11x3 * sizeTree + extraDaneX,
			this.p2l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();
		// ósma gałąź - end	


		// dziewiąta gałąź - gałąź czerwona 3 - start
		//		stroke(0, 255, 0);
		beginShape();
		vertex(this.r3l1x1 * sizeTree + extraDaneX,
			this.r3l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l1x1 * sizeTree + extraDaneX,
			this.r3l1y1 * sizeTree + extraDaneY,
			this.r3l1x2 * sizeTree + extraDaneX,
			this.r3l1y2 * sizeTree + extraDaneY,
			this.r3l1x3 * sizeTree + extraDaneX,
			this.r3l1y3 * sizeTree + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r3l2x1 * sizeTree + extraDaneX,
			this.r3l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l2x1 * sizeTree + extraDaneX,
			this.r3l2y1 * sizeTree + extraDaneY,
			this.r3l2x2 * sizeTree + extraDaneX,
			this.r3l2y2 * sizeTree + extraDaneY,
			this.r3l2x3 * sizeTree + extraDaneX,
			this.r3l2y3 * sizeTree + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r3l17x1 * sizeTree + extraDaneX,
			this.r3l17y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l17x1 * sizeTree + extraDaneX,
			this.r3l17y1 * sizeTree + extraDaneY,
			this.r3l17x2 * sizeTree + extraDaneX,
			this.r3l17y2 * sizeTree + extraDaneY,
			this.r3l17x3 * sizeTree + extraDaneX,
			this.r3l17y3 * sizeTree + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.r3l16x1 * sizeTree + extraDaneX,
			this.r3l16y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l16x1 * sizeTree + extraDaneX,
			this.r3l16y1 * sizeTree + extraDaneY,
			this.r3l16x2 * sizeTree + extraDaneX,
			this.r3l16y2 * sizeTree + extraDaneY,
			this.r3l16x3 * sizeTree + extraDaneX,
			this.r3l16y3 * sizeTree + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.r3l3x1 * sizeTree + extraDaneX,
			this.r3l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l3x1 * sizeTree + extraDaneX,
			this.r3l3y1 * sizeTree + extraDaneY,
			this.r3l3x2 * sizeTree + extraDaneX,
			this.r3l3y2 * sizeTree + extraDaneY,
			this.r3l3x3 * sizeTree + extraDaneX,
			this.r3l3y3 * sizeTree + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r3l7x1 * sizeTree + extraDaneX,
			this.r3l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l7x1 * sizeTree + extraDaneX,
			this.r3l7y1 * sizeTree + extraDaneY,
			this.r3l7x2 * sizeTree + extraDaneX,
			this.r3l7y2 * sizeTree + extraDaneY,
			this.r3l7x3 * sizeTree + extraDaneX,
			this.r3l7y3 * sizeTree + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r3l8x1 * sizeTree + extraDaneX,
			this.r3l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l8x1 * sizeTree + extraDaneX,
			this.r3l8y1 * sizeTree + extraDaneY,
			this.r3l8x2 * sizeTree + extraDaneX,
			this.r3l8y2 * sizeTree + extraDaneY,
			this.r3l8x3 * sizeTree + extraDaneX,
			this.r3l8y3 * sizeTree + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r3l9x1 * sizeTree + extraDaneX,
			this.r3l9y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l9x1 * sizeTree + extraDaneX,
			this.r3l9y1 * sizeTree + extraDaneY,
			this.r3l9x2 * sizeTree + extraDaneX,
			this.r3l9y2 * sizeTree + extraDaneY,
			this.r3l9x3 * sizeTree + extraDaneX,
			this.r3l9y3 * sizeTree + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r3l10x1 * sizeTree + extraDaneX,
			this.r3l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l10x1 * sizeTree + extraDaneX,
			this.r3l10y1 * sizeTree + extraDaneY,
			this.r3l10x2 * sizeTree + extraDaneX,
			this.r3l10y2 * sizeTree + extraDaneY,
			this.r3l10x3 * sizeTree + extraDaneX,
			this.r3l10y3 * sizeTree + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r3l11x1 * sizeTree + extraDaneX,
			this.r3l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l11x1 * sizeTree + extraDaneX,
			this.r3l11y1 * sizeTree + extraDaneY,
			this.r3l11x2 * sizeTree + extraDaneX,
			this.r3l11y2 * sizeTree + extraDaneY,
			this.r3l11x3 * sizeTree + extraDaneX,
			this.r3l11y3 * sizeTree + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r3l12x1 * sizeTree + extraDaneX,
			this.r3l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l12x1 * sizeTree + extraDaneX,
			this.r3l12y1 * sizeTree + extraDaneY,
			this.r3l12x2 * sizeTree + extraDaneX,
			this.r3l12y2 * sizeTree + extraDaneY,
			this.r3l12x3 * sizeTree + extraDaneX,
			this.r3l12y3 * sizeTree + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.r3l15x1 * sizeTree + extraDaneX,
			this.r3l15y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l15x1 * sizeTree + extraDaneX,
			this.r3l15y1 * sizeTree + extraDaneY,
			this.r3l15x2 * sizeTree + extraDaneX,
			this.r3l15y2 * sizeTree + extraDaneY,
			this.r3l15x3 * sizeTree + extraDaneX,
			this.r3l15y3 * sizeTree + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.r3l13x1 * sizeTree + extraDaneX,
			this.r3l13y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l13x1 * sizeTree + extraDaneX,
			this.r3l13y1 * sizeTree + extraDaneY,
			this.r3l13x2 * sizeTree + extraDaneX,
			this.r3l13y2 * sizeTree + extraDaneY,
			this.r3l13x3 * sizeTree + extraDaneX,
			this.r3l13y3 * sizeTree + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r3l14x1 * sizeTree + extraDaneX,
			this.r3l14y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l14x1 * sizeTree + extraDaneX,
			this.r3l14y1 * sizeTree + extraDaneY,
			this.r3l14x2 * sizeTree + extraDaneX,
			this.r3l14y2 * sizeTree + extraDaneY,
			this.r3l14x3 * sizeTree + extraDaneX,
			this.r3l14y3 * sizeTree + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.r3l6x1 * sizeTree + extraDaneX,
			this.r3l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l6x1 * sizeTree + extraDaneX,
			this.r3l6y1 * sizeTree + extraDaneY,
			this.r3l6x2 * sizeTree + extraDaneX,
			this.r3l6y2 * sizeTree + extraDaneY,
			this.r3l6x3 * sizeTree + extraDaneX,
			this.r3l6y3 * sizeTree + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.r3l5x1 * sizeTree + extraDaneX,
			this.r3l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l5x1 * sizeTree + extraDaneX,
			this.r3l5y1 * sizeTree + extraDaneY,
			this.r3l5x2 * sizeTree + extraDaneX,
			this.r3l5y2 * sizeTree + extraDaneY,
			this.r3l5x3 * sizeTree + extraDaneX,
			this.r3l5y3 * sizeTree + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.r3l4x1 * sizeTree + extraDaneX,
			this.r3l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.r3l4x1 * sizeTree + extraDaneX,
			this.r3l4y1 * sizeTree + extraDaneY,
			this.r3l4x2 * sizeTree + extraDaneX,
			this.r3l4y2 * sizeTree + extraDaneY,
			this.r3l4x3 * sizeTree + extraDaneX,
			this.r3l4y3 * sizeTree + extraDaneY); // linia 4
		// linia 4
		endShape();
		// dziewiąta gałąź - end	

		// gałąź dziesiąta - na dole przy pniu drzewa - start
		//		stroke(200, 115, 0);
		beginShape();
		vertex(this.d1l12x1 * sizeTree + extraDaneX,
			this.d1l12y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l12x1 * sizeTree + extraDaneX,
			this.d1l12y1 * sizeTree + extraDaneY,
			this.d1l12x2 * sizeTree + extraDaneX,
			this.d1l12y2 * sizeTree + extraDaneY,
			this.d1l12x3 * sizeTree + extraDaneX,
			this.d1l12y3 * sizeTree + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.d1l1x1 * sizeTree + extraDaneX,
			this.d1l1y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l1x1 * sizeTree + extraDaneX,
			this.d1l1y1 * sizeTree + extraDaneY,
			this.d1l1x2 * sizeTree + extraDaneX,
			this.d1l1y2 * sizeTree + extraDaneY,
			this.d1l1x3 * sizeTree + extraDaneX,
			this.d1l1y3 * sizeTree + extraDaneY); //linia 1
		endShape();

		beginShape();
		vertex(this.d1l2x1 * sizeTree + extraDaneX,
			this.d1l2y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l2x1 * sizeTree + extraDaneX,
			this.d1l2y1 * sizeTree + extraDaneY,
			this.d1l2x2 * sizeTree + extraDaneX,
			this.d1l2y2 * sizeTree + extraDaneY,
			this.d1l2x3 * sizeTree + extraDaneX,
			this.d1l2y3 * sizeTree + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.d1l10x1 * sizeTree + extraDaneX,
			this.d1l10y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l10x1 * sizeTree + extraDaneX,
			this.d1l10y1 * sizeTree + extraDaneY,
			this.d1l10x2 * sizeTree + extraDaneX,
			this.d1l10y2 * sizeTree + extraDaneY,
			this.d1l10x3 * sizeTree + extraDaneX,
			this.d1l10y3 * sizeTree + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.d1l11x1 * sizeTree + extraDaneX,
			this.d1l11y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l11x1 * sizeTree + extraDaneX,
			this.d1l11y1 * sizeTree + extraDaneY,
			this.d1l11x2 * sizeTree + extraDaneX,
			this.d1l11y2 * sizeTree + extraDaneY,
			this.d1l11x3 * sizeTree + extraDaneX,
			this.d1l11y3 * sizeTree + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.d1l8x1 * sizeTree + extraDaneX,
			this.d1l8y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l8x1 * sizeTree + extraDaneX,
			this.d1l8y1 * sizeTree + extraDaneY,
			this.d1l8x2 * sizeTree + extraDaneX,
			this.d1l8y2 * sizeTree + extraDaneY,
			this.d1l8x3 * sizeTree + extraDaneX,
			this.d1l8y3 * sizeTree + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.d1l7x1 * sizeTree + extraDaneX,
			this.d1l7y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l7x1 * sizeTree + extraDaneX,
			this.d1l7y1 * sizeTree + extraDaneY,
			this.d1l7x2 * sizeTree + extraDaneX,
			this.d1l7y2 * sizeTree + extraDaneY,
			this.d1l7x3 * sizeTree + extraDaneX,
			this.d1l7y3 * sizeTree + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.d1l6x1 * sizeTree + extraDaneX,
			this.d1l6y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l6x1 * sizeTree + extraDaneX,
			this.d1l6y1 * sizeTree + extraDaneY,
			this.d1l6x2 * sizeTree + extraDaneX,
			this.d1l6y2 * sizeTree + extraDaneY,
			this.d1l6x3 * sizeTree + extraDaneX,
			this.d1l6y3 * sizeTree + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.d1l3x1 * sizeTree + extraDaneX,
			this.d1l3y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l3x1 * sizeTree + extraDaneX,
			this.d1l3y1 * sizeTree + extraDaneY,
			this.d1l3x2 * sizeTree + extraDaneX,
			this.d1l3y2 * sizeTree + extraDaneY,
			this.d1l3x3 * sizeTree + extraDaneX,
			this.d1l3y3 * sizeTree + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.d1l4x1 * sizeTree + extraDaneX,
			this.d1l4y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l4x1 * sizeTree + extraDaneX,
			this.d1l4y1 * sizeTree + extraDaneY,
			this.d1l4x2 * sizeTree + extraDaneX,
			this.d1l4y2 * sizeTree + extraDaneY,
			this.d1l4x3 * sizeTree + extraDaneX,
			this.d1l4y3 * sizeTree + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.d1l5x1 * sizeTree + extraDaneX,
			this.d1l5y1 * sizeTree + extraDaneY);
		bezierVertex(this.d1l5x1 * sizeTree + extraDaneX,
			this.d1l5y1 * sizeTree + extraDaneY,
			this.d1l5x2 * sizeTree + extraDaneX,
			this.d1l5y2 * sizeTree + extraDaneY,
			this.d1l5x3 * sizeTree + extraDaneX,
			this.d1l5y3 * sizeTree + extraDaneY); //linia 5
		endShape();
		// gałąź dziesiąta - end 		

		// extra gałąź - strat	
		//		stroke(255, 255, 100);	
		beginShape();
		vertex(this.exl9x1 * sizeTree + extraDaneX,
			this.exl9y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl9x1 * sizeTree + extraDaneX,
			this.exl9y1 * sizeTree + extraDaneY,
			this.exl9x2 * sizeTree + extraDaneX,
			this.exl9y2 * sizeTree + extraDaneY,
			this.exl9x3 * sizeTree + extraDaneX,
			this.exl9y3 * sizeTree + extraDaneY); // linia 9ex
		endShape();

		beginShape();
		vertex(this.exl10x1 * sizeTree + extraDaneX,
			this.exl10y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl10x1 * sizeTree + extraDaneX,
			this.exl10y1 * sizeTree + extraDaneY,
			this.exl10x2 * sizeTree + extraDaneX,
			this.exl10y2 * sizeTree + extraDaneY,
			this.exl10x3 * sizeTree + extraDaneX,
			this.exl10y3 * sizeTree + extraDaneY); // linia 10ex
		endShape();

		beginShape();
		vertex(this.exl11x1 * sizeTree + extraDaneX,
			this.exl11y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl11x1 * sizeTree + extraDaneX,
			this.exl11y1 * sizeTree + extraDaneY,
			this.exl11x2 * sizeTree + extraDaneX,
			this.exl11y2 * sizeTree + extraDaneY,
			this.exl11x3 * sizeTree + extraDaneX,
			this.exl11y3 * sizeTree + extraDaneY); // linia 11ex
		endShape();

		beginShape();
		vertex(this.exl4x1 * sizeTree + extraDaneX,
			this.exl4y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl4x1 * sizeTree + extraDaneX,
			this.exl4y1 * sizeTree + extraDaneY,
			this.exl4x2 * sizeTree + extraDaneX,
			this.exl4y2 * sizeTree + extraDaneY,
			this.exl4x3 * sizeTree + extraDaneX,
			this.exl4y3 * sizeTree + extraDaneY); // linia 4ex
		endShape();


		beginShape();
		vertex(this.exl6x1 * sizeTree + extraDaneX,
			this.exl6y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl6x1 * sizeTree + extraDaneX,
			this.exl6y1 * sizeTree + extraDaneY,
			this.exl6x2 * sizeTree + extraDaneX,
			this.exl6y2 * sizeTree + extraDaneY,
			this.exl6x3 * sizeTree + extraDaneX,
			this.exl6y3 * sizeTree + extraDaneY); // linia 6ex
		endShape();

		beginShape();
		vertex(this.exl5x1 * sizeTree + extraDaneX,
			this.exl5y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl5x1 * sizeTree + extraDaneX,
			this.exl5y1 * sizeTree + extraDaneY,
			this.exl5x2 * sizeTree + extraDaneX,
			this.exl5y2 * sizeTree + extraDaneY,
			this.exl5x3 * sizeTree + extraDaneX,
			this.exl5y3 * sizeTree + extraDaneY); // linia 5ex
		endShape();

		beginShape();
		vertex(this.exl12x1 * sizeTree + extraDaneX,
			this.exl12y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl12x1 * sizeTree + extraDaneX,
			this.exl12y1 * sizeTree + extraDaneY,
			this.exl12x2 * sizeTree + extraDaneX,
			this.exl12y2 * sizeTree + extraDaneY,
			this.exl12x3 * sizeTree + extraDaneX,
			this.exl12y3 * sizeTree + extraDaneY); // linia 12ex
		endShape();

		beginShape();
		vertex(this.exl11ax1 * sizeTree + extraDaneX,
			this.exl11ay1 * sizeTree + extraDaneY);
		bezierVertex(this.exl11ax1 * sizeTree + extraDaneX,
			this.exl11ay1 * sizeTree + extraDaneY,
			this.exl11ax2 * sizeTree + extraDaneX,
			this.exl11ay2 * sizeTree + extraDaneY,
			this.exl11ax3 * sizeTree + extraDaneX,
			this.exl11ay3 * sizeTree + extraDaneY); // linia 11aex
		endShape();

		beginShape();
		vertex(this.exl1x1 * sizeTree + extraDaneX,
			this.exl1y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl1x1 * sizeTree + extraDaneX,
			this.exl1y1 * sizeTree + extraDaneY,
			this.exl1x2 * sizeTree + extraDaneX,
			this.exl1y2 * sizeTree + extraDaneY,
			this.exl1x3 * sizeTree + extraDaneX,
			this.exl1y3 * sizeTree + extraDaneY); // linia 1ex
		endShape();

		beginShape();
		vertex(this.exl2x1 * sizeTree + extraDaneX,
			this.exl2y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl2x1 * sizeTree + extraDaneX,
			this.exl2y1 * sizeTree + extraDaneY,
			this.exl2x2 * sizeTree + extraDaneX,
			this.exl2y2 * sizeTree + extraDaneY,
			this.exl2x3 * sizeTree + extraDaneX,
			this.exl2y3 * sizeTree + extraDaneY); // linia 2ex
		endShape();

		beginShape();
		vertex(this.exl3x1 * sizeTree + extraDaneX,
			this.exl3y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl3x1 * sizeTree + extraDaneX,
			this.exl3y1 * sizeTree + extraDaneY,
			this.exl3x2 * sizeTree + extraDaneX,
			this.exl3y2 * sizeTree + extraDaneY,
			this.exl3x3 * sizeTree + extraDaneX,
			this.exl3y3 * sizeTree + extraDaneY); // linia 3ex
		endShape();

		beginShape();
		vertex(this.exl8x1 * sizeTree + extraDaneX,
			this.exl8y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl8x1 * sizeTree + extraDaneX,
			this.exl8y1 * sizeTree + extraDaneY,
			this.exl8x2 * sizeTree + extraDaneX,
			this.exl8y2 * sizeTree + extraDaneY,
			this.exl8x3 * sizeTree + extraDaneX,
			this.exl8y3 * sizeTree + extraDaneY); //linia 8ex
		endShape();

		beginShape();
		vertex(this.exl7x1 * sizeTree + extraDaneX,
			this.exl7y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl7x1 * sizeTree + extraDaneX,
			this.exl7y1 * sizeTree + extraDaneY,
			this.exl7x2 * sizeTree + extraDaneX,
			this.exl7y2 * sizeTree + extraDaneY,
			this.exl7x3 * sizeTree + extraDaneX,
			this.exl7y3 * sizeTree + extraDaneY); //linia 7ex
		endShape();

		beginShape();
		vertex(this.exl13x1 * sizeTree + extraDaneX,
			this.exl13y1 * sizeTree + extraDaneY);
		bezierVertex(this.exl13x1 * sizeTree + extraDaneX,
			this.exl13y1 * sizeTree + extraDaneY,
			this.exl13x2 * sizeTree + extraDaneX,
			this.exl13y2 * sizeTree + extraDaneY,
			this.exl13x3 * sizeTree + extraDaneX,
			this.exl13y3 * sizeTree + extraDaneY); //linia 13ex
		endShape();
		// extra gałąź - end		
	}

	showTreeNo3() {
		let extraDaneX = startXtreeNo3Single;
		let extraDaneY = startYtreeNo3Single;
		noStroke(0);
		fill(treeColor3);
		// pień drzewa numer 3 - liczone od lewy, dolny róg pnia drzewa - wokół tych punktów nie tworzymy liści - start
		beginShape();
		vertex(this.m3l1x1 + extraDaneX,
			this.m3l1y1 + extraDaneY);
		bezierVertex(this.m3l1x1 + extraDaneX,
			this.m3l1y1 + extraDaneY,
			this.m3l1x2 + extraDaneX,
			this.m3l1y2 + extraDaneY,
			this.m3l1x3 + extraDaneX,
			this.m3l1y3 + extraDaneY); // m3l1 - linia 1

		bezierVertex(this.m3l2x1 + extraDaneX,
			this.m3l2y1 + extraDaneY,
			this.m3l2x2 + extraDaneX,
			this.m3l2y2 + extraDaneY,
			this.m3l2x3 + extraDaneX,
			this.m3l2y3 + extraDaneY); // m3l2 - linia 2

		bezierVertex(this.m3l3x1 + extraDaneX,
			this.m3l3y1 + extraDaneY,
			this.m3l3x2 + extraDaneX,
			this.m3l3y2 + extraDaneY,
			this.m3l3x3 + extraDaneX,
			this.m3l3y3 + extraDaneY); // m3l3 - linia 3

		bezierVertex(this.m3l4x1 + extraDaneX,
			this.m3l4y1 + extraDaneY,
			this.m3l4x2 + extraDaneX,
			this.m3l4y2 + extraDaneY,
			this.m3l4x3 + extraDaneX,
			this.m3l4y3 + extraDaneY); // m3l4 - linia 4);	// m3l4 - linia 4

		bezierVertex(this.m3l5x1 + extraDaneX,
			this.m3l5y1 + extraDaneY,
			this.m3l5x2 + extraDaneX,
			this.m3l5y2 + extraDaneY,
			this.m3l5x3 + extraDaneX,
			this.m3l5y3 + extraDaneY); // m3l5 - linia 5

		bezierVertex(this.m3l6x1 + extraDaneX,
			this.m3l6y1 + extraDaneY,
			this.m3l6x2 + extraDaneX,
			this.m3l6y2 + extraDaneY,
			this.m3l6x3 + extraDaneX,
			this.m3l6y3 + extraDaneY); // m3l6 - linia 6

		bezierVertex(this.m3l7x1 + extraDaneX,
			this.m3l7y1 + extraDaneY,
			this.m3l7x2 + extraDaneX,
			this.m3l7y2 + extraDaneY,
			this.m3l7x3 + extraDaneX,
			this.m3l7y3 + extraDaneY); // m3l7 - linia 7

		bezierVertex(this.m3l8x1 + extraDaneX,
			this.m3l8y1 + extraDaneY,
			this.m3l8x2 + extraDaneX,
			this.m3l8y2 + extraDaneY,
			this.m3l8x3 + extraDaneX,
			this.m3l8y3 + extraDaneY); // m3l8 - linia 8

		bezierVertex(this.m3l9x1 + extraDaneX,
			this.m3l9y1 + extraDaneY,
			this.m3l9x2 + extraDaneX,
			this.m3l9y2 + extraDaneY,
			this.m3l9x3 + extraDaneX,
			this.m3l9y3 + extraDaneY); // m3l9 - linia 9

		bezierVertex(this.m3l10x1 + extraDaneX,
			this.m3l10y1 + extraDaneY,
			this.m3l10x2 + extraDaneX,
			this.m3l10y2 + extraDaneY,
			this.m3l10x3 + extraDaneX,
			this.m3l10y3 + extraDaneY); // m3l10 - linia 10

		bezierVertex(this.m3l11x1 + extraDaneX,
			this.m3l11y1 + extraDaneY,
			this.m3l11x2 + extraDaneX,
			this.m3l11y2 + extraDaneY,
			this.m3l11x3 + extraDaneX,
			this.m3l11y3 + extraDaneY); // m3l11 - linia 11

		bezierVertex(this.m3l12x1 + extraDaneX,
			this.m3l12y1 + extraDaneY,
			this.m3l12x2 + extraDaneX,
			this.m3l12y2 + extraDaneY,
			this.m3l12x3 + extraDaneX,
			this.m3l12y3 + extraDaneY); // m3l12 - linia 12

		bezierVertex(this.m3l13x1 + extraDaneX,
			this.m3l13y1 + extraDaneY,
			this.m3l13x2 + extraDaneX,
			this.m3l13y2 + extraDaneY,
			this.m3l13x3 + extraDaneX,
			this.m3l13y3 + extraDaneY); // m3l13 - linia 13

		bezierVertex(this.m3l14x1 + extraDaneX,
			this.m3l14y1 + extraDaneY,
			this.m3l14x2 + extraDaneX,
			this.m3l14y2 + extraDaneY,
			this.m3l14x3 + extraDaneX,
			this.m3l14y3 + extraDaneY); // m3l14 - linia 14

		bezierVertex(this.m3l15x1 + extraDaneX,
			this.m3l15y1 + extraDaneY,
			this.m3l15x2 + extraDaneX,
			this.m3l15y2 + extraDaneY,
			this.m3l15x3 + extraDaneX,
			this.m3l15y3 + extraDaneY); // m3l15 - linia 15

		bezierVertex(this.m3l16x1 + extraDaneX,
			this.m3l16y1 + extraDaneY,
			this.m3l16x2 + extraDaneX,
			this.m3l16y2 + extraDaneY,
			this.m3l16x3 + extraDaneX,
			this.m3l16y3 + extraDaneY); // m3l16 - linia 16

		bezierVertex(this.m3l17x1 + extraDaneX,
			this.m3l17y1 + extraDaneY,
			this.m3l17x2 + extraDaneX,
			this.m3l17y2 + extraDaneY,
			this.m3l17x3 + extraDaneX,
			this.m3l17y3 + extraDaneY); // m3l17 - linia 17

		bezierVertex(this.m3l18x1 + extraDaneX,
			this.m3l18y1 + extraDaneY,
			this.m3l18x2 + extraDaneX,
			this.m3l18y2 + extraDaneY,
			this.m3l18x3 + extraDaneX,
			this.m3l18y3 + extraDaneY); // m3l18 - linia 18

		bezierVertex(this.m3l19x1 + extraDaneX,
			this.m3l19y1 + extraDaneY,
			this.m3l19x2 + extraDaneX,
			this.m3l19y2 + extraDaneY,
			this.m3l19x3 + extraDaneX,
			this.m3l19y3 + extraDaneY); // m3l19 - linia 19

		bezierVertex(this.m3l20x1 + extraDaneX,
			this.m3l20y1 + extraDaneY,
			this.m3l20x2 + extraDaneX,
			this.m3l20y2 + extraDaneY,
			this.m3l20x3 + extraDaneX,
			this.m3l20y3 + extraDaneY); // m3l20 - linia 20

		bezierVertex(this.m3l21x1 + extraDaneX,
			this.m3l21y1 + extraDaneY,
			this.m3l21x2 + extraDaneX,
			this.m3l21y2 + extraDaneY,
			this.m3l21x3 + extraDaneX,
			this.m3l21y3 + extraDaneY); // m3l21 - linia 21

		endShape();
		// pień drzewa numer - end

		// pierwsza gałąź - licząc od lewej - gałąź czerwona 1 - start
		stroke(treeColor3);
		//		stroke(0, 255, 0);	
		noFill();
		beginShape();
		vertex(this.r1l1x1 + extraDaneX,
			this.r1l1y1 + extraDaneY);
		bezierVertex(this.r1l1x1 + extraDaneX,
			this.r1l1y1 + extraDaneY,
			this.r1l1x2 + extraDaneX,
			this.r1l1y2 + extraDaneY,
			this.r1l1x3 + extraDaneX,
			this.r1l1y3 + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r1l7x1 + extraDaneX,
			this.r1l7y1 + extraDaneY);
		bezierVertex(this.r1l7x1 + extraDaneX,
			this.r1l7y1 + extraDaneY,
			this.r1l7x2 + extraDaneX,
			this.r1l7y2 + extraDaneY,
			this.r1l7x3 + extraDaneX,
			this.r1l7y3 + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.r1l28x1 + extraDaneX,
			this.r1l28y1 + extraDaneY);
		bezierVertex(this.r1l28x1 + extraDaneX,
			this.r1l28y1 + extraDaneY,
			this.r1l28x2 + extraDaneX,
			this.r1l28y2 + extraDaneY,
			this.r1l28x3 + extraDaneX,
			this.r1l28y3 + extraDaneY); //linia 28
		endShape();

		beginShape();
		vertex(this.r1l29x1 + extraDaneX,
			this.r1l29y1 + extraDaneY);
		bezierVertex(this.r1l29x1 + extraDaneX,
			this.r1l29y1 + extraDaneY,
			this.r1l29x2 + extraDaneX,
			this.r1l29y2 + extraDaneY,
			this.r1l29x3 + extraDaneX,
			this.r1l29y3 + extraDaneY); //linia 29
		endShape();

		beginShape();
		vertex(this.r1l30x1 + extraDaneX,
			this.r1l30y1 + extraDaneY);
		bezierVertex(this.r1l30x1 + extraDaneX,
			this.r1l30y1 + extraDaneY,
			this.r1l30x2 + extraDaneX,
			this.r1l30y2 + extraDaneY,
			this.r1l30x3 + extraDaneX,
			this.r1l30y3 + extraDaneY); //linia 30
		endShape();

		beginShape();
		vertex(this.r1l2x1 + extraDaneX,
			this.r1l2y1 + extraDaneY);
		bezierVertex(this.r1l2x1 + extraDaneX,
			this.r1l2y1 + extraDaneY,
			this.r1l2x2 + extraDaneX,
			this.r1l2y2 + extraDaneY,
			this.r1l2x3 + extraDaneX,
			this.r1l2y3 + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.r1l8x1 + extraDaneX,
			this.r1l8y1 + extraDaneY);
		bezierVertex(this.r1l8x1 + extraDaneX,
			this.r1l8y1 + extraDaneY,
			this.r1l8x2 + extraDaneX,
			this.r1l8y2 + extraDaneY,
			this.r1l8x3 + extraDaneX,
			this.r1l8y3 + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.r1l2ax1 + extraDaneX,
			this.r1l2ay1 + extraDaneY);
		bezierVertex(this.r1l2ax1 + extraDaneX,
			this.r1l2ay1 + extraDaneY,
			this.r1l2ax2 + extraDaneX,
			this.r1l2ay2 + extraDaneY,
			this.r1l2ax3 + extraDaneX,
			this.r1l2ay3 + extraDaneY); //linia 2a
		endShape();

		beginShape();
		vertex(this.r1l3x1 + extraDaneX,
			this.r1l3y1 + extraDaneY);
		bezierVertex(this.r1l3x1 + extraDaneX,
			this.r1l3y1 + extraDaneY,
			this.r1l3x2 + extraDaneX,
			this.r1l3y2 + extraDaneY,
			this.r1l3x3 + extraDaneX,
			this.r1l3y3 + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.r1l4x1 + extraDaneX,
			this.r1l4y1 + extraDaneY);
		bezierVertex(this.r1l4x1 + extraDaneX,
			this.r1l4y1 + extraDaneY,
			this.r1l4x2 + extraDaneX,
			this.r1l4y2 + extraDaneY,
			this.r1l4x3 + extraDaneX,
			this.r1l4y3 + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.r1l5x1 + extraDaneX,
			this.r1l5y1 + extraDaneY);
		bezierVertex(this.r1l5x1 + extraDaneX,
			this.r1l5y1 + extraDaneY,
			this.r1l5x2 + extraDaneX,
			this.r1l5y2 + extraDaneY,
			this.r1l5x3 + extraDaneX,
			this.r1l5y3 + extraDaneY); //linia 5
		endShape();

		beginShape();
		vertex(this.r1l6x1 + extraDaneX,
			this.r1l6y1 + extraDaneY);
		bezierVertex(this.r1l6x1 + extraDaneX,
			this.r1l6y1 + extraDaneY,
			this.r1l6x2 + extraDaneX,
			this.r1l6y2 + extraDaneY,
			this.r1l6x3 + extraDaneX,
			this.r1l6y3 + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.r1l9x1 + extraDaneX,
			this.r1l9y1 + extraDaneY);
		bezierVertex(this.r1l9x1 + extraDaneX,
			this.r1l9y1 + extraDaneY,
			this.r1l9x2 + extraDaneX,
			this.r1l9y2 + extraDaneY,
			this.r1l9x3 + extraDaneX,
			this.r1l9y3 + extraDaneY); //linia 9
		endShape();

		beginShape();
		vertex(this.r1l10x1 + extraDaneX,
			this.r1l10y1 + extraDaneY);
		bezierVertex(this.r1l10x1 + extraDaneX,
			this.r1l10y1 + extraDaneY,
			this.r1l10x2 + extraDaneX,
			this.r1l10y2 + extraDaneY,
			this.r1l10x3 + extraDaneX,
			this.r1l10y3 + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.r1l11x1 + extraDaneX,
			this.r1l11y1 + extraDaneY);
		bezierVertex(this.r1l11x1 + extraDaneX,
			this.r1l11y1 + extraDaneY,
			this.r1l11x2 + extraDaneX,
			this.r1l11y2 + extraDaneY,
			this.r1l11x3 + extraDaneX,
			this.r1l11y3 + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.r1l14x1 + extraDaneX,
			this.r1l14y1 + extraDaneY);
		bezierVertex(this.r1l14x1 + extraDaneX,
			this.r1l14y1 + extraDaneY,
			this.r1l14x2 + extraDaneX,
			this.r1l14y2 + extraDaneY,
			this.r1l14x3 + extraDaneX,
			this.r1l14y3 + extraDaneY); //linia 14
		endShape();

		beginShape();
		vertex(this.r1l13x1 + extraDaneX,
			this.r1l13y1 + extraDaneY);
		bezierVertex(this.r1l13x1 + extraDaneX,
			this.r1l13y1 + extraDaneY,
			this.r1l13x2 + extraDaneX,
			this.r1l13y2 + extraDaneY,
			this.r1l13x3 + extraDaneX,
			this.r1l13y3 + extraDaneY); //linia 13
		endShape();

		beginShape();
		vertex(this.r1l12x1 + extraDaneX,
			this.r1l12y1 + extraDaneY);
		bezierVertex(this.r1l12x1 + extraDaneX,
			this.r1l12y1 + extraDaneY,
			this.r1l12x2 + extraDaneX,
			this.r1l12y2 + extraDaneY,
			this.r1l12x3 + extraDaneX,
			this.r1l12y3 + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.r1l15x1 + extraDaneX,
			this.r1l15y1 + extraDaneY);
		bezierVertex(this.r1l15x1 + extraDaneX,
			this.r1l15y1 + extraDaneY,
			this.r1l15x2 + extraDaneX,
			this.r1l15y2 + extraDaneY,
			this.r1l15x3 + extraDaneX,
			this.r1l15y3 + extraDaneY); //linia 15
		endShape();

		beginShape();
		vertex(this.r1l17x1 + extraDaneX,
			this.r1l17y1 + extraDaneY);
		bezierVertex(this.r1l17x1 + extraDaneX,
			this.r1l17y1 + extraDaneY,
			this.r1l17x2 + extraDaneX,
			this.r1l17y2 + extraDaneY,
			this.r1l17x3 + extraDaneX,
			this.r1l17y3 + extraDaneY); //linia 17
		endShape();

		beginShape();
		vertex(this.r1l19x1 + extraDaneX,
			this.r1l19y1 + extraDaneY);
		bezierVertex(this.r1l19x1 + extraDaneX,
			this.r1l19y1 + extraDaneY,
			this.r1l19x2 + extraDaneX,
			this.r1l19y2 + extraDaneY,
			this.r1l19x3 + extraDaneX,
			this.r1l19y3 + extraDaneY); //linia 19
		endShape();

		beginShape();
		vertex(this.r1l18x1 + extraDaneX,
			this.r1l18y1 + extraDaneY);
		bezierVertex(this.r1l18x1 + extraDaneX,
			this.r1l18y1 + extraDaneY,
			this.r1l18x2 + extraDaneX,
			this.r1l18y2 + extraDaneY,
			this.r1l18x3 + extraDaneX,
			this.r1l18y3 + extraDaneY); //linia 18
		endShape();

		beginShape();
		vertex(this.r1l17ax1 + extraDaneX,
			this.r1l17ay1 + extraDaneY);
		bezierVertex(this.r1l17ax1 + extraDaneX,
			this.r1l17ay1 + extraDaneY,
			this.r1l17ax2 + extraDaneX,
			this.r1l17ay2 + extraDaneY,
			this.r1l17ax3 + extraDaneX,
			this.r1l17ay3 + extraDaneY); //linia 17a
		endShape();

		beginShape();
		vertex(this.r1l22x1 + extraDaneX,
			this.r1l22y1 + extraDaneY);
		bezierVertex(this.r1l22x1 + extraDaneX,
			this.r1l22y1 + extraDaneY,
			this.r1l22x2 + extraDaneX,
			this.r1l22y2 + extraDaneY,
			this.r1l22x3 + extraDaneX,
			this.r1l22y3 + extraDaneY); //linia 22
		endShape();

		beginShape();
		vertex(this.r1l23x1 + extraDaneX,
			this.r1l23y1 + extraDaneY);
		bezierVertex(this.r1l23x1 + extraDaneX,
			this.r1l23y1 + extraDaneY,
			this.r1l23x2 + extraDaneX,
			this.r1l23y2 + extraDaneY,
			this.r1l23x3 + extraDaneX,
			this.r1l23y3 + extraDaneY); //linia 23
		endShape();

		beginShape();
		vertex(this.r1l23ax1 + extraDaneX,
			this.r1l23ay1 + extraDaneY);
		bezierVertex(this.r1l23ax1 + extraDaneX,
			this.r1l23ay1 + extraDaneY,
			this.r1l23ax2 + extraDaneX,
			this.r1l23ay2 + extraDaneY,
			this.r1l23ax3 + extraDaneX,
			this.r1l23ay3 + extraDaneY); //linia 23a
		endShape();

		beginShape();
		vertex(this.r1l24x1 + extraDaneX,
			this.r1l24y1 + extraDaneY);
		bezierVertex(this.r1l24x1 + extraDaneX,
			this.r1l24y1 + extraDaneY,
			this.r1l24x2 + extraDaneX,
			this.r1l24y2 + extraDaneY,
			this.r1l24x3 + extraDaneX,
			this.r1l24y3 + extraDaneY); //linia 24
		endShape();

		// pierwsza gałąź - end	

		// druga gałąź - gałąź fioletowa 1 - start
		//		stroke(0, 0, 255);
		beginShape();
		vertex(this.p1l1x1 + extraDaneX,
			this.p1l1y1 + extraDaneY);
		bezierVertex(this.p1l1x1 + extraDaneX,
			this.p1l1y1 + extraDaneY,
			this.p1l1x2 + extraDaneX,
			this.p1l1y2 + extraDaneY,
			this.p1l1x3 + extraDaneX,
			this.p1l1y3 + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p1l7x1 + extraDaneX,
			this.p1l7y1 + extraDaneY);
		bezierVertex(this.p1l7x1 + extraDaneX,
			this.p1l7y1 + extraDaneY,
			this.p1l7x2 + extraDaneX,
			this.p1l7y2 + extraDaneY,
			this.p1l7x3 + extraDaneX,
			this.p1l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p1l8x1 + extraDaneX,
			this.p1l8y1 + extraDaneY);
		bezierVertex(this.p1l8x1 + extraDaneX,
			this.p1l8y1 + extraDaneY,
			this.p1l8x2 + extraDaneX,
			this.p1l8y2 + extraDaneY,
			this.p1l8x3 + extraDaneX,
			this.p1l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p1l9x1 + extraDaneX,
			this.p1l9y1 + extraDaneY);
		bezierVertex(this.p1l9x1 + extraDaneX,
			this.p1l9y1 + extraDaneY,
			this.p1l9x2 + extraDaneX,
			this.p1l9y2 + extraDaneY,
			this.p1l9x3 + extraDaneX,
			this.p1l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.p1l10x1 + extraDaneX,
			this.p1l10y1 + extraDaneY);
		bezierVertex(this.p1l10x1 + extraDaneX,
			this.p1l10y1 + extraDaneY,
			this.p1l10x2 + extraDaneX,
			this.p1l10y2 + extraDaneY,
			this.p1l10x3 + extraDaneX,
			this.p1l10y3 + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p1l11ax1 + extraDaneX,
			this.p1l11ay1 + extraDaneY);
		bezierVertex(this.p1l11ax1 + extraDaneX,
			this.p1l11ay1 + extraDaneY,
			this.p1l11ax2 + extraDaneX,
			this.p1l11ay2 + extraDaneY,
			this.p1l11ax3 + extraDaneX,
			this.p1l11ay3 + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.p1l11bx1 + extraDaneX,
			this.p1l11by1 + extraDaneY);
		bezierVertex(this.p1l11bx1 + extraDaneX,
			this.p1l11by1 + extraDaneY,
			this.p1l11bx2 + extraDaneX,
			this.p1l11by2 + extraDaneY,
			this.p1l11bx3 + extraDaneX,
			this.p1l11by3 + extraDaneY); // linia 11b
		endShape();

		beginShape();
		vertex(this.p1l12x1 + extraDaneX,
			this.p1l12y1 + extraDaneY);
		bezierVertex(this.p1l12x1 + extraDaneX,
			this.p1l12y1 + extraDaneY,
			this.p1l12x2 + extraDaneX,
			this.p1l12y2 + extraDaneY,
			this.p1l12x3 + extraDaneX,
			this.p1l12y3 + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p1l13x1 + extraDaneX,
			this.p1l13y1 + extraDaneY);
		bezierVertex(this.p1l13x1 + extraDaneX,
			this.p1l13y1 + extraDaneY,
			this.p1l13x2 + extraDaneX,
			this.p1l13y2 + extraDaneY,
			this.p1l13x3 + extraDaneX,
			this.p1l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p1l14x1 + extraDaneX,
			this.p1l14y1 + extraDaneY);
		bezierVertex(this.p1l14x1 + extraDaneX,
			this.p1l14y1 + extraDaneY,
			this.p1l14x2 + extraDaneX,
			this.p1l14y2 + extraDaneY,
			this.p1l14x3 + extraDaneX,
			this.p1l14y3 + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p1l15x1 + extraDaneX,
			this.p1l15y1 + extraDaneY);
		bezierVertex(this.p1l15x1 + extraDaneX,
			this.p1l15y1 + extraDaneY,
			this.p1l15x2 + extraDaneX,
			this.p1l15y2 + extraDaneY,
			this.p1l15x3 + extraDaneX,
			this.p1l15y3 + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p1l16x1 + extraDaneX,
			this.p1l16y1 + extraDaneY);
		bezierVertex(this.p1l16x1 + extraDaneX,
			this.p1l16y1 + extraDaneY,
			this.p1l16x2 + extraDaneX,
			this.p1l16y2 + extraDaneY,
			this.p1l16x3 + extraDaneX,
			this.p1l16y3 + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.p1l17ax1 + extraDaneX,
			this.p1l17ay1 + extraDaneY);
		bezierVertex(this.p1l17ax1 + extraDaneX,
			this.p1l17ay1 + extraDaneY,
			this.p1l17ax2 + extraDaneX,
			this.p1l17ay2 + extraDaneY,
			this.p1l17ax3 + extraDaneX,
			this.p1l17ay3 + extraDaneY); // linia 17a
		endShape();

		beginShape();
		vertex(this.p1l17bx1 + extraDaneX,
			this.p1l17by1 + extraDaneY);
		bezierVertex(this.p1l17bx1 + extraDaneX,
			this.p1l17by1 + extraDaneY,
			this.p1l17bx2 + extraDaneX,
			this.p1l17by2 + extraDaneY,
			this.p1l17bx3 + extraDaneX,
			this.p1l17by3 + extraDaneY); // linia 17b
		endShape();

		beginShape();
		vertex(this.p1l18x1 + extraDaneX,
			this.p1l18y1 + extraDaneY);
		bezierVertex(this.p1l18x1 + extraDaneX,
			this.p1l18y1 + extraDaneY,
			this.p1l18x2 + extraDaneX,
			this.p1l18y2 + extraDaneY,
			this.p1l18x3 + extraDaneX,
			this.p1l18y3 + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.p1l19x1 + extraDaneX,
			this.p1l19y1 + extraDaneY);
		bezierVertex(this.p1l19x1 + extraDaneX,
			this.p1l19y1 + extraDaneY,
			this.p1l19x2 + extraDaneX,
			this.p1l19y2 + extraDaneY,
			this.p1l19x3 + extraDaneX,
			this.p1l19y3 + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.p1l18ax1 + extraDaneX,
			this.p1l18ay1 + extraDaneY);
		bezierVertex(this.p1l18ax1 + extraDaneX,
			this.p1l18ay1 + extraDaneY,
			this.p1l18ax2 + extraDaneX,
			this.p1l18ay2 + extraDaneY,
			this.p1l18ax3 + extraDaneX,
			this.p1l18ay3 + extraDaneY); // linia 18a
		endShape();

		beginShape();
		vertex(this.p1l20x1 + extraDaneX,
			this.p1l20y1 + extraDaneY);
		bezierVertex(this.p1l20x1 + extraDaneX,
			this.p1l20y1 + extraDaneY,
			this.p1l20x2 + extraDaneX,
			this.p1l20y2 + extraDaneY,
			this.p1l20x3 + extraDaneX,
			this.p1l20y3 + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.p1l21x1 + extraDaneX,
			this.p1l21y1 + extraDaneY);
		bezierVertex(this.p1l21x1 + extraDaneX,
			this.p1l21y1 + extraDaneY,
			this.p1l21x2 + extraDaneX,
			this.p1l21y2 + extraDaneY,
			this.p1l21x3 + extraDaneX,
			this.p1l21y3 + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.p1l22x1 + extraDaneX,
			this.p1l22y1 + extraDaneY);
		bezierVertex(this.p1l22x1 + extraDaneX,
			this.p1l22y1 + extraDaneY,
			this.p1l22x2 + extraDaneX,
			this.p1l22y2 + extraDaneY,
			this.p1l22x3 + extraDaneX,
			this.p1l22y3 + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.p1l23x1 + extraDaneX,
			this.p1l23y1 + extraDaneY);
		bezierVertex(this.p1l23x1 + extraDaneX,
			this.p1l23y1 + extraDaneY,
			this.p1l23x2 + extraDaneX,
			this.p1l23y2 + extraDaneY,
			this.p1l23x3 + extraDaneX,
			this.p1l23y3 + extraDaneY); // linia 23
		endShape();

		beginShape();
		vertex(this.p1l24x1 + extraDaneX,
			this.p1l24y1 + extraDaneY);
		bezierVertex(this.p1l24x1 + extraDaneX,
			this.p1l24y1 + extraDaneY,
			this.p1l24x2 + extraDaneX,
			this.p1l24y2 + extraDaneY,
			this.p1l24x3 + extraDaneX,
			this.p1l24y3 + extraDaneY); // linia 24
		endShape();

		beginShape();
		vertex(this.p1l25x1 + extraDaneX,
			this.p1l25y1 + extraDaneY);
		bezierVertex(this.p1l25x1 + extraDaneX,
			this.p1l25y1 + extraDaneY,
			this.p1l25x2 + extraDaneX,
			this.p1l25y2 + extraDaneY,
			this.p1l25x3 + extraDaneX,
			this.p1l25y3 + extraDaneY); // linia 25
		endShape();

		beginShape();
		vertex(this.p1l27x1 + extraDaneX,
			this.p1l27y1 + extraDaneY);
		bezierVertex(this.p1l27x1 + extraDaneX,
			this.p1l27y1 + extraDaneY,
			this.p1l27x2 + extraDaneX,
			this.p1l27y2 + extraDaneY,
			this.p1l27x3 + extraDaneX,
			this.p1l27y3 + extraDaneY); // linia 27
		endShape();

		beginShape();
		vertex(this.p1l28x1 + extraDaneX,
			this.p1l28y1 + extraDaneY);
		bezierVertex(this.p1l28x1 + extraDaneX,
			this.p1l28y1 + extraDaneY,
			this.p1l28x2 + extraDaneX,
			this.p1l28y2 + extraDaneY,
			this.p1l28x3 + extraDaneX,
			this.p1l28y3 + extraDaneY); // linia 28
		endShape();

		beginShape();
		vertex(this.p1l29ax1 + extraDaneX,
			this.p1l29ay1 + extraDaneY);
		bezierVertex(this.p1l29ax1 + extraDaneX,
			this.p1l29ay1 + extraDaneY,
			this.p1l29ax2 + extraDaneX,
			this.p1l29ay2 + extraDaneY,
			this.p1l29ax3 + extraDaneX,
			this.p1l29ay3 + extraDaneY); // linia 29a
		endShape();

		beginShape();
		vertex(this.p1l29bx1 + extraDaneX,
			this.p1l29by1 + extraDaneY);
		bezierVertex(this.p1l29bx1 + extraDaneX,
			this.p1l29by1 + extraDaneY,
			this.p1l29bx2 + extraDaneX,
			this.p1l29by2 + extraDaneY,
			this.p1l29bx3 + extraDaneX,
			this.p1l29by3 + extraDaneY); // linia 29b
		endShape();

		beginShape();
		vertex(this.p1l30ax1 + extraDaneX,
			this.p1l30ay1 + extraDaneY);
		bezierVertex(this.p1l30ax1 + extraDaneX,
			this.p1l30ay1 + extraDaneY,
			this.p1l30ax2 + extraDaneX,
			this.p1l30ay2 + extraDaneY,
			this.p1l30ax3 + extraDaneX,
			this.p1l30ay3 + extraDaneY); // linia 30a
		endShape();

		beginShape();
		vertex(this.p1l30bx1 + extraDaneX,
			this.p1l30by1 + extraDaneY);
		bezierVertex(this.p1l30bx1 + extraDaneX,
			this.p1l30by1 + extraDaneY,
			this.p1l30bx2 + extraDaneX,
			this.p1l30by2 + extraDaneY,
			this.p1l30bx3 + extraDaneX,
			this.p1l30by3 + extraDaneY); // linia 30b
		endShape();

		beginShape();
		vertex(this.p1l31x1 + extraDaneX,
			this.p1l31y1 + extraDaneY);
		bezierVertex(this.p1l31x1 + extraDaneX,
			this.p1l31y1 + extraDaneY,
			this.p1l31x2 + extraDaneX,
			this.p1l31y2 + extraDaneY,
			this.p1l31x3 + extraDaneX,
			this.p1l31y3 + extraDaneY); // linia 31
		endShape();

		beginShape();
		vertex(this.p1l32ax1 + extraDaneX,
			this.p1l32ay1 + extraDaneY);
		bezierVertex(this.p1l32ax1 + extraDaneX,
			this.p1l32ay1 + extraDaneY,
			this.p1l32ax2 + extraDaneX,
			this.p1l32ay2 + extraDaneY,
			this.p1l32ax3 + extraDaneX,
			this.p1l32ay3 + extraDaneY); // linia 32a
		endShape();

		beginShape();
		vertex(this.p1l33x1 + extraDaneX,
			this.p1l33y1 + extraDaneY);
		bezierVertex(this.p1l33x1 + extraDaneX,
			this.p1l33y1 + extraDaneY,
			this.p1l33x2 + extraDaneX,
			this.p1l33y2 + extraDaneY,
			this.p1l33x3 + extraDaneX,
			this.p1l33y3 + extraDaneY); // linia 33
		endShape();

		beginShape();
		vertex(this.p1l34x1 + extraDaneX,
			this.p1l34y1 + extraDaneY);
		bezierVertex(this.p1l34x1 + extraDaneX,
			this.p1l34y1 + extraDaneY,
			this.p1l34x2 + extraDaneX,
			this.p1l34y2 + extraDaneY,
			this.p1l34x3 + extraDaneX,
			this.p1l34y3 + extraDaneY); // linia 34
		endShape();

		beginShape();
		vertex(this.p1l35x1 + extraDaneX,
			this.p1l35y1 + extraDaneY);
		bezierVertex(this.p1l35x1 + extraDaneX,
			this.p1l35y1 + extraDaneY,
			this.p1l35x2 + extraDaneX,
			this.p1l35y2 + extraDaneY,
			this.p1l35x3 + extraDaneX,
			this.p1l35y3 + extraDaneY); // linia 35
		endShape();

		beginShape();
		vertex(this.p1l36x1 + extraDaneX,
			this.p1l36y1 + extraDaneY);
		bezierVertex(this.p1l36x1 + extraDaneX,
			this.p1l36y1 + extraDaneY,
			this.p1l36x2 + extraDaneX,
			this.p1l36y2 + extraDaneY,
			this.p1l36x3 + extraDaneX,
			this.p1l36y3 + extraDaneY); // linia 36
		endShape();
		// druga gałąź - end


		// trzecia gałąź - licząc od lewej - gałąź zielona 1 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.z1l1ax1 + extraDaneX,
			this.z1l1ay1 + extraDaneY);
		bezierVertex(this.z1l1ax1 + extraDaneX,
			this.z1l1ay1 + extraDaneY,
			this.z1l1ax2 + extraDaneX,
			this.z1l1ay2 + extraDaneY,
			this.z1l1ax3 + extraDaneX,
			this.z1l1ay3 + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z1l1bx1 + extraDaneX,
			this.z1l1by1 + extraDaneY);
		bezierVertex(this.z1l1bx1 + extraDaneX,
			this.z1l1by1 + extraDaneY,
			this.z1l1bx2 + extraDaneX,
			this.z1l1by2 + extraDaneY,
			this.z1l1bx3 + extraDaneX,
			this.z1l1by3 + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z1l8x1 + extraDaneX,
			this.z1l8y1 + extraDaneY);
		bezierVertex(this.z1l8x1 + extraDaneX,
			this.z1l8y1 + extraDaneY,
			this.z1l8x2 + extraDaneX,
			this.z1l8y2 + extraDaneY,
			this.z1l8x3 + extraDaneX,
			this.z1l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z1l5x1 + extraDaneX,
			this.z1l5y1 + extraDaneY);
		bezierVertex(this.z1l5x1 + extraDaneX,
			this.z1l5y1 + extraDaneY,
			this.z1l5x2 + extraDaneX,
			this.z1l5y2 + extraDaneY,
			this.z1l5x3 + extraDaneX,
			this.z1l5y3 + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z1l2x1 + extraDaneX,
			this.z1l2y1 + extraDaneY);
		bezierVertex(this.z1l2x1 + extraDaneX,
			this.z1l2y1 + extraDaneY,
			this.z1l2x2 + extraDaneX,
			this.z1l2y2 + extraDaneY,
			this.z1l2x3 + extraDaneX,
			this.z1l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z1l3x1 + extraDaneX,
			this.z1l3y1 + extraDaneY);
		bezierVertex(this.z1l3x1 + extraDaneX,
			this.z1l3y1 + extraDaneY,
			this.z1l3x2 + extraDaneX,
			this.z1l3y2 + extraDaneY,
			this.z1l3x3 + extraDaneX,
			this.z1l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z1l4x1 + extraDaneX,
			this.z1l4y1 + extraDaneY);
		bezierVertex(this.z1l4x1 + extraDaneX,
			this.z1l4y1 + extraDaneY,
			this.z1l4x2 + extraDaneX,
			this.z1l4y2 + extraDaneY,
			this.z1l4x3 + extraDaneX,
			this.z1l4y3 + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z1l10x1 + extraDaneX,
			this.z1l10y1 + extraDaneY);
		bezierVertex(this.z1l10x1 + extraDaneX,
			this.z1l10y1 + extraDaneY,
			this.z1l10x2 + extraDaneX,
			this.z1l10y2 + extraDaneY,
			this.z1l10x3 + extraDaneX,
			this.z1l10y3 + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.z1l9x1 + extraDaneX,
			this.z1l9y1 + extraDaneY);
		bezierVertex(this.z1l9x1 + extraDaneX,
			this.z1l9y1 + extraDaneY,
			this.z1l9x2 + extraDaneX,
			this.z1l9y2 + extraDaneY,
			this.z1l9x3 + extraDaneX,
			this.z1l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z1l11x1 + extraDaneX,
			this.z1l11y1 + extraDaneY);
		bezierVertex(this.z1l11x1 + extraDaneX,
			this.z1l11y1 + extraDaneY,
			this.z1l11x2 + extraDaneX,
			this.z1l11y2 + extraDaneY,
			this.z1l11x3 + extraDaneX,
			this.z1l11y3 + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.z1l11ax1 + extraDaneX,
			this.z1l11ay1 + extraDaneY);
		bezierVertex(this.z1l11ax1 + extraDaneX,
			this.z1l11ay1 + extraDaneY,
			this.z1l11ax2 + extraDaneX,
			this.z1l11ay2 + extraDaneY,
			this.z1l11ax3 + extraDaneX,
			this.z1l11ay3 + extraDaneY); // linia 11a
		endShape();

		beginShape();
		vertex(this.z1l22x1 + extraDaneX,
			this.z1l22y1 + extraDaneY);
		bezierVertex(this.z1l22x1 + extraDaneX,
			this.z1l22y1 + extraDaneY,
			this.z1l22x2 + extraDaneX,
			this.z1l22y2 + extraDaneY,
			this.z1l22x3 + extraDaneX,
			this.z1l22y3 + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z1l18x1 + extraDaneX,
			this.z1l18y1 + extraDaneY);
		bezierVertex(this.z1l18x1 + extraDaneX,
			this.z1l18y1 + extraDaneY,
			this.z1l18x2 + extraDaneX,
			this.z1l18y2 + extraDaneY,
			this.z1l18x3 + extraDaneX,
			this.z1l18y3 + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z1l21x1 + extraDaneX,
			this.z1l21y1 + extraDaneY);
		bezierVertex(this.z1l21x1 + extraDaneX,
			this.z1l21y1 + extraDaneY,
			this.z1l21x2 + extraDaneX,
			this.z1l21y2 + extraDaneY,
			this.z1l21x3 + extraDaneX,
			this.z1l21y3 + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z1l19x1 + extraDaneX,
			this.z1l19y1 + extraDaneY);
		bezierVertex(this.z1l19x1 + extraDaneX,
			this.z1l19y1 + extraDaneY,
			this.z1l19x2 + extraDaneX,
			this.z1l19y2 + extraDaneY,
			this.z1l19x3 + extraDaneX,
			this.z1l19y3 + extraDaneY); // linia 19
		endShape();

		beginShape();
		vertex(this.z1l20x1 + extraDaneX,
			this.z1l20y1 + extraDaneY);
		bezierVertex(this.z1l20x1 + extraDaneX,
			this.z1l20y1 + extraDaneY,
			this.z1l20x2 + extraDaneX,
			this.z1l20y2 + extraDaneY,
			this.z1l20x3 + extraDaneX,
			this.z1l20y3 + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z1l14ax1 + extraDaneX,
			this.z1l14ay1 + extraDaneY);
		bezierVertex(this.z1l14ax1 + extraDaneX,
			this.z1l14ay1 + extraDaneY,
			this.z1l14ax2 + extraDaneX,
			this.z1l14ay2 + extraDaneY,
			this.z1l14ax3 + extraDaneX,
			this.z1l14ay3 + extraDaneY); // linia 14a
		endShape();

		beginShape();
		vertex(this.z1l14bx1 + extraDaneX,
			this.z1l14by1 + extraDaneY);
		bezierVertex(this.z1l14bx1 + extraDaneX,
			this.z1l14by1 + extraDaneY,
			this.z1l14bx2 + extraDaneX,
			this.z1l14by2 + extraDaneY,
			this.z1l14bx3 + extraDaneX,
			this.z1l14by3 + extraDaneY); // linia 14b
		endShape();

		beginShape();
		vertex(this.z1l16x1 + extraDaneX,
			this.z1l16y1 + extraDaneY);
		bezierVertex(this.z1l16x1 + extraDaneX,
			this.z1l16y1 + extraDaneY,
			this.z1l16x2 + extraDaneX,
			this.z1l16y2 + extraDaneY,
			this.z1l16x3 + extraDaneX,
			this.z1l16y3 + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z1l17x1 + extraDaneX,
			this.z1l17y1 + extraDaneY);
		bezierVertex(this.z1l17x1 + extraDaneX,
			this.z1l17y1 + extraDaneY,
			this.z1l17x2 + extraDaneX,
			this.z1l17y2 + extraDaneY,
			this.z1l17x3 + extraDaneX,
			this.z1l17y3 + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z1l13x1 + extraDaneX,
			this.z1l13y1 + extraDaneY);
		bezierVertex(this.z1l13x1 + extraDaneX,
			this.z1l13y1 + extraDaneY,
			this.z1l13x2 + extraDaneX,
			this.z1l13y2 + extraDaneY,
			this.z1l13x3 + extraDaneX,
			this.z1l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z1l12x1 + extraDaneX,
			this.z1l12y1 + extraDaneY);
		bezierVertex(this.z1l12x1 + extraDaneX,
			this.z1l12y1 + extraDaneY,
			this.z1l12x2 + extraDaneX,
			this.z1l12y2 + extraDaneY,
			this.z1l12x3 + extraDaneX,
			this.z1l12y3 + extraDaneY); // linia 12
		endShape();

		// trzecia gałąź - end		

		// czwarta gałąź - licząc od lewej - gałąź zielona 2 - start
		//		stroke(150, 255, 100);	
		beginShape();
		vertex(this.z2l2x1 + extraDaneX,
			this.z2l2y1 + extraDaneY);
		bezierVertex(this.z2l2x1 + extraDaneX,
			this.z2l2y1 + extraDaneY,
			this.z2l2x2 + extraDaneX,
			this.z2l2y2 + extraDaneY,
			this.z2l2x3 + extraDaneX,
			this.z2l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.z2l1ax1 + extraDaneX,
			this.z2l1ay1 + extraDaneY);
		bezierVertex(this.z2l1ax1 + extraDaneX,
			this.z2l1ay1 + extraDaneY,
			this.z2l1ax2 + extraDaneX,
			this.z2l1ay2 + extraDaneY,
			this.z2l1ax3 + extraDaneX,
			this.z2l1ay3 + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z2l1bx1 + extraDaneX,
			this.z2l1by1 + extraDaneY);
		bezierVertex(this.z2l1bx1 + extraDaneX,
			this.z2l1by1 + extraDaneY,
			this.z2l1bx2 + extraDaneX,
			this.z2l1by2 + extraDaneY,
			this.z2l1bx3 + extraDaneX,
			this.z2l1by3 + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z2l21x1 + extraDaneX,
			this.z2l21y1 + extraDaneY);
		bezierVertex(this.z2l21x1 + extraDaneX,
			this.z2l21y1 + extraDaneY,
			this.z2l21x2 + extraDaneX,
			this.z2l21y2 + extraDaneY,
			this.z2l21x3 + extraDaneX,
			this.z2l21y3 + extraDaneY); // linia 21
		endShape();

		beginShape();
		vertex(this.z2l22x1 + extraDaneX,
			this.z2l22y1 + extraDaneY);
		bezierVertex(this.z2l22x1 + extraDaneX,
			this.z2l22y1 + extraDaneY,
			this.z2l22x2 + extraDaneX,
			this.z2l22y2 + extraDaneY,
			this.z2l22x3 + extraDaneX,
			this.z2l22y3 + extraDaneY); // linia 22
		endShape();

		beginShape();
		vertex(this.z2l18x1 + extraDaneX,
			this.z2l18y1 + extraDaneY);
		bezierVertex(this.z2l18x1 + extraDaneX,
			this.z2l18y1 + extraDaneY,
			this.z2l18x2 + extraDaneX,
			this.z2l18y2 + extraDaneY,
			this.z2l18x3 + extraDaneX,
			this.z2l18y3 + extraDaneY); // linia 18
		endShape();

		beginShape();
		vertex(this.z2l20x1 + extraDaneX,
			this.z2l20y1 + extraDaneY);
		bezierVertex(this.z2l20x1 + extraDaneX,
			this.z2l20y1 + extraDaneY,
			this.z2l20x2 + extraDaneX,
			this.z2l20y2 + extraDaneY,
			this.z2l20x3 + extraDaneX,
			this.z2l20y3 + extraDaneY); // linia 20
		endShape();

		beginShape();
		vertex(this.z2l17x1 + extraDaneX,
			this.z2l17y1 + extraDaneY);
		bezierVertex(this.z2l17x1 + extraDaneX,
			this.z2l17y1 + extraDaneY,
			this.z2l17x2 + extraDaneX,
			this.z2l17y2 + extraDaneY,
			this.z2l17x3 + extraDaneX,
			this.z2l17y3 + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.z2l16x1 + extraDaneX,
			this.z2l16y1 + extraDaneY);
		bezierVertex(this.z2l16x1 + extraDaneX,
			this.z2l16y1 + extraDaneY,
			this.z2l16x2 + extraDaneX,
			this.z2l16y2 + extraDaneY,
			this.z2l16x3 + extraDaneX,
			this.z2l16y3 + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.z2l15x1 + extraDaneX,
			this.z2l15y1 + extraDaneY);
		bezierVertex(this.z2l15x1 + extraDaneX,
			this.z2l15y1 + extraDaneY,
			this.z2l15x2 + extraDaneX,
			this.z2l15y2 + extraDaneY,
			this.z2l15x3 + extraDaneX,
			this.z2l15y3 + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.z2l14x1 + extraDaneX,
			this.z2l14y1 + extraDaneY);
		bezierVertex(this.z2l14x1 + extraDaneX,
			this.z2l14y1 + extraDaneY,
			this.z2l14x2 + extraDaneX,
			this.z2l14y2 + extraDaneY,
			this.z2l14x3 + extraDaneX,
			this.z2l14y3 + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.z2l13x1 + extraDaneX,
			this.z2l13y1 + extraDaneY);
		bezierVertex(this.z2l13x1 + extraDaneX,
			this.z2l13y1 + extraDaneY,
			this.z2l13x2 + extraDaneX,
			this.z2l13y2 + extraDaneY,
			this.z2l13x3 + extraDaneX,
			this.z2l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.z2l4ax1 + extraDaneX,
			this.z2l4ay1 + extraDaneY);
		bezierVertex(this.z2l4ax1 + extraDaneX,
			this.z2l4ay1 + extraDaneY,
			this.z2l4ax2 + extraDaneX,
			this.z2l4ay2 + extraDaneY,
			this.z2l4ax3 + extraDaneX,
			this.z2l4ay3 + extraDaneY); // linia 4a
		endShape();

		beginShape();
		vertex(this.z2l4bx1 + extraDaneX,
			this.z2l4by1 + extraDaneY);
		bezierVertex(this.z2l4bx1 + extraDaneX,
			this.z2l4by1 + extraDaneY,
			this.z2l4bx2 + extraDaneX,
			this.z2l4by2 + extraDaneY,
			this.z2l4bx3 + extraDaneX,
			this.z2l4by3 + extraDaneY); // linia 4b
		endShape();

		beginShape();
		vertex(this.z2l3x1 + extraDaneX,
			this.z2l3y1 + extraDaneY);
		bezierVertex(this.z2l3x1 + extraDaneX,
			this.z2l3y1 + extraDaneY,
			this.z2l3x2 + extraDaneX,
			this.z2l3y2 + extraDaneY,
			this.z2l3x3 + extraDaneX,
			this.z2l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z2l6x1 + extraDaneX,
			this.z2l6y1 + extraDaneY);
		bezierVertex(this.z2l6x1 + extraDaneX,
			this.z2l6y1 + extraDaneY,
			this.z2l6x2 + extraDaneX,
			this.z2l6y2 + extraDaneY,
			this.z2l6x3 + extraDaneX,
			this.z2l6y3 + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z2l5x1 + extraDaneX,
			this.z2l5y1 + extraDaneY);
		bezierVertex(this.z2l5x1 + extraDaneX,
			this.z2l5y1 + extraDaneY,
			this.z2l5x2 + extraDaneX,
			this.z2l5y2 + extraDaneY,
			this.z2l5x3 + extraDaneX,
			this.z2l5y3 + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z2l8x1 + extraDaneX,
			this.z2l8y1 + extraDaneY);
		bezierVertex(this.z2l8x1 + extraDaneX,
			this.z2l8y1 + extraDaneY,
			this.z2l8x2 + extraDaneX,
			this.z2l8y2 + extraDaneY,
			this.z2l8x3 + extraDaneX,
			this.z2l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z2l7x1 + extraDaneX,
			this.z2l7y1 + extraDaneY);
		bezierVertex(this.z2l7x1 + extraDaneX,
			this.z2l7y1 + extraDaneY,
			this.z2l7x2 + extraDaneX,
			this.z2l7y2 + extraDaneY,
			this.z2l7x3 + extraDaneX,
			this.z2l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.z2l12x1 + extraDaneX,
			this.z2l12y1 + extraDaneY);
		bezierVertex(this.z2l12x1 + extraDaneX,
			this.z2l12y1 + extraDaneY,
			this.z2l12x2 + extraDaneX,
			this.z2l12y2 + extraDaneY,
			this.z2l12x3 + extraDaneX,
			this.z2l12y3 + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.z2l12bx1 + extraDaneX,
			this.z2l12by1 + extraDaneY);
		bezierVertex(this.z2l12bx1 + extraDaneX,
			this.z2l12by1 + extraDaneY,
			this.z2l12bx2 + extraDaneX,
			this.z2l12by2 + extraDaneY,
			this.z2l12bx3 + extraDaneX,
			this.z2l12by3 + extraDaneY); // linia 12b
		endShape();

		beginShape();
		vertex(this.z2l12cx1 + extraDaneX,
			this.z2l12cy1 + extraDaneY);
		bezierVertex(this.z2l12cx1 + extraDaneX,
			this.z2l12cy1 + extraDaneY,
			this.z2l12cx2 + extraDaneX,
			this.z2l12cy2 + extraDaneY,
			this.z2l12cx3 + extraDaneX,
			this.z2l12cy3 + extraDaneY); // linia 12c
		endShape();

		// czwarta gałąź - end			


		// piąta gałąź - licząc od lewej - gałąź zielona 3 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.z3l1ax1 + extraDaneX,
			this.z3l1ay1 + extraDaneY);
		bezierVertex(this.z3l1ax1 + extraDaneX,
			this.z3l1ay1 + extraDaneY,
			this.z3l1ax2 + extraDaneX,
			this.z3l1ay2 + extraDaneY,
			this.z3l1ax3 + extraDaneX,
			this.z3l1ay3 + extraDaneY); // linia 1a
		endShape();

		beginShape();
		vertex(this.z3l1bx1 + extraDaneX,
			this.z3l1by1 + extraDaneY);
		bezierVertex(this.z3l1bx1 + extraDaneX,
			this.z3l1by1 + extraDaneY,
			this.z3l1bx2 + extraDaneX,
			this.z3l1by2 + extraDaneY,
			this.z3l1bx3 + extraDaneX,
			this.z3l1by3 + extraDaneY); // linia 1b
		endShape();

		beginShape();
		vertex(this.z3l3x1 + extraDaneX,
			this.z3l3y1 + extraDaneY);
		bezierVertex(this.z3l3x1 + extraDaneX,
			this.z3l3y1 + extraDaneY,
			this.z3l3x2 + extraDaneX,
			this.z3l3y2 + extraDaneY,
			this.z3l3x3 + extraDaneX,
			this.z3l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.z3l4x1 + extraDaneX,
			this.z3l4y1 + extraDaneY);
		bezierVertex(this.z3l4x1 + extraDaneX,
			this.z3l4y1 + extraDaneY,
			this.z3l4x2 + extraDaneX,
			this.z3l4y2 + extraDaneY,
			this.z3l4x3 + extraDaneX,
			this.z3l4y3 + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.z3l5x1 + extraDaneX,
			this.z3l5y1 + extraDaneY);
		bezierVertex(this.z3l5x1 + extraDaneX,
			this.z3l5y1 + extraDaneY,
			this.z3l5x2 + extraDaneX,
			this.z3l5y2 + extraDaneY,
			this.z3l5x3 + extraDaneX,
			this.z3l5y3 + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.z3l6x1 + extraDaneX,
			this.z3l6y1 + extraDaneY);
		bezierVertex(this.z3l6x1 + extraDaneX,
			this.z3l6y1 + extraDaneY,
			this.z3l6x2 + extraDaneX,
			this.z3l6y2 + extraDaneY,
			this.z3l6x3 + extraDaneX,
			this.z3l6y3 + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.z3l8x1 + extraDaneX,
			this.z3l8y1 + extraDaneY);
		bezierVertex(this.z3l8x1 + extraDaneX,
			this.z3l8y1 + extraDaneY,
			this.z3l8x2 + extraDaneX,
			this.z3l8y2 + extraDaneY,
			this.z3l8x3 + extraDaneX,
			this.z3l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.z3l9x1 + extraDaneX,
			this.z3l9y1 + extraDaneY);
		bezierVertex(this.z3l9x1 + extraDaneX,
			this.z3l9y1 + extraDaneY,
			this.z3l9x2 + extraDaneX,
			this.z3l9y2 + extraDaneY,
			this.z3l9x3 + extraDaneX,
			this.z3l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.z3l7x1 + extraDaneX,
			this.z3l7y1 + extraDaneY);
		bezierVertex(this.z3l7x1 + extraDaneX,
			this.z3l7y1 + extraDaneY,
			this.z3l7x2 + extraDaneX,
			this.z3l7y2 + extraDaneY,
			this.z3l7x3 + extraDaneX,
			this.z3l7y3 + extraDaneY); // linia 7
		endShape();
		// piąta gałąź - end	


		// szusta gałąź - gałąź czerwona 2 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.r2l1x1 + extraDaneX,
			this.r2l1y1 + extraDaneY);
		bezierVertex(this.r2l1x1 + extraDaneX,
			this.r2l1y1 + extraDaneY,
			this.r2l1x2 + extraDaneX,
			this.r2l1y2 + extraDaneY,
			this.r2l1x3 + extraDaneX,
			this.r2l1y3 + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r2l2x1 + extraDaneX,
			this.r2l2y1 + extraDaneY);
		bezierVertex(this.r2l2x1 + extraDaneX,
			this.r2l2y1 + extraDaneY,
			this.r2l2x2 + extraDaneX,
			this.r2l2y2 + extraDaneY,
			this.r2l2x3 + extraDaneX,
			this.r2l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r2l3x1 + extraDaneX,
			this.r2l3y1 + extraDaneY);
		bezierVertex(this.r2l3x1 + extraDaneX,
			this.r2l3y1 + extraDaneY,
			this.r2l3x2 + extraDaneX,
			this.r2l3y2 + extraDaneY,
			this.r2l3x3 + extraDaneX,
			this.r2l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r2l7x1 + extraDaneX,
			this.r2l7y1 + extraDaneY);
		bezierVertex(this.r2l7x1 + extraDaneX,
			this.r2l7y1 + extraDaneY,
			this.r2l7x2 + extraDaneX,
			this.r2l7y2 + extraDaneY,
			this.r2l7x3 + extraDaneX,
			this.r2l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r2l8x1 + extraDaneX,
			this.r2l8y1 + extraDaneY);
		bezierVertex(this.r2l8x1 + extraDaneX,
			this.r2l8y1 + extraDaneY,
			this.r2l8x2 + extraDaneX,
			this.r2l8y2 + extraDaneY,
			this.r2l8x3 + extraDaneX,
			this.r2l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r2l9x1 + extraDaneX,
			this.r2l9y1 + extraDaneY);
		bezierVertex(this.r2l9x1 + extraDaneX,
			this.r2l9y1 + extraDaneY,
			this.r2l9x2 + extraDaneX,
			this.r2l9y2 + extraDaneY,
			this.r2l9x3 + extraDaneX,
			this.r2l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r2l10x1 + extraDaneX,
			this.r2l10y1 + extraDaneY);
		bezierVertex(this.r2l10x1 + extraDaneX,
			this.r2l10y1 + extraDaneY,
			this.r2l10x2 + extraDaneX,
			this.r2l10y2 + extraDaneY,
			this.r2l10x3 + extraDaneX,
			this.r2l10y3 + extraDaneY); // linia 10
		endShape();
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.r2l11x1 + extraDaneX,
			this.r2l11y1 + extraDaneY);
		bezierVertex(this.r2l11x1 + extraDaneX,
			this.r2l11y1 + extraDaneY,
			this.r2l11x2 + extraDaneX,
			this.r2l11y2 + extraDaneY,
			this.r2l11x3 + extraDaneX,
			this.r2l11y3 + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r2l1ax1 + extraDaneX,
			this.r2l1ay1 + extraDaneY);
		bezierVertex(this.r2l1ax1 + extraDaneX,
			this.r2l1ay1 + extraDaneY,
			this.r2l1ax2 + extraDaneX,
			this.r2l1ay2 + extraDaneY,
			this.r2l1ax3 + extraDaneX,
			this.r2l1ay3 + extraDaneY); // linia 1a
		endShape();
		// szusta gałąź - end

		// siódma gałąź - gałąź czerwona 4 - start
		//		stroke(0, 255, 0);	
		beginShape();
		vertex(this.r4l2x1 + extraDaneX,
			this.r4l2y1 + extraDaneY);
		bezierVertex(this.r4l2x1 + extraDaneX,
			this.r4l2y1 + extraDaneY,
			this.r4l2x2 + extraDaneX,
			this.r4l2y2 + extraDaneY,
			this.r4l2x3 + extraDaneX,
			this.r4l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r4l3x1 + extraDaneX,
			this.r4l3y1 + extraDaneY);
		bezierVertex(this.r4l3x1 + extraDaneX,
			this.r4l3y1 + extraDaneY,
			this.r4l3x2 + extraDaneX,
			this.r4l3y2 + extraDaneY,
			this.r4l3x3 + extraDaneX,
			this.r4l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r4l4x1 + extraDaneX,
			this.r4l4y1 + extraDaneY);
		bezierVertex(this.r4l4x1 + extraDaneX,
			this.r4l4y1 + extraDaneY,
			this.r4l4x2 + extraDaneX,
			this.r4l4y2 + extraDaneY,
			this.r4l4x3 + extraDaneX,
			this.r4l4y3 + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.r4l7x1 + extraDaneX,
			this.r4l7y1 + extraDaneY);
		bezierVertex(this.r4l7x1 + extraDaneX,
			this.r4l7y1 + extraDaneY,
			this.r4l7x2 + extraDaneX,
			this.r4l7y2 + extraDaneY,
			this.r4l7x3 + extraDaneX,
			this.r4l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r4l11x1 + extraDaneX,
			this.r4l11y1 + extraDaneY);
		bezierVertex(this.r4l11x1 + extraDaneX,
			this.r4l11y1 + extraDaneY,
			this.r4l11x2 + extraDaneX,
			this.r4l11y2 + extraDaneY,
			this.r4l11x3 + extraDaneX,
			this.r4l11y3 + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r4l9x1 + extraDaneX,
			this.r4l9y1 + extraDaneY);
		bezierVertex(this.r4l9x1 + extraDaneX,
			this.r4l9y1 + extraDaneY,
			this.r4l9x2 + extraDaneX,
			this.r4l9y2 + extraDaneY,
			this.r4l9x3 + extraDaneX,
			this.r4l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r4l10x1 + extraDaneX,
			this.r4l10y1 + extraDaneY);
		bezierVertex(this.r4l10x1 + extraDaneX,
			this.r4l10y1 + extraDaneY,
			this.r4l10x2 + extraDaneX,
			this.r4l10y2 + extraDaneY,
			this.r4l10x3 + extraDaneX,
			this.r4l10y3 + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r4l13x1 + extraDaneX,
			this.r4l13y1 + extraDaneY);
		bezierVertex(this.r4l13x1 + extraDaneX,
			this.r4l13y1 + extraDaneY,
			this.r4l13x2 + extraDaneX,
			this.r4l13y2 + extraDaneY,
			this.r4l13x3 + extraDaneX,
			this.r4l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r4l8x1 + extraDaneX,
			this.r4l8y1 + extraDaneY);
		bezierVertex(this.r4l8x1 + extraDaneX,
			this.r4l8y1 + extraDaneY,
			this.r4l8x2 + extraDaneX,
			this.r4l8y2 + extraDaneY,
			this.r4l8x3 + extraDaneX,
			this.r4l8y3 + extraDaneY); // linia 8
		endShape();
		// siódma gałąź -  end	

		// ósma gałąź - gałąź fioletowa 2 - start
		//		stroke(130, 0, 255);	
		beginShape();
		vertex(this.p2l1x1 + extraDaneX,
			this.p2l1y1 + extraDaneY);
		bezierVertex(this.p2l1x1 + extraDaneX,
			this.p2l1y1 + extraDaneY,
			this.p2l1x2 + extraDaneX,
			this.p2l1y2 + extraDaneY,
			this.p2l1x3 + extraDaneX,
			this.p2l1y3 + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.p2l2x1 + extraDaneX,
			this.p2l2y1 + extraDaneY);
		bezierVertex(this.p2l2x1 + extraDaneX,
			this.p2l2y1 + extraDaneY,
			this.p2l2x2 + extraDaneX,
			this.p2l2y2 + extraDaneY,
			this.p2l2x3 + extraDaneX,
			this.p2l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.p2l6x1 + extraDaneX,
			this.p2l6y1 + extraDaneY);
		bezierVertex(this.p2l6x1 + extraDaneX,
			this.p2l6y1 + extraDaneY,
			this.p2l6x2 + extraDaneX,
			this.p2l6y2 + extraDaneY,
			this.p2l6x3 + extraDaneX,
			this.p2l6y3 + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.p2l3ax1 + extraDaneX,
			this.p2l3ay1 + extraDaneY);
		bezierVertex(this.p2l3ax1 + extraDaneX,
			this.p2l3ay1 + extraDaneY,
			this.p2l3ax2 + extraDaneX,
			this.p2l3ay2 + extraDaneY,
			this.p2l3ax3 + extraDaneX,
			this.p2l3ay3 + extraDaneY); // linia 3a
		endShape();

		beginShape();
		vertex(this.p2l3bx1 + extraDaneX,
			this.p2l3by1 + extraDaneY);
		bezierVertex(this.p2l3bx1 + extraDaneX,
			this.p2l3by1 + extraDaneY,
			this.p2l3bx2 + extraDaneX,
			this.p2l3by2 + extraDaneY,
			this.p2l3bx3 + extraDaneX,
			this.p2l3by3 + extraDaneY); // linia 3b
		endShape();

		beginShape();
		vertex(this.p2l4x1 + extraDaneX,
			this.p2l4y1 + extraDaneY);
		bezierVertex(this.p2l4x1 + extraDaneX,
			this.p2l4y1 + extraDaneY,
			this.p2l4x2 + extraDaneX,
			this.p2l4y2 + extraDaneY,
			this.p2l4x3 + extraDaneX,
			this.p2l4y3 + extraDaneY); // linia 4
		endShape();

		beginShape();
		vertex(this.p2l5x1 + extraDaneX,
			this.p2l5y1 + extraDaneY);
		bezierVertex(this.p2l5x1 + extraDaneX,
			this.p2l5y1 + extraDaneY,
			this.p2l5x2 + extraDaneX,
			this.p2l5y2 + extraDaneY,
			this.p2l5x3 + extraDaneX,
			this.p2l5y3 + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.p2l7x1 + extraDaneX,
			this.p2l7y1 + extraDaneY);
		bezierVertex(this.p2l7x1 + extraDaneX,
			this.p2l7y1 + extraDaneY,
			this.p2l7x2 + extraDaneX,
			this.p2l7y2 + extraDaneY,
			this.p2l7x3 + extraDaneX,
			this.p2l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.p2l8x1 + extraDaneX,
			this.p2l8y1 + extraDaneY);
		bezierVertex(this.p2l8x1 + extraDaneX,
			this.p2l8y1 + extraDaneY,
			this.p2l8x2 + extraDaneX,
			this.p2l8y2 + extraDaneY,
			this.p2l8x3 + extraDaneX,
			this.p2l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.p2l14x1 + extraDaneX,
			this.p2l14y1 + extraDaneY);
		bezierVertex(this.p2l14x1 + extraDaneX,
			this.p2l14y1 + extraDaneY,
			this.p2l14x2 + extraDaneX,
			this.p2l14y2 + extraDaneY,
			this.p2l14x3 + extraDaneX,
			this.p2l14y3 + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.p2l15x1 + extraDaneX,
			this.p2l15y1 + extraDaneY);
		bezierVertex(this.p2l15x1 + extraDaneX,
			this.p2l15y1 + extraDaneY,
			this.p2l15x2 + extraDaneX,
			this.p2l15y2 + extraDaneY,
			this.p2l15x3 + extraDaneX,
			this.p2l15y3 + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.p2l17x1 + extraDaneX,
			this.p2l17y1 + extraDaneY);
		bezierVertex(this.p2l17x1 + extraDaneX,
			this.p2l17y1 + extraDaneY,
			this.p2l17x2 + extraDaneX,
			this.p2l17y2 + extraDaneY,
			this.p2l17x3 + extraDaneX,
			this.p2l17y3 + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.p2l16ax1 + extraDaneX,
			this.p2l16ay1 + extraDaneY);
		bezierVertex(this.p2l16ax1 + extraDaneX,
			this.p2l16ay1 + extraDaneY,
			this.p2l16ax2 + extraDaneX,
			this.p2l16ay2 + extraDaneY,
			this.p2l16ax3 + extraDaneX,
			this.p2l16ay3 + extraDaneY); // linia 16a
		endShape();

		beginShape();
		vertex(this.p2l16bx1 + extraDaneX,
			this.p2l16by1 + extraDaneY);
		bezierVertex(this.p2l16bx1 + extraDaneX,
			this.p2l16by1 + extraDaneY,
			this.p2l16bx2 + extraDaneX,
			this.p2l16by2 + extraDaneY,
			this.p2l16bx3 + extraDaneX,
			this.p2l16by3 + extraDaneY); // linia 16b
		endShape();

		beginShape();
		vertex(this.p2l12x1 + extraDaneX,
			this.p2l12y1 + extraDaneY);
		bezierVertex(this.p2l12x1 + extraDaneX,
			this.p2l12y1 + extraDaneY,
			this.p2l12x2 + extraDaneX,
			this.p2l12y2 + extraDaneY,
			this.p2l12x3 + extraDaneX,
			this.p2l12y3 + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.p2l13x1 + extraDaneX,
			this.p2l13y1 + extraDaneY);
		bezierVertex(this.p2l13x1 + extraDaneX,
			this.p2l13y1 + extraDaneY,
			this.p2l13x2 + extraDaneX,
			this.p2l13y2 + extraDaneY,
			this.p2l13x3 + extraDaneX,
			this.p2l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.p2l10x1 + extraDaneX,
			this.p2l10y1 + extraDaneY);
		bezierVertex(this.p2l10x1 + extraDaneX,
			this.p2l10y1 + extraDaneY,
			this.p2l10x2 + extraDaneX,
			this.p2l10y2 + extraDaneY,
			this.p2l10x3 + extraDaneX,
			this.p2l10y3 + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.p2l11x1 + extraDaneX,
			this.p2l11y1 + extraDaneY);
		bezierVertex(this.p2l11x1 + extraDaneX,
			this.p2l11y1 + extraDaneY,
			this.p2l11x2 + extraDaneX,
			this.p2l11y2 + extraDaneY,
			this.p2l11x3 + extraDaneX,
			this.p2l11y3 + extraDaneY); // linia 11
		endShape();
		// ósma gałąź - end	


		// dziewiąta gałąź - gałąź czerwona 3 - start
		//		stroke(0, 255, 0);
		beginShape();
		vertex(this.r3l1x1 + extraDaneX,
			this.r3l1y1 + extraDaneY);
		bezierVertex(this.r3l1x1 + extraDaneX,
			this.r3l1y1 + extraDaneY,
			this.r3l1x2 + extraDaneX,
			this.r3l1y2 + extraDaneY,
			this.r3l1x3 + extraDaneX,
			this.r3l1y3 + extraDaneY); // linia 1
		endShape();

		beginShape();
		vertex(this.r3l2x1 + extraDaneX,
			this.r3l2y1 + extraDaneY);
		bezierVertex(this.r3l2x1 + extraDaneX,
			this.r3l2y1 + extraDaneY,
			this.r3l2x2 + extraDaneX,
			this.r3l2y2 + extraDaneY,
			this.r3l2x3 + extraDaneX,
			this.r3l2y3 + extraDaneY); // linia 2
		endShape();

		beginShape();
		vertex(this.r3l17x1 + extraDaneX,
			this.r3l17y1 + extraDaneY);
		bezierVertex(this.r3l17x1 + extraDaneX,
			this.r3l17y1 + extraDaneY,
			this.r3l17x2 + extraDaneX,
			this.r3l17y2 + extraDaneY,
			this.r3l17x3 + extraDaneX,
			this.r3l17y3 + extraDaneY); // linia 17
		endShape();

		beginShape();
		vertex(this.r3l16x1 + extraDaneX,
			this.r3l16y1 + extraDaneY);
		bezierVertex(this.r3l16x1 + extraDaneX,
			this.r3l16y1 + extraDaneY,
			this.r3l16x2 + extraDaneX,
			this.r3l16y2 + extraDaneY,
			this.r3l16x3 + extraDaneX,
			this.r3l16y3 + extraDaneY); // linia 16
		endShape();

		beginShape();
		vertex(this.r3l3x1 + extraDaneX,
			this.r3l3y1 + extraDaneY);
		bezierVertex(this.r3l3x1 + extraDaneX,
			this.r3l3y1 + extraDaneY,
			this.r3l3x2 + extraDaneX,
			this.r3l3y2 + extraDaneY,
			this.r3l3x3 + extraDaneX,
			this.r3l3y3 + extraDaneY); // linia 3
		endShape();

		beginShape();
		vertex(this.r3l7x1 + extraDaneX,
			this.r3l7y1 + extraDaneY);
		bezierVertex(this.r3l7x1 + extraDaneX,
			this.r3l7y1 + extraDaneY,
			this.r3l7x2 + extraDaneX,
			this.r3l7y2 + extraDaneY,
			this.r3l7x3 + extraDaneX,
			this.r3l7y3 + extraDaneY); // linia 7
		endShape();

		beginShape();
		vertex(this.r3l8x1 + extraDaneX,
			this.r3l8y1 + extraDaneY);
		bezierVertex(this.r3l8x1 + extraDaneX,
			this.r3l8y1 + extraDaneY,
			this.r3l8x2 + extraDaneX,
			this.r3l8y2 + extraDaneY,
			this.r3l8x3 + extraDaneX,
			this.r3l8y3 + extraDaneY); // linia 8
		endShape();

		beginShape();
		vertex(this.r3l9x1 + extraDaneX,
			this.r3l9y1 + extraDaneY);
		bezierVertex(this.r3l9x1 + extraDaneX,
			this.r3l9y1 + extraDaneY,
			this.r3l9x2 + extraDaneX,
			this.r3l9y2 + extraDaneY,
			this.r3l9x3 + extraDaneX,
			this.r3l9y3 + extraDaneY); // linia 9
		endShape();

		beginShape();
		vertex(this.r3l10x1 + extraDaneX,
			this.r3l10y1 + extraDaneY);
		bezierVertex(this.r3l10x1 + extraDaneX,
			this.r3l10y1 + extraDaneY,
			this.r3l10x2 + extraDaneX,
			this.r3l10y2 + extraDaneY,
			this.r3l10x3 + extraDaneX,
			this.r3l10y3 + extraDaneY); // linia 10
		endShape();

		beginShape();
		vertex(this.r3l11x1 + extraDaneX,
			this.r3l11y1 + extraDaneY);
		bezierVertex(this.r3l11x1 + extraDaneX,
			this.r3l11y1 + extraDaneY,
			this.r3l11x2 + extraDaneX,
			this.r3l11y2 + extraDaneY,
			this.r3l11x3 + extraDaneX,
			this.r3l11y3 + extraDaneY); // linia 11
		endShape();

		beginShape();
		vertex(this.r3l12x1 + extraDaneX,
			this.r3l12y1 + extraDaneY);
		bezierVertex(this.r3l12x1 + extraDaneX,
			this.r3l12y1 + extraDaneY,
			this.r3l12x2 + extraDaneX,
			this.r3l12y2 + extraDaneY,
			this.r3l12x3 + extraDaneX,
			this.r3l12y3 + extraDaneY); // linia 12
		endShape();

		beginShape();
		vertex(this.r3l15x1 + extraDaneX,
			this.r3l15y1 + extraDaneY);
		bezierVertex(this.r3l15x1 + extraDaneX,
			this.r3l15y1 + extraDaneY,
			this.r3l15x2 + extraDaneX,
			this.r3l15y2 + extraDaneY,
			this.r3l15x3 + extraDaneX,
			this.r3l15y3 + extraDaneY); // linia 15
		endShape();

		beginShape();
		vertex(this.r3l13x1 + extraDaneX,
			this.r3l13y1 + extraDaneY);
		bezierVertex(this.r3l13x1 + extraDaneX,
			this.r3l13y1 + extraDaneY,
			this.r3l13x2 + extraDaneX,
			this.r3l13y2 + extraDaneY,
			this.r3l13x3 + extraDaneX,
			this.r3l13y3 + extraDaneY); // linia 13
		endShape();

		beginShape();
		vertex(this.r3l14x1 + extraDaneX,
			this.r3l14y1 + extraDaneY);
		bezierVertex(this.r3l14x1 + extraDaneX,
			this.r3l14y1 + extraDaneY,
			this.r3l14x2 + extraDaneX,
			this.r3l14y2 + extraDaneY,
			this.r3l14x3 + extraDaneX,
			this.r3l14y3 + extraDaneY); // linia 14
		endShape();

		beginShape();
		vertex(this.r3l6x1 + extraDaneX,
			this.r3l6y1 + extraDaneY);
		bezierVertex(this.r3l6x1 + extraDaneX,
			this.r3l6y1 + extraDaneY,
			this.r3l6x2 + extraDaneX,
			this.r3l6y2 + extraDaneY,
			this.r3l6x3 + extraDaneX,
			this.r3l6y3 + extraDaneY); // linia 6
		endShape();

		beginShape();
		vertex(this.r3l5x1 + extraDaneX,
			this.r3l5y1 + extraDaneY);
		bezierVertex(this.r3l5x1 + extraDaneX,
			this.r3l5y1 + extraDaneY,
			this.r3l5x2 + extraDaneX,
			this.r3l5y2 + extraDaneY,
			this.r3l5x3 + extraDaneX,
			this.r3l5y3 + extraDaneY); // linia 5
		endShape();

		beginShape();
		vertex(this.r3l4x1 + extraDaneX,
			this.r3l4y1 + extraDaneY);
		bezierVertex(this.r3l4x1 + extraDaneX,
			this.r3l4y1 + extraDaneY,
			this.r3l4x2 + extraDaneX,
			this.r3l4y2 + extraDaneY,
			this.r3l4x3 + extraDaneX,
			this.r3l4y3 + extraDaneY); // linia 4
		// linia 4
		endShape();
		// dziewiąta gałąź - end	

		// gałąź dziesiąta - na dole przy pniu drzewa - start
		//		stroke(200, 115, 0);
		beginShape();
		vertex(this.d1l12x1 + extraDaneX,
			this.d1l12y1 + extraDaneY);
		bezierVertex(this.d1l12x1 + extraDaneX,
			this.d1l12y1 + extraDaneY,
			this.d1l12x2 + extraDaneX,
			this.d1l12y2 + extraDaneY,
			this.d1l12x3 + extraDaneX,
			this.d1l12y3 + extraDaneY); //linia 12
		endShape();

		beginShape();
		vertex(this.d1l1x1 + extraDaneX,
			this.d1l1y1 + extraDaneY);
		bezierVertex(this.d1l1x1 + extraDaneX,
			this.d1l1y1 + extraDaneY,
			this.d1l1x2 + extraDaneX,
			this.d1l1y2 + extraDaneY,
			this.d1l1x3 + extraDaneX,
			this.d1l1y3 + extraDaneY); //linia 1
		endShape();

		beginShape();
		vertex(this.d1l2x1 + extraDaneX,
			this.d1l2y1 + extraDaneY);
		bezierVertex(this.d1l2x1 + extraDaneX,
			this.d1l2y1 + extraDaneY,
			this.d1l2x2 + extraDaneX,
			this.d1l2y2 + extraDaneY,
			this.d1l2x3 + extraDaneX,
			this.d1l2y3 + extraDaneY); //linia 2
		endShape();

		beginShape();
		vertex(this.d1l10x1 + extraDaneX,
			this.d1l10y1 + extraDaneY);
		bezierVertex(this.d1l10x1 + extraDaneX,
			this.d1l10y1 + extraDaneY,
			this.d1l10x2 + extraDaneX,
			this.d1l10y2 + extraDaneY,
			this.d1l10x3 + extraDaneX,
			this.d1l10y3 + extraDaneY); //linia 10
		endShape();

		beginShape();
		vertex(this.d1l11x1 + extraDaneX,
			this.d1l11y1 + extraDaneY);
		bezierVertex(this.d1l11x1 + extraDaneX,
			this.d1l11y1 + extraDaneY,
			this.d1l11x2 + extraDaneX,
			this.d1l11y2 + extraDaneY,
			this.d1l11x3 + extraDaneX,
			this.d1l11y3 + extraDaneY); //linia 11
		endShape();

		beginShape();
		vertex(this.d1l8x1 + extraDaneX,
			this.d1l8y1 + extraDaneY);
		bezierVertex(this.d1l8x1 + extraDaneX,
			this.d1l8y1 + extraDaneY,
			this.d1l8x2 + extraDaneX,
			this.d1l8y2 + extraDaneY,
			this.d1l8x3 + extraDaneX,
			this.d1l8y3 + extraDaneY); //linia 8
		endShape();

		beginShape();
		vertex(this.d1l7x1 + extraDaneX,
			this.d1l7y1 + extraDaneY);
		bezierVertex(this.d1l7x1 + extraDaneX,
			this.d1l7y1 + extraDaneY,
			this.d1l7x2 + extraDaneX,
			this.d1l7y2 + extraDaneY,
			this.d1l7x3 + extraDaneX,
			this.d1l7y3 + extraDaneY); //linia 7
		endShape();

		beginShape();
		vertex(this.d1l6x1 + extraDaneX,
			this.d1l6y1 + extraDaneY);
		bezierVertex(this.d1l6x1 + extraDaneX,
			this.d1l6y1 + extraDaneY,
			this.d1l6x2 + extraDaneX,
			this.d1l6y2 + extraDaneY,
			this.d1l6x3 + extraDaneX,
			this.d1l6y3 + extraDaneY); //linia 6
		endShape();

		beginShape();
		vertex(this.d1l3x1 + extraDaneX,
			this.d1l3y1 + extraDaneY);
		bezierVertex(this.d1l3x1 + extraDaneX,
			this.d1l3y1 + extraDaneY,
			this.d1l3x2 + extraDaneX,
			this.d1l3y2 + extraDaneY,
			this.d1l3x3 + extraDaneX,
			this.d1l3y3 + extraDaneY); //linia 3
		endShape();

		beginShape();
		vertex(this.d1l4x1 + extraDaneX,
			this.d1l4y1 + extraDaneY);
		bezierVertex(this.d1l4x1 + extraDaneX,
			this.d1l4y1 + extraDaneY,
			this.d1l4x2 + extraDaneX,
			this.d1l4y2 + extraDaneY,
			this.d1l4x3 + extraDaneX,
			this.d1l4y3 + extraDaneY); //linia 4
		endShape();

		beginShape();
		vertex(this.d1l5x1 + extraDaneX,
			this.d1l5y1 + extraDaneY);
		bezierVertex(this.d1l5x1 + extraDaneX,
			this.d1l5y1 + extraDaneY,
			this.d1l5x2 + extraDaneX,
			this.d1l5y2 + extraDaneY,
			this.d1l5x3 + extraDaneX,
			this.d1l5y3 + extraDaneY); //linia 5
		endShape();
		// gałąź dziesiąta - end 		

		// extra gałąź - strat	
		//		stroke(255, 255, 100);	
		beginShape();
		vertex(this.exl9x1 + extraDaneX,
			this.exl9y1 + extraDaneY);
		bezierVertex(this.exl9x1 + extraDaneX,
			this.exl9y1 + extraDaneY,
			this.exl9x2 + extraDaneX,
			this.exl9y2 + extraDaneY,
			this.exl9x3 + extraDaneX,
			this.exl9y3 + extraDaneY); // linia 9ex
		endShape();

		beginShape();
		vertex(this.exl10x1 + extraDaneX,
			this.exl10y1 + extraDaneY);
		bezierVertex(this.exl10x1 + extraDaneX,
			this.exl10y1 + extraDaneY,
			this.exl10x2 + extraDaneX,
			this.exl10y2 + extraDaneY,
			this.exl10x3 + extraDaneX,
			this.exl10y3 + extraDaneY); // linia 10ex
		endShape();

		beginShape();
		vertex(this.exl11x1 + extraDaneX,
			this.exl11y1 + extraDaneY);
		bezierVertex(this.exl11x1 + extraDaneX,
			this.exl11y1 + extraDaneY,
			this.exl11x2 + extraDaneX,
			this.exl11y2 + extraDaneY,
			this.exl11x3 + extraDaneX,
			this.exl11y3 + extraDaneY); // linia 11ex
		endShape();

		beginShape();
		vertex(this.exl4x1 + extraDaneX,
			this.exl4y1 + extraDaneY);
		bezierVertex(this.exl4x1 + extraDaneX,
			this.exl4y1 + extraDaneY,
			this.exl4x2 + extraDaneX,
			this.exl4y2 + extraDaneY,
			this.exl4x3 + extraDaneX,
			this.exl4y3 + extraDaneY); // linia 4ex
		endShape();


		beginShape();
		vertex(this.exl6x1 + extraDaneX,
			this.exl6y1 + extraDaneY);
		bezierVertex(this.exl6x1 + extraDaneX,
			this.exl6y1 + extraDaneY,
			this.exl6x2 + extraDaneX,
			this.exl6y2 + extraDaneY,
			this.exl6x3 + extraDaneX,
			this.exl6y3 + extraDaneY); // linia 6ex
		endShape();

		beginShape();
		vertex(this.exl5x1 + extraDaneX,
			this.exl5y1 + extraDaneY);
		bezierVertex(this.exl5x1 + extraDaneX,
			this.exl5y1 + extraDaneY,
			this.exl5x2 + extraDaneX,
			this.exl5y2 + extraDaneY,
			this.exl5x3 + extraDaneX,
			this.exl5y3 + extraDaneY); // linia 5ex
		endShape();

		beginShape();
		vertex(this.exl12x1 + extraDaneX,
			this.exl12y1 + extraDaneY);
		bezierVertex(this.exl12x1 + extraDaneX,
			this.exl12y1 + extraDaneY,
			this.exl12x2 + extraDaneX,
			this.exl12y2 + extraDaneY,
			this.exl12x3 + extraDaneX,
			this.exl12y3 + extraDaneY); // linia 12ex
		endShape();

		beginShape();
		vertex(this.exl11ax1 + extraDaneX,
			this.exl11ay1 + extraDaneY);
		bezierVertex(this.exl11ax1 + extraDaneX,
			this.exl11ay1 + extraDaneY,
			this.exl11ax2 + extraDaneX,
			this.exl11ay2 + extraDaneY,
			this.exl11ax3 + extraDaneX,
			this.exl11ay3 + extraDaneY); // linia 11aex
		endShape();

		beginShape();
		vertex(this.exl1x1 + extraDaneX,
			this.exl1y1 + extraDaneY);
		bezierVertex(this.exl1x1 + extraDaneX,
			this.exl1y1 + extraDaneY,
			this.exl1x2 + extraDaneX,
			this.exl1y2 + extraDaneY,
			this.exl1x3 + extraDaneX,
			this.exl1y3 + extraDaneY); // linia 1ex
		endShape();

		beginShape();
		vertex(this.exl2x1 + extraDaneX,
			this.exl2y1 + extraDaneY);
		bezierVertex(this.exl2x1 + extraDaneX,
			this.exl2y1 + extraDaneY,
			this.exl2x2 + extraDaneX,
			this.exl2y2 + extraDaneY,
			this.exl2x3 + extraDaneX,
			this.exl2y3 + extraDaneY); // linia 2ex
		endShape();

		beginShape();
		vertex(this.exl3x1 + extraDaneX,
			this.exl3y1 + extraDaneY);
		bezierVertex(this.exl3x1 + extraDaneX,
			this.exl3y1 + extraDaneY,
			this.exl3x2 + extraDaneX,
			this.exl3y2 + extraDaneY,
			this.exl3x3 + extraDaneX,
			this.exl3y3 + extraDaneY); // linia 3ex
		endShape();

		beginShape();
		vertex(this.exl8x1 + extraDaneX,
			this.exl8y1 + extraDaneY);
		bezierVertex(this.exl8x1 + extraDaneX,
			this.exl8y1 + extraDaneY,
			this.exl8x2 + extraDaneX,
			this.exl8y2 + extraDaneY,
			this.exl8x3 + extraDaneX,
			this.exl8y3 + extraDaneY); //linia 8ex
		endShape();

		beginShape();
		vertex(this.exl7x1 + extraDaneX,
			this.exl7y1 + extraDaneY);
		bezierVertex(this.exl7x1 + extraDaneX,
			this.exl7y1 + extraDaneY,
			this.exl7x2 + extraDaneX,
			this.exl7y2 + extraDaneY,
			this.exl7x3 + extraDaneX,
			this.exl7y3 + extraDaneY); //linia 7ex
		endShape();

		beginShape();
		vertex(this.exl13x1 + extraDaneX,
			this.exl13y1 + extraDaneY);
		bezierVertex(this.exl13x1 + extraDaneX,
			this.exl13y1 + extraDaneY,
			this.exl13x2 + extraDaneX,
			this.exl13y2 + extraDaneY,
			this.exl13x3 + extraDaneX,
			this.exl13y3 + extraDaneY); //linia 13ex
		endShape();
		// extra gałąź - end		
	}
}
// DRZEWO No3 KLASA - FINISH

// LEAF KLASA - START
class newLeaf {

	constructor(
		sizeLeafTreeNo3Single, sizeLeafTreeNo3Line0,
		randomXLine0, randomYLine0,
		randomXTreeNo3Single, randomYTreeNo3Single
	) {
		this.randomXLine0 = randomXLine0;
		this.randomYLine0 = randomYLine0;

		//wielkość drzewa
		let sizeTree = this.sizeTreeNo3Line0;

		// numberDivisor - liczba przez, którą dzielimy rzeczywisty kształ drzewa ( w oryginale liść jest duży);
		let numberDivisor = random(14, 20);
		let zX = -110 / numberDivisor;
		let zY = -170 / numberDivisor;

		let leafSize = numberDivisor;

		// kształt liścia - start
		this.x1l1 = 110 / leafSize + zX;
		this.y1l1 = 110 / leafSize + zY;
		this.x2l1 = 111 / leafSize + zX;
		this.y2l1 = 118 / leafSize + zY;
		this.x3l1 = 100 / leafSize + zX;
		this.y3l1 = 120 / leafSize + zY;

		this.x2l2 = 95 / leafSize + zX;
		this.y2l2 = 148 / leafSize + zY;
		this.x3l2 = 82 / leafSize + zX;
		this.y3l2 = 130 / leafSize + zY;

		this.x2l3 = 87 / leafSize + zX;
		this.y2l3 = 141 / leafSize + zY;
		this.x3l3 = 85 / leafSize + zX;
		this.y3l3 = 155 / leafSize + zY;

		this.x2l4 = 72 / leafSize + zX;
		this.y2l4 = 154 / leafSize + zY;
		this.x3l4 = 68 / leafSize + zX;
		this.y3l4 = 145 / leafSize + zY;

		this.x2l5 = 68 / leafSize + zX;
		this.y2l5 = 155 / leafSize + zY;
		this.x3l5 = 40 / leafSize + zX;
		this.y3l5 = 140 / leafSize + zY;

		this.x2l6 = 62 / leafSize + zX;
		this.y2l6 = 150 / leafSize + zY;
		this.x3l6 = 50 / leafSize + zX;
		this.y3l6 = 160 / leafSize + zY;

		this.x2l7 = 63 / leafSize + zX;
		this.y2l7 = 174 / leafSize + zY;
		this.x3l7 = 45 / leafSize + zX;
		this.y3l7 = 175 / leafSize + zY;

		this.x2l8 = 62 / leafSize + zX;
		this.y2l8 = 179 / leafSize + zY;
		this.x3l8 = 65 / leafSize + zX;
		this.y3l8 = 190 / leafSize + zY;

		this.x2l9 = 67 / leafSize + zX;
		this.y2l9 = 196 / leafSize + zY;
		this.x3l9 = 45 / leafSize + zX;
		this.y3l9 = 207 / leafSize + zY;

		this.x2l10 = 78 / leafSize + zX; // l10 + l11
		this.y2l10 = 209 / leafSize + zY;
		this.x3l10 = 65 / leafSize + zX;
		this.y3l10 = 220 / leafSize + zY;

		this.x2l12 = 78 / leafSize + zX;
		this.y2l12 = 209 / leafSize + zY;
		this.x3l12 = 80 / leafSize + zX;
		this.y3l12 = 215 / leafSize + zY;

		this.x2l13 = 85 / leafSize + zX;
		this.y2l13 = 219 / leafSize + zY;
		this.x3l13 = 80 / leafSize + zX;
		this.y3l13 = 230 / leafSize + zY;

		this.x2l14 = 85 / leafSize + zX;
		this.y2l14 = 215 / leafSize + zY;
		this.x3l14 = 110 / leafSize + zX;
		this.y3l14 = 210 / leafSize + zY;

		// prawa strona - rysujemy od dołu do góry - nie zmieniamy kierunku rysowania - połowa kształtu liścia -> na dole
		this.x2l15 = 127 / leafSize + zX;
		this.y2l15 = 212 / leafSize + zY;
		this.x3l15 = 135 / leafSize + zX;
		this.y3l15 = 235 / leafSize + zY;

		this.x2l16 = 141 / leafSize + zX;
		this.y2l16 = 208 / leafSize + zY;
		this.x3l16 = 155 / leafSize + zX;
		this.y3l16 = 220 / leafSize + zY;

		this.x2l17 = 150 / leafSize + zX;
		this.y2l17 = 200 / leafSize + zY;
		this.x3l17 = 170 / leafSize + zX;
		this.y3l17 = 210 / leafSize + zY;

		this.x2l18 = 153 / leafSize + zX;
		this.y2l18 = 201 / leafSize + zY;
		this.x3l18 = 150 / leafSize + zX;
		this.y3l18 = 190 / leafSize + zY;

		this.x2l19 = 158 / leafSize + zX;
		this.y2l19 = 176 / leafSize + zY;
		this.x3l19 = 175 / leafSize + zX;
		this.y3l19 = 175 / leafSize + zY;

		this.x2l20 = 147 / leafSize + zX;
		this.y2l20 = 174 / leafSize + zY;
		this.x3l20 = 165 / leafSize + zX;
		this.y3l20 = 155 / leafSize + zY;

		this.x2l21 = 158 / leafSize + zX;
		this.y2l21 = 151 / leafSize + zY;
		this.x3l21 = 165 / leafSize + zX;
		this.y3l21 = 135 / leafSize + zY;

		this.x2l22 = 153 / leafSize + zX;
		this.y2l22 = 153 / leafSize + zY;
		this.x3l22 = 145 / leafSize + zX;
		this.y3l22 = 145 / leafSize + zY;

		this.x2l23 = 140 / leafSize + zX;
		this.y2l23 = 157 / leafSize + zY;
		this.x3l23 = 130 / leafSize + zX;
		this.y3l23 = 160 / leafSize + zY;

		this.x2l24 = 124 / leafSize + zX;
		this.y2l24 = 154 / leafSize + zY;
		this.x3l24 = 130 / leafSize + zX;
		this.y3l24 = 140 / leafSize + zY;

		this.x2l25 = 121 / leafSize + zX;
		this.y2l25 = 148 / leafSize + zY;
		this.x3l25 = 120 / leafSize + zX;
		this.y3l25 = 125 / leafSize + zY;

		this.x2l26 = 112 / leafSize + zX;
		this.y2l26 = 134 / leafSize + zY;
		this.x3l26 = 110 / leafSize + zX;
		this.y3l26 = 110 / leafSize + zY;
		// kształt liścia - end

		// vein - start
		// z1 żyła główna
		this.x1z1 = 110 / leafSize + zX;
		this.y1z1 = 210 / leafSize + zY;
		this.x2z1 = 106 / leafSize + zX;
		this.y2z1 = 165 / leafSize + zY;
		this.x3z1 = 108 / leafSize + zX;
		this.y3z1 = 120 / leafSize + zY;

		// z1_l1 - lewa1 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l1 = 107.5 / leafSize + zX;
		this.y1z1_l1 = 130 / leafSize + zY;
		this.x2z1_l1 = 104 / leafSize + zX;
		this.y2z1_l1 = 129 / leafSize + zY;
		this.x3z1_l1 = 102 / leafSize + zX;
		this.y3z1_l1 = 122 / leafSize + zY;

		// z1_l2 - lewa2 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l2 = 107.5 / leafSize + zX;
		this.y1z1_l2 = 150 / leafSize + zY;
		this.x2z1_l2 = 96 / leafSize + zX;
		this.y2z1_l2 = 151 / leafSize + zY;
		this.x3z1_l2 = 87 / leafSize + zX;
		this.y3z1_l2 = 138 / leafSize + zY;

		// z1_l3 - lewa3 - mała żyłka - żyły głównej - liczone od góry	
		this.x1z1_l3 = 107.5 / leafSize + zX;
		this.y1z1_l3 = 170 / leafSize + zY;
		this.x2z1_l3 = 102 / leafSize + zX;
		this.y2z1_l3 = 167 / leafSize + zY;
		this.x3z1_l3 = 100 / leafSize + zX;
		this.y3z1_l3 = 160 / leafSize + zY;
		// z1_l4 - lewa4 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l4 = 109 / leafSize + zX;
		this.y1z1_l4 = 196 / leafSize + zY;
		this.x2z1_l4 = 106 / leafSize + zX;
		this.y2z1_l4 = 196 / leafSize + zY;
		this.x3z1_l4 = 103 / leafSize + zX;
		this.y3z1_l4 = 189 / leafSize + zY;

		// z1_p1 - prawa1 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p1 = 107.5 / leafSize + zX;
		this.y1z1_p1 = 140 / leafSize + zY;
		this.x2z1_p1 = 116 / leafSize + zX;
		this.y2z1_p1 = 136 / leafSize + zY;
		this.x3z1_p1 = 118 / leafSize + zX;
		this.y3z1_p1 = 130 / leafSize + zY;

		// z1_p2 - prawa2 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p2 = 107.5 / leafSize + zX;
		this.y1z1_p2 = 160 / leafSize + zY;
		this.x2z1_p2 = 115 / leafSize + zX;
		this.y2z1_p2 = 159 / leafSize + zY;
		this.x3z1_p2 = 125 / leafSize + zX;
		this.y3z1_p2 = 145 / leafSize + zY;

		// z1_p3 - prawa3 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p3 = 108.5 / leafSize + zX;
		this.y1z1_p3 = 185 / leafSize + zY;
		this.x2z1_p3 = 114 / leafSize + zX;
		this.y2z1_p3 = 187 / leafSize + zY;
		this.x3z1_p3 = 117 / leafSize + zX;
		this.y3z1_p3 = 177 / leafSize + zY;

		// z2 - żyła lewa górna
		this.x1z2 = 110 / leafSize + zX;
		this.y1z2 = 210 / leafSize + zY;
		this.x2z2 = 94 / leafSize + zX;
		this.y2z2 = 173 / leafSize + zY;
		this.x3z2 = 55 / leafSize + zX;
		this.y3z2 = 150 / leafSize + zY;

		// z2_p1 - prawa1 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p1 = 70 / leafSize + zX;
		this.y1z2_p1 = 160 / leafSize + zY;
		this.x2z2_p1 = 73 / leafSize + zX;
		this.y2z2_p1 = 155 / leafSize + zY;
		this.x3z2_p1 = 69 / leafSize + zX;
		this.y3z2_p1 = 150 / leafSize + zY;

		// z2_p2 - prawa2 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p2 = 86 / leafSize + zX;
		this.y1z2_p2 = 175 / leafSize + zY;
		this.x2z2_p2 = 92 / leafSize + zX;
		this.y2z2_p2 = 167 / leafSize + zY;
		this.x3z2_p2 = 87 / leafSize + zX;
		this.y3z2_p2 = 160 / leafSize + zY;

		// z2_p3 - prawa3 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p3 = 98 / leafSize + zX;
		this.y1z2_p3 = 190 / leafSize + zY;
		this.x2z2_p3 = 103 / leafSize + zX;
		this.y2z2_p3 = 180 / leafSize + zY;
		this.x3z2_p3 = 100 / leafSize + zX;
		this.y3z2_p3 = 175 / leafSize + zY;
		// z2_l1 - lewa1 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l1 = 54 / leafSize + zX;
		this.y1z2_l1 = 160 / leafSize + zY;
		this.x2z2_l1 = 64 / leafSize + zX;
		this.y2z2_l1 = 161 / leafSize + zY;
		this.x3z2_l1 = 65 / leafSize + zX;
		this.y3z2_l1 = 157 / leafSize + zY;

		// z2_l2 - lewa2 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l2 = 53 / leafSize + zX;
		this.y1z2_l2 = 175 / leafSize + zY;
		this.x2z2_l2 = 75 / leafSize + zX;
		this.y2z2_l2 = 177 / leafSize + zY;
		this.x3z2_l2 = 80 / leafSize + zX;
		this.y3z2_l2 = 169 / leafSize + zY;

		// z2_l3 - lewa3 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l3 = 75 / leafSize + zX;
		this.y1z2_l3 = 185 / leafSize + zY;
		this.x2z2_l3 = 88 / leafSize + zX;
		this.y2z2_l3 = 187 / leafSize + zY;
		this.x3z2_l3 = 92 / leafSize + zX;
		this.y3z2_l3 = 182 / leafSize + zY;

		// z3 - żyła lewa dolna
		this.x1z3 = 110 / leafSize + zX;
		this.y1z3 = 210 / leafSize + zY;
		this.x2z3 = 90 / leafSize + zX;
		this.y2z3 = 194 / leafSize + zY;
		this.x3z3 = 55 / leafSize + zX;
		this.y3z3 = 205 / leafSize + zY;

		// z3_l1 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_l1 = 75 / leafSize + zX;
		this.y1z3_l1 = 202 / leafSize + zY;
		this.x2z3_l1 = 79 / leafSize + zX;
		this.y2z3_l1 = 206 / leafSize + zY;
		this.x3z3_l1 = 71 / leafSize + zX;
		this.y3z3_l1 = 213 / leafSize + zY;

		// z3_l2 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_l2 = 88 / leafSize + zX;
		this.y1z3_l2 = 202 / leafSize + zY;
		this.x2z3_l2 = 94 / leafSize + zX;
		this.y2z3_l2 = 208 / leafSize + zY;
		this.x3z3_l2 = 85 / leafSize + zX;
		this.y3z3_l2 = 218 / leafSize + zY;

		// z3_p1 - prawa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_p1 = 82 / leafSize + zX;
		this.y1z3_p1 = 201 / leafSize + zY;
		this.x2z3_p1 = 81 / leafSize + zX;
		this.y2z3_p1 = 194 / leafSize + zY;
		this.x3z3_p1 = 69 / leafSize + zX;
		this.y3z3_p1 = 192 / leafSize + zY;

		// z3_p2 - prawa2 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_p2 = 98 / leafSize + zX;
		this.y1z3_p2 = 204 / leafSize + zY;
		this.x2z3_p2 = 100 / leafSize + zX;
		this.y2z3_p2 = 198 / leafSize + zY;
		this.x3z3_p2 = 88 / leafSize + zX;
		this.y3z3_p2 = 194 / leafSize + zY;

		// z4 - żyła prawa górna
		this.x1z4 = 110 / leafSize + zX;
		this.y1z4 = 210 / leafSize + zY;
		this.x2z4 = 127 / leafSize + zX;
		this.y2z4 = 172 / leafSize + zY;
		this.x3z4 = 155 / leafSize + zX;
		this.y3z4 = 150 / leafSize + zY;

		// z4_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p1 = 144 / leafSize + zX;
		this.y1z4_p1 = 160 / leafSize + zY;
		this.x2z4_p1 = 152 / leafSize + zX;
		this.y2z4_p1 = 161 / leafSize + zY;
		this.x3z4_p1 = 160 / leafSize + zX;
		this.y3z4_p1 = 156 / leafSize + zY;

		// z4_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p2 = 132 / leafSize + zX;
		this.y1z4_p2 = 174 / leafSize + zY;
		this.x2z4_p2 = 139 / leafSize + zX;
		this.y2z4_p2 = 180 / leafSize + zY;
		this.x3z4_p2 = 163 / leafSize + zX;
		this.y3z4_p2 = 175 / leafSize + zY;

		// z4_p3 - prawa3 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p3 = 122 / leafSize + zX;
		this.y1z4_p3 = 189 / leafSize + zY;
		this.x2z4_p3 = 130 / leafSize + zX;
		this.y2z4_p3 = 192 / leafSize + zY;
		this.x3z4_p3 = 143 / leafSize + zX;
		this.y3z4_p3 = 182 / leafSize + zY;

		// z4_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_l1 = 147 / leafSize + zX;
		this.y1z4_l1 = 149 / leafSize + zY;
		this.x2z4_l1 = 147 / leafSize + zX;
		this.y2z4_l1 = 150 / leafSize + zY;
		this.x3z4_l1 = 149 / leafSize + zX;
		this.y3z4_l1 = 155 / leafSize + zY;

		// z4_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od gór
		this.x1z4_l2 = 120 / leafSize + zX;
		this.y1z4_l2 = 166 / leafSize + zY;
		this.x2z4_l2 = 122 / leafSize + zX;
		this.y2z4_l2 = 180 / leafSize + zY;
		this.x3z4_l2 = 128 / leafSize + zX;
		this.y3z4_l2 = 179 / leafSize + zY;

		// z5 - żyła prawa dolna
		this.x1z5 = 110 / leafSize + zX;
		this.y1z5 = 210 / leafSize + zY;
		this.x2z5 = 133 / leafSize + zX;
		this.y2z5 = 201 / leafSize + zY;
		this.x3z5 = 155 / leafSize + zX;
		this.y3z5 = 205 / leafSize + zY;

		// z5_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_p1 = 140 / leafSize + zX;
		this.y1z5_p1 = 204 / leafSize + zY;
		this.x2z5_p1 = 138 / leafSize + zX;
		this.y2z5_p1 = 210 / leafSize + zY;
		this.x3z5_p1 = 153 / leafSize + zX;
		this.y3z5_p1 = 216 / leafSize + zY;

		// z5_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_p2 = 125 / leafSize + zX;
		this.y1z5_p2 = 206 / leafSize + zY;
		this.x2z5_p2 = 138 / leafSize + zX;
		this.y2z5_p2 = 210 / leafSize + zY;
		this.x3z5_p2 = 135 / leafSize + zX;
		this.y3z5_p2 = 230 / leafSize + zY;

		// z5_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_l1 = 134 / leafSize + zX;
		this.y1z5_l1 = 204 / leafSize + zY;
		this.x2z5_l1 = 132 / leafSize + zX;
		this.y2z5_l1 = 198 / leafSize + zY;
		this.x3z5_l1 = 148 / leafSize + zX;
		this.y3z5_l1 = 191 / leafSize + zY;

		// z5_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_l2 = 117 / leafSize + zX;
		this.y1z5_l2 = 207.5 / leafSize + zY;
		this.x2z5_l2 = 115 / leafSize + zX;
		this.y2z5_l2 = 202 / leafSize + zY;
		this.x3z5_l2 = 124 / leafSize + zX;
		this.y3z5_l2 = 195 / leafSize + zY;
		// vein - end
	}

	showSizeLeafTreeNo3Single() {
		let sizeT3 = sizeTreeNo3Single;
		let extraDaneX = randomXTreeNo3 + startXtreeNo3Single;
		let extraDaneY = randomXTreeNo3 + startYtreeNo3Single;

		// kształt liścia - start
		noStroke();
		// kolor liścia
		//		fill(this.alfa);

		beginShape();
		vertex(this.x1l1 * sizeT3 + extraDaneX,
			this.y1l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1l1 * sizeT3 + extraDaneX,
			this.y1l1 * sizeT3 + extraDaneY,
			this.x2l1 * sizeT3 + extraDaneX,
			this.y2l1 * sizeT3 + extraDaneY,
			this.x3l1 * sizeT3 + extraDaneX,
			this.y3l1 * sizeT3 + extraDaneY); // l1 - od wierzchołka w lewo rysujemy;
		// lewa strona
		bezierVertex(this.x3l1 * sizeT3 + extraDaneX,
			this.y3l1 * sizeT3 + extraDaneY,
			this.x2l2 * sizeT3 + extraDaneX,
			this.y2l2 * sizeT3 + extraDaneY,
			this.x3l2 * sizeT3 + extraDaneX,
			this.y3l2 * sizeT3 + extraDaneY); // l2

		bezierVertex(this.x3l2 * sizeT3 + extraDaneX,
			this.y3l2 * sizeT3 + extraDaneY,
			this.x2l3 * sizeT3 + extraDaneX,
			this.y2l3 * sizeT3 + extraDaneY,
			this.x3l3 * sizeT3 + extraDaneX,
			this.y3l3 * sizeT3 + extraDaneY); // l3

		bezierVertex(this.x3l3 * sizeT3 + extraDaneX,
			this.y3l3 * sizeT3 + extraDaneY,
			this.x2l4 * sizeT3 + extraDaneX,
			this.y2l4 * sizeT3 + extraDaneY,
			this.x3l4 * sizeT3 + extraDaneX,
			this.y3l4 * sizeT3 + extraDaneY); // l4

		bezierVertex(this.x3l4 * sizeT3 + extraDaneX,
			this.y3l4 * sizeT3 + extraDaneY,
			this.x2l5 * sizeT3 + extraDaneX,
			this.y2l5 * sizeT3 + extraDaneY,
			this.x3l5 * sizeT3 + extraDaneX,
			this.y3l5 * sizeT3 + extraDaneY); // l5

		bezierVertex(this.x3l5 * sizeT3 + extraDaneX,
			this.y3l5 * sizeT3 + extraDaneY,
			this.x2l6 * sizeT3 + extraDaneX,
			this.y2l6 * sizeT3 + extraDaneY,
			this.x3l6 * sizeT3 + extraDaneX,
			this.y3l6 * sizeT3 + extraDaneY); // l6

		bezierVertex(this.x3l6 * sizeT3 + extraDaneX,
			this.y3l6 * sizeT3 + extraDaneY,
			this.x2l7 * sizeT3 + extraDaneX,
			this.y2l7 * sizeT3 + extraDaneY,
			this.x3l7 * sizeT3 + extraDaneX,
			this.y3l7 * sizeT3 + extraDaneY); // l7

		bezierVertex(this.x3l7 * sizeT3 + extraDaneX,
			this.y3l7 * sizeT3 + extraDaneY,
			this.x2l8 * sizeT3 + extraDaneX,
			this.y2l8 * sizeT3 + extraDaneY,
			this.x3l8 * sizeT3 + extraDaneX,
			this.y3l8 * sizeT3 + extraDaneY); // l8

		bezierVertex(this.x3l8 * sizeT3 + extraDaneX,
			this.y3l8 * sizeT3 + extraDaneY,
			this.x2l9 * sizeT3 + extraDaneX,
			this.y2l9 * sizeT3 + extraDaneY,
			this.x3l9 * sizeT3 + extraDaneX,
			this.y3l9 * sizeT3 + extraDaneY); // l9

		bezierVertex(this.x3l9 * sizeT3 + extraDaneX,
			this.y3l9 * sizeT3 + extraDaneY,
			this.x2l10 * sizeT3 + extraDaneX,
			this.y2l10 * sizeT3 + extraDaneY,
			this.x3l10 * sizeT3 + extraDaneX,
			this.y3l10 * sizeT3 + extraDaneY); // l10 +l11

		bezierVertex(this.x3l10 * sizeT3 + extraDaneX,
			this.y3l10 * sizeT3 + extraDaneY,
			this.x2l12 * sizeT3 + extraDaneX,
			this.y2l12 * sizeT3 + extraDaneY,
			this.x3l12 * sizeT3 + extraDaneX,
			this.y3l12 * sizeT3 + extraDaneY); // l12

		bezierVertex(this.x3l12 * sizeT3 + extraDaneX,
			this.y3l12 * sizeT3 + extraDaneY,
			this.x2l13 * sizeT3 + extraDaneX,
			this.y2l13 * sizeT3 + extraDaneY,
			this.x3l13 * sizeT3 + extraDaneX,
			this.y3l13 * sizeT3 + extraDaneY); // l13

		bezierVertex(this.x3l13 * sizeT3 + extraDaneX,
			this.y3l13 * sizeT3 + extraDaneY,
			this.x2l14 * sizeT3 + extraDaneX,
			this.y2l14 * sizeT3 + extraDaneY,
			this.x3l14 * sizeT3 + extraDaneX,
			this.y3l14 * sizeT3 + extraDaneY); // l14

		// prawa strona - rysujemy od dołu do góry - nie zmieniamy kierunku rysowania
		bezierVertex(this.x3l14 * sizeT3 + extraDaneX,
			this.y3l14 * sizeT3 + extraDaneY,
			this.x2l15 * sizeT3 + extraDaneX,
			this.y2l15 * sizeT3 + extraDaneY,
			this.x3l15 * sizeT3 + extraDaneX,
			this.y3l15 * sizeT3 + extraDaneY); // l15

		bezierVertex(this.x3l15 * sizeT3 + extraDaneX,
			this.y3l15 * sizeT3 + extraDaneY,
			this.x2l16 * sizeT3 + extraDaneX,
			this.y2l16 * sizeT3 + extraDaneY,
			this.x3l16 * sizeT3 + extraDaneX,
			this.y3l16 * sizeT3 + extraDaneY); // l16

		bezierVertex(this.x3l16 * sizeT3 + extraDaneX,
			this.y3l16 * sizeT3 + extraDaneY,
			this.x2l17 * sizeT3 + extraDaneX,
			this.y2l17 * sizeT3 + extraDaneY,
			this.x3l17 * sizeT3 + extraDaneX,
			this.y3l17 * sizeT3 + extraDaneY); // l17

		bezierVertex(this.x3l17 * sizeT3 + extraDaneX,
			this.y3l17 * sizeT3 + extraDaneY,
			this.x2l18 * sizeT3 + extraDaneX,
			this.y2l18 * sizeT3 + extraDaneY,
			this.x3l18 * sizeT3 + extraDaneX,
			this.y3l18 * sizeT3 + extraDaneY); // l18

		bezierVertex(this.x3l18 * sizeT3 + extraDaneX,
			this.y3l18 * sizeT3 + extraDaneY,
			this.x2l19 * sizeT3 + extraDaneX,
			this.y2l19 * sizeT3 + extraDaneY,
			this.x3l19 * sizeT3 + extraDaneX,
			this.y3l19 * sizeT3 + extraDaneY); // l19

		bezierVertex(this.x3l19 * sizeT3 + extraDaneX,
			this.y3l19 * sizeT3 + extraDaneY,
			this.x2l20 * sizeT3 + extraDaneX,
			this.y2l20 * sizeT3 + extraDaneY,
			this.x3l20 * sizeT3 + extraDaneX,
			this.y3l20 * sizeT3 + extraDaneY); // l20

		bezierVertex(this.x3l20 * sizeT3 + extraDaneX,
			this.y3l20 * sizeT3 + extraDaneY,
			this.x2l21 * sizeT3 + extraDaneX,
			this.y2l21 * sizeT3 + extraDaneY,
			this.x3l21 * sizeT3 + extraDaneX,
			this.y3l21 * sizeT3 + extraDaneY); // l21

		bezierVertex(this.x3l21 * sizeT3 + extraDaneX,
			this.y3l21 * sizeT3 + extraDaneY,
			this.x2l22 * sizeT3 + extraDaneX,
			this.y2l22 * sizeT3 + extraDaneY,
			this.x3l22 * sizeT3 + extraDaneX,
			this.y3l22 * sizeT3 + extraDaneY); // l22

		bezierVertex(this.x3l22 * sizeT3 + extraDaneX,
			this.y3l22 * sizeT3 + extraDaneY,
			this.x2l23 * sizeT3 + extraDaneX,
			this.y2l23 * sizeT3 + extraDaneY,
			this.x3l23 * sizeT3 + extraDaneX,
			this.y3l23 * sizeT3 + extraDaneY); // l23

		bezierVertex(this.x3l23 * sizeT3 + extraDaneX,
			this.y3l23 * sizeT3 + extraDaneY,
			this.x2l24 * sizeT3 + extraDaneX,
			this.y2l24 * sizeT3 + extraDaneY,
			this.x3l24 * sizeT3 + extraDaneX,
			this.y3l24 * sizeT3 + extraDaneY); // l24

		bezierVertex(this.x3l24 * sizeT3 + extraDaneX,
			this.y3l24 * sizeT3 + extraDaneY,
			this.x2l25 * sizeT3 + extraDaneX,
			this.y2l25 * sizeT3 + extraDaneY,
			this.x3l25 * sizeT3 + extraDaneX,
			this.y3l25 * sizeT3 + extraDaneY); // l25

		bezierVertex(this.x3l25 * sizeT3 + extraDaneX,
			this.y3l25 * sizeT3 + extraDaneY,
			this.x2l26 * sizeT3 + extraDaneX,
			this.y2l26 * sizeT3 + extraDaneY,
			this.x3l26 * sizeT3 + extraDaneX,
			this.y3l26 * sizeT3 + extraDaneY); // l26
		endShape();
		// kształt liscia - end

		// żyłki liścia - start
		// z1 - żyła główna - start		
		stroke(0);
		strokeWeight(strokeWeightLeafVeinTreeNo3Single);
		noFill();
		beginShape();
		vertex(this.x1z1 * sizeT3 + extraDaneX,
			this.y1z1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1 * sizeT3 + extraDaneX,
			this.y1z1 * sizeT3 + extraDaneY,
			this.x2z1 * sizeT3 + extraDaneX,
			this.y2z1 * sizeT3 + extraDaneY,
			this.x3z1 * sizeT3 + extraDaneX,
			this.y3z1 * sizeT3 + extraDaneY);
		// z1 - żyła główna 
		endShape();

		beginShape();
		vertex(this.x1z1_l1 * sizeT3 + extraDaneX,
			this.y1z1_l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_l1 * sizeT3 + extraDaneX,
			this.y1z1_l1 * sizeT3 + extraDaneY,
			this.x2z1_l1 * sizeT3 + extraDaneX,
			this.y2z1_l1 * sizeT3 + extraDaneY,
			this.x3z1_l1 * sizeT3 + extraDaneX,
			this.y3z1_l1 * sizeT3 + extraDaneY);
		// z1_l1 - lewa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l2 * sizeT3 + extraDaneX,
			this.y1z1_l2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_l2 * sizeT3 + extraDaneX,
			this.y1z1_l2 * sizeT3 + extraDaneY,
			this.x2z1_l2 * sizeT3 + extraDaneX,
			this.y2z1_l2 * sizeT3 + extraDaneY,
			this.x3z1_l2 * sizeT3 + extraDaneX,
			this.y3z1_l2 * sizeT3 + extraDaneY);
		// z1_l2 - lewa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l3 * sizeT3 + extraDaneX,
			this.y1z1_l3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_l3 * sizeT3 + extraDaneX,
			this.y1z1_l3 * sizeT3 + extraDaneY,
			this.x2z1_l3 * sizeT3 + extraDaneX,
			this.y2z1_l3 * sizeT3 + extraDaneY,
			this.x3z1_l3 * sizeT3 + extraDaneX,
			this.y3z1_l3 * sizeT3 + extraDaneY);
		// z1_l3 - lewa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l4 * sizeT3 + extraDaneX,
			this.y1z1_l4 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_l4 * sizeT3 + extraDaneX,
			this.y1z1_l4 * sizeT3 + extraDaneY,
			this.x2z1_l4 * sizeT3 + extraDaneX,
			this.y2z1_l4 * sizeT3 + extraDaneY,
			this.x3z1_l4 * sizeT3 + extraDaneX,
			this.y3z1_l4 * sizeT3 + extraDaneY);
		// z1_l4 - lewa4 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p1 * sizeT3 + extraDaneX,
			this.y1z1_p1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_p1 * sizeT3 + extraDaneX,
			this.y1z1_p1 * sizeT3 + extraDaneY,
			this.x2z1_p1 * sizeT3 + extraDaneX,
			this.y2z1_p1 * sizeT3 + extraDaneY,
			this.x3z1_p1 * sizeT3 + extraDaneX,
			this.y3z1_p1 * sizeT3 + extraDaneY);
		// z1_p1 - prawa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p2 * sizeT3 + extraDaneX,
			this.y1z1_p2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_p2 * sizeT3 + extraDaneX,
			this.y1z1_p2 * sizeT3 + extraDaneY,
			this.x2z1_p2 * sizeT3 + extraDaneX,
			this.y2z1_p2 * sizeT3 + extraDaneY,
			this.x3z1_p2 * sizeT3 + extraDaneX,
			this.y3z1_p2 * sizeT3 + extraDaneY);
		// z1_p2 - prawa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p3 * sizeT3 + extraDaneX,
			this.y1z1_p3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z1_p3 * sizeT3 + extraDaneX,
			this.y1z1_p3 * sizeT3 + extraDaneY,
			this.x2z1_p3 * sizeT3 + extraDaneX,
			this.y2z1_p3 * sizeT3 + extraDaneY,
			this.x3z1_p3 * sizeT3 + extraDaneX,
			this.y3z1_p3 * sizeT3 + extraDaneY);
		// z1_p3 - prawa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();
		// z1 - żyła główna - end

		// z2 - żyła lewa górna - start			
		beginShape();
		vertex(this.x1z2 * sizeT3 + extraDaneX,
			this.y1z2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2 * sizeT3 + extraDaneX,
			this.y1z2 * sizeT3 + extraDaneY,
			this.x2z2 * sizeT3 + extraDaneX,
			this.y2z2 * sizeT3 + extraDaneY,
			this.x3z2 * sizeT3 + extraDaneX,
			this.y3z2 * sizeT3 + extraDaneY);
		// z2 - żyła lewa górna
		endShape();

		beginShape();
		vertex(this.x1z2_p1 * sizeT3 + extraDaneX,
			this.y1z2_p1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_p1 * sizeT3 + extraDaneX,
			this.y1z2_p1 * sizeT3 + extraDaneY,
			this.x2z2_p1 * sizeT3 + extraDaneX,
			this.y2z2_p1 * sizeT3 + extraDaneY,
			this.x3z2_p1 * sizeT3 + extraDaneX,
			this.y3z2_p1 * sizeT3 + extraDaneY);
		// z2_p1 - prawa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p2 * sizeT3 + extraDaneX,
			this.y1z2_p2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_p2 * sizeT3 + extraDaneX,
			this.y1z2_p2 * sizeT3 + extraDaneY,
			this.x2z2_p2 * sizeT3 + extraDaneX,
			this.y2z2_p2 * sizeT3 + extraDaneY,
			this.x3z2_p2 * sizeT3 + extraDaneX,
			this.y3z2_p2 * sizeT3 + extraDaneY);
		// z2_p2 - prawa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p3 * sizeT3 + extraDaneX,
			this.y1z2_p3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_p3 * sizeT3 + extraDaneX,
			this.y1z2_p3 * sizeT3 + extraDaneY,
			this.x2z2_p3 * sizeT3 + extraDaneX,
			this.y2z2_p3 * sizeT3 + extraDaneY,
			this.x3z2_p3 * sizeT3 + extraDaneX,
			this.y3z2_p3 * sizeT3 + extraDaneY);
		// z2_p3 - prawa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l1 * sizeT3 + extraDaneX,
			this.y1z2_l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_l1 * sizeT3 + extraDaneX,
			this.y1z2_l1 * sizeT3 + extraDaneY,
			this.x2z2_l1 * sizeT3 + extraDaneX,
			this.y2z2_l1 * sizeT3 + extraDaneY,
			this.x3z2_l1 * sizeT3 + extraDaneX,
			this.y3z2_l1 * sizeT3 + extraDaneY);
		// z2_l1 - lewa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l2 * sizeT3 + extraDaneX,
			this.y1z2_l2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_l2 * sizeT3 + extraDaneX,
			this.y1z2_l2 * sizeT3 + extraDaneY,
			this.x2z2_l2 * sizeT3 + extraDaneX,
			this.y2z2_l2 * sizeT3 + extraDaneY,
			this.x3z2_l2 * sizeT3 + extraDaneX,
			this.y3z2_l2 * sizeT3 + extraDaneY);
		// z2_l2 - lewa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l3 * sizeT3 + extraDaneX,
			this.y1z2_l3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z2_l3 * sizeT3 + extraDaneX,
			this.y1z2_l3 * sizeT3 + extraDaneY,
			this.x2z2_l3 * sizeT3 + extraDaneX,
			this.y2z2_l3 * sizeT3 + extraDaneY,
			this.x3z2_l3 * sizeT3 + extraDaneX,
			this.y3z2_l3 * sizeT3 + extraDaneY);
		// z2_l3 - lewa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();
		// z2 - żyła lewa górna - end	

		// z3 - żyła lewa dolna - start			
		beginShape();
		vertex(this.x1z3 * sizeT3 + extraDaneX,
			this.y1z3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z3 * sizeT3 + extraDaneX,
			this.y1z3 * sizeT3 + extraDaneY,
			this.x2z3 * sizeT3 + extraDaneX,
			this.y2z3 * sizeT3 + extraDaneY,
			this.x3z3 * sizeT3 + extraDaneX,
			this.y3z3 * sizeT3 + extraDaneY);
		// z3 - żyła lewa dolna
		endShape();

		beginShape();
		vertex(this.x1z3_l1 * sizeT3 + extraDaneX,
			this.y1z3_l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z3_l1 * sizeT3 + extraDaneX,
			this.y1z3_l1 * sizeT3 + extraDaneY,
			this.x2z3_l1 * sizeT3 + extraDaneX,
			this.y2z3_l1 * sizeT3 + extraDaneY,
			this.x3z3_l1 * sizeT3 + extraDaneX,
			this.y3z3_l1 * sizeT3 + extraDaneY);
		// z3_l1 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_l2 * sizeT3 + extraDaneX,
			this.y1z3_l2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z3_l2 * sizeT3 + extraDaneX,
			this.y1z3_l2 * sizeT3 + extraDaneY,
			this.x2z3_l2 * sizeT3 + extraDaneX,
			this.y2z3_l2 * sizeT3 + extraDaneY,
			this.x3z3_l2 * sizeT3 + extraDaneX,
			this.y3z3_l2 * sizeT3 + extraDaneY);
		// z3_l2 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p1 * sizeT3 + extraDaneX,
			this.y1z3_p1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z3_p1 * sizeT3 + extraDaneX,
			this.y1z3_p1 * sizeT3 + extraDaneY,
			this.x2z3_p1 * sizeT3 + extraDaneX,
			this.y2z3_p1 * sizeT3 + extraDaneY,
			this.x3z3_p1 * sizeT3 + extraDaneX,
			this.y3z3_p1 * sizeT3 + extraDaneY);
		// z3_p1 - prawa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p2 * sizeT3 + extraDaneX,
			this.y1z3_p2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z3_p2 * sizeT3 + extraDaneX,
			this.y1z3_p2 * sizeT3 + extraDaneY,
			this.x2z3_p2 * sizeT3 + extraDaneX,
			this.y2z3_p2 * sizeT3 + extraDaneY,
			this.x3z3_p2 * sizeT3 + extraDaneX,
			this.y3z3_p2 * sizeT3 + extraDaneY);
		// z3_p2 - prawa2 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();
		// z3 - żyła lewa dolna - end		

		// z4 - żyła prawa górna - start			
		beginShape();
		vertex(this.x1z4 * sizeT3 + extraDaneX,
			this.y1z4 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4 * sizeT3 + extraDaneX,
			this.y1z4 * sizeT3 + extraDaneY,
			this.x2z4 * sizeT3 + extraDaneX,
			this.y2z4 * sizeT3 + extraDaneY,
			this.x3z4 * sizeT3 + extraDaneX,
			this.y3z4 * sizeT3 + extraDaneY);
		// z4 - żyła prawa górna
		endShape();

		beginShape();
		vertex(this.x1z4_p1 * sizeT3 + extraDaneX,
			this.y1z4_p1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4_p1 * sizeT3 + extraDaneX,
			this.y1z4_p1 * sizeT3 + extraDaneY,
			this.x2z4_p1 * sizeT3 + extraDaneX,
			this.y2z4_p1 * sizeT3 + extraDaneY,
			this.x3z4_p1 * sizeT3 + extraDaneX,
			this.y3z4_p1 * sizeT3 + extraDaneY);
		// z4_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p2 * sizeT3 + extraDaneX,
			this.y1z4_p2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4_p2 * sizeT3 + extraDaneX,
			this.y1z4_p2 * sizeT3 + extraDaneY,
			this.x2z4_p2 * sizeT3 + extraDaneX,
			this.y2z4_p2 * sizeT3 + extraDaneY,
			this.x3z4_p2 * sizeT3 + extraDaneX,
			this.y3z4_p2 * sizeT3 + extraDaneY);
		// z4_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p3 * sizeT3 + extraDaneX,
			this.y1z4_p3 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4_p3 * sizeT3 + extraDaneX,
			this.y1z4_p3 * sizeT3 + extraDaneY,
			this.x2z4_p3 * sizeT3 + extraDaneX,
			this.y2z4_p3 * sizeT3 + extraDaneY,
			this.x3z4_p3 * sizeT3 + extraDaneX,
			this.y3z4_p3 * sizeT3 + extraDaneY);
		// z4_p3 - prawa3 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l1 * sizeT3 + extraDaneX,
			this.y1z4_l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4_l1 * sizeT3 + extraDaneX,
			this.y1z4_l1 * sizeT3 + extraDaneY,
			this.x2z4_l1 * sizeT3 + extraDaneX,
			this.y2z4_l1 * sizeT3 + extraDaneY,
			this.x3z4_l1 * sizeT3 + extraDaneX,
			this.y3z4_l1 * sizeT3 + extraDaneY);
		// z4_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l2 * sizeT3 + extraDaneX,
			this.y1z4_l2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z4_l2 * sizeT3 + extraDaneX,
			this.y1z4_l2 * sizeT3 + extraDaneY,
			this.x2z4_l2 * sizeT3 + extraDaneX,
			this.y2z4_l2 * sizeT3 + extraDaneY,
			this.x3z4_l2 * sizeT3 + extraDaneX,
			this.y3z4_l2 * sizeT3 + extraDaneY);
		// z4_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z4 - żyła prawa górna - end			

		// z5 - żyła prawa dolna - start			
		beginShape();
		vertex(this.x1z5 * sizeT3 + extraDaneX,
			this.y1z5 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z5 * sizeT3 + extraDaneX,
			this.y1z5 * sizeT3 + extraDaneY,
			this.x2z5 * sizeT3 + extraDaneX,
			this.y2z5 * sizeT3 + extraDaneY,
			this.x3z5 * sizeT3 + extraDaneX,
			this.y3z5 * sizeT3 + extraDaneY);
		// z5 - żyła prawa dolna
		endShape();

		beginShape();
		vertex(this.x1z5_p1 * sizeT3 + extraDaneX,
			this.y1z5_p1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z5_p1 * sizeT3 + extraDaneX,
			this.y1z5_p1 * sizeT3 + extraDaneY,
			this.x2z5_p1 * sizeT3 + extraDaneX,
			this.y2z5_p1 * sizeT3 + extraDaneY,
			this.x3z5_p1 * sizeT3 + extraDaneX,
			this.y3z5_p1 * sizeT3 + extraDaneY);
		// z5_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_p2 * sizeT3 + extraDaneX,
			this.y1z5_p2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z5_p2 * sizeT3 + extraDaneX,
			this.y1z5_p2 * sizeT3 + extraDaneY,
			this.x2z5_p2 * sizeT3 + extraDaneX,
			this.y2z5_p2 * sizeT3 + extraDaneY,
			this.x3z5_p2 * sizeT3 + extraDaneX,
			this.y3z5_p2 * sizeT3 + extraDaneY);
		// z5_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l1 * sizeT3 + extraDaneX,
			this.y1z5_l1 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z5_l1 * sizeT3 + extraDaneX,
			this.y1z5_l1 * sizeT3 + extraDaneY,
			this.x2z5_l1 * sizeT3 + extraDaneX,
			this.y2z5_l1 * sizeT3 + extraDaneY,
			this.x3z5_l1 * sizeT3 + extraDaneX,
			this.y3z5_l1 * sizeT3 + extraDaneY);
		// z5_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l2 * sizeT3 + extraDaneX,
			this.y1z5_l2 * sizeT3 + extraDaneY);
		bezierVertex(this.x1z5_l2 * sizeT3 + extraDaneX,
			this.y1z5_l2 * sizeT3 + extraDaneY,
			this.x2z5_l2 * sizeT3 + extraDaneX,
			this.y2z5_l2 * sizeT3 + extraDaneY,
			this.x3z5_l2 * sizeT3 + extraDaneX,
			this.y3z5_l2 * sizeT3 + extraDaneY);
		// z5_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z5 - żyła prawa dolna - end			
		// żyłki liścia - end


	}
	showSizeLeafTreeNo3Line0() {
		let size0 = sizeTreeNo3Line0;
		let z = this.randomXLine0;
		//		print("klas randomX = " + randomX);

		//		let extraDaneX = this.randomXLine0 * sizeTreeNo3Line0;
		let extraDaneX = z * sizeTreeNo3Line0;
		let extraDaneY = this.randomYLine0 * sizeTreeNo3Line0;

		// kształt liścia - start
		noStroke();
		// kolor liścia
		//		fill(this.kolor);
		strokeWeight(strokeWeightLeafTreeNo3Line0);
		beginShape();
		vertex(this.x1l1 * size0 + extraDaneX,
			this.y1l1 * size0 + extraDaneY);
		bezierVertex(this.x1l1 * size0 + extraDaneX,
			this.y1l1 * size0 + extraDaneY,
			this.x2l1 * size0 + extraDaneX,
			this.y2l1 * size0 + extraDaneY,
			this.x3l1 * size0 + extraDaneX,
			this.y3l1 * size0 + extraDaneY); // l1 - od wierzchołka w lewo rysujemy;
		// lewa strona
		bezierVertex(this.x3l1 * size0 + extraDaneX,
			this.y3l1 * size0 + extraDaneY,
			this.x2l2 * size0 + extraDaneX,
			this.y2l2 * size0 + extraDaneY,
			this.x3l2 * size0 + extraDaneX,
			this.y3l2 * size0 + extraDaneY); // l2

		bezierVertex(this.x3l2 * size0 + extraDaneX,
			this.y3l2 * size0 + extraDaneY,
			this.x2l3 * size0 + extraDaneX,
			this.y2l3 * size0 + extraDaneY,
			this.x3l3 * size0 + extraDaneX,
			this.y3l3 * size0 + extraDaneY); // l3

		bezierVertex(this.x3l3 * size0 + extraDaneX,
			this.y3l3 * size0 + extraDaneY,
			this.x2l4 * size0 + extraDaneX,
			this.y2l4 * size0 + extraDaneY,
			this.x3l4 * size0 + extraDaneX,
			this.y3l4 * size0 + extraDaneY); // l4

		bezierVertex(this.x3l4 * size0 + extraDaneX,
			this.y3l4 * size0 + extraDaneY,
			this.x2l5 * size0 + extraDaneX,
			this.y2l5 * size0 + extraDaneY,
			this.x3l5 * size0 + extraDaneX,
			this.y3l5 * size0 + extraDaneY); // l5

		bezierVertex(this.x3l5 * size0 + extraDaneX,
			this.y3l5 * size0 + extraDaneY,
			this.x2l6 * size0 + extraDaneX,
			this.y2l6 * size0 + extraDaneY,
			this.x3l6 * size0 + extraDaneX,
			this.y3l6 * size0 + extraDaneY); // l6

		bezierVertex(this.x3l6 * size0 + extraDaneX,
			this.y3l6 * size0 + extraDaneY,
			this.x2l7 * size0 + extraDaneX,
			this.y2l7 * size0 + extraDaneY,
			this.x3l7 * size0 + extraDaneX,
			this.y3l7 * size0 + extraDaneY); // l7

		bezierVertex(this.x3l7 * size0 + extraDaneX,
			this.y3l7 * size0 + extraDaneY,
			this.x2l8 * size0 + extraDaneX,
			this.y2l8 * size0 + extraDaneY,
			this.x3l8 * size0 + extraDaneX,
			this.y3l8 * size0 + extraDaneY); // l8

		bezierVertex(this.x3l8 * size0 + extraDaneX,
			this.y3l8 * size0 + extraDaneY,
			this.x2l9 * size0 + extraDaneX,
			this.y2l9 * size0 + extraDaneY,
			this.x3l9 * size0 + extraDaneX,
			this.y3l9 * size0 + extraDaneY); // l9

		bezierVertex(this.x3l9 * size0 + extraDaneX,
			this.y3l9 * size0 + extraDaneY,
			this.x2l10 * size0 + extraDaneX,
			this.y2l10 * size0 + extraDaneY,
			this.x3l10 * size0 + extraDaneX,
			this.y3l10 * size0 + extraDaneY); // l10 +l11

		bezierVertex(this.x3l10 * size0 + extraDaneX,
			this.y3l10 * size0 + extraDaneY,
			this.x2l12 * size0 + extraDaneX,
			this.y2l12 * size0 + extraDaneY,
			this.x3l12 * size0 + extraDaneX,
			this.y3l12 * size0 + extraDaneY); // l12

		bezierVertex(this.x3l12 * size0 + extraDaneX,
			this.y3l12 * size0 + extraDaneY,
			this.x2l13 * size0 + extraDaneX,
			this.y2l13 * size0 + extraDaneY,
			this.x3l13 * size0 + extraDaneX,
			this.y3l13 * size0 + extraDaneY); // l13

		bezierVertex(this.x3l13 * size0 + extraDaneX,
			this.y3l13 * size0 + extraDaneY,
			this.x2l14 * size0 + extraDaneX,
			this.y2l14 * size0 + extraDaneY,
			this.x3l14 * size0 + extraDaneX,
			this.y3l14 * size0 + extraDaneY); // l14

		// prawa strona - rysujemy od dołu do góry - nie zmieniamy kierunku rysowania
		bezierVertex(this.x3l14 * size0 + extraDaneX,
			this.y3l14 * size0 + extraDaneY,
			this.x2l15 * size0 + extraDaneX,
			this.y2l15 * size0 + extraDaneY,
			this.x3l15 * size0 + extraDaneX,
			this.y3l15 * size0 + extraDaneY); // l15

		bezierVertex(this.x3l15 * size0 + extraDaneX,
			this.y3l15 * size0 + extraDaneY,
			this.x2l16 * size0 + extraDaneX,
			this.y2l16 * size0 + extraDaneY,
			this.x3l16 * size0 + extraDaneX,
			this.y3l16 * size0 + extraDaneY); // l16

		bezierVertex(this.x3l16 * size0 + extraDaneX,
			this.y3l16 * size0 + extraDaneY,
			this.x2l17 * size0 + extraDaneX,
			this.y2l17 * size0 + extraDaneY,
			this.x3l17 * size0 + extraDaneX,
			this.y3l17 * size0 + extraDaneY); // l17

		bezierVertex(this.x3l17 * size0 + extraDaneX,
			this.y3l17 * size0 + extraDaneY,
			this.x2l18 * size0 + extraDaneX,
			this.y2l18 * size0 + extraDaneY,
			this.x3l18 * size0 + extraDaneX,
			this.y3l18 * size0 + extraDaneY); // l18

		bezierVertex(this.x3l18 * size0 + extraDaneX,
			this.y3l18 * size0 + extraDaneY,
			this.x2l19 * size0 + extraDaneX,
			this.y2l19 * size0 + extraDaneY,
			this.x3l19 * size0 + extraDaneX,
			this.y3l19 * size0 + extraDaneY); // l19

		bezierVertex(this.x3l19 * size0 + extraDaneX,
			this.y3l19 * size0 + extraDaneY,
			this.x2l20 * size0 + extraDaneX,
			this.y2l20 * size0 + extraDaneY,
			this.x3l20 * size0 + extraDaneX,
			this.y3l20 * size0 + extraDaneY); // l20

		bezierVertex(this.x3l20 * size0 + extraDaneX,
			this.y3l20 * size0 + extraDaneY,
			this.x2l21 * size0 + extraDaneX,
			this.y2l21 * size0 + extraDaneY,
			this.x3l21 * size0 + extraDaneX,
			this.y3l21 * size0 + extraDaneY); // l21

		bezierVertex(this.x3l21 * size0 + extraDaneX,
			this.y3l21 * size0 + extraDaneY,
			this.x2l22 * size0 + extraDaneX,
			this.y2l22 * size0 + extraDaneY,
			this.x3l22 * size0 + extraDaneX,
			this.y3l22 * size0 + extraDaneY); // l22

		bezierVertex(this.x3l22 * size0 + extraDaneX,
			this.y3l22 * size0 + extraDaneY,
			this.x2l23 * size0 + extraDaneX,
			this.y2l23 * size0 + extraDaneY,
			this.x3l23 * size0 + extraDaneX,
			this.y3l23 * size0 + extraDaneY); // l23

		bezierVertex(this.x3l23 * size0 + extraDaneX,
			this.y3l23 * size0 + extraDaneY,
			this.x2l24 * size0 + extraDaneX,
			this.y2l24 * size0 + extraDaneY,
			this.x3l24 * size0 + extraDaneX,
			this.y3l24 * size0 + extraDaneY); // l24

		bezierVertex(this.x3l24 * size0 + extraDaneX,
			this.y3l24 * size0 + extraDaneY,
			this.x2l25 * size0 + extraDaneX,
			this.y2l25 * size0 + extraDaneY,
			this.x3l25 * size0 + extraDaneX,
			this.y3l25 * size0 + extraDaneY); // l25

		bezierVertex(this.x3l25 * size0 + extraDaneX,
			this.y3l25 * size0 + extraDaneY,
			this.x2l26 * size0 + extraDaneX,
			this.y2l26 * size0 + extraDaneY,
			this.x3l26 * size0 + extraDaneX,
			this.y3l26 * size0 + extraDaneY); // l26
		endShape();
		// kształt liscia - end

		// przy takim rozmiarze nie potrzebne, / na rysnku dają małe czarne plamy		
		// żyłki liścia - start
		// z1 - żyła główna - start		
		stroke(0);
		strokeWeight(strokeWeightLeafVeinTreeNo3Line0);
		noFill();
		beginShape();
		vertex(this.x1z1 * size0 + extraDaneX,
			this.y1z1 * size0 + extraDaneY);
		bezierVertex(this.x1z1 * size0 + extraDaneX,
			this.y1z1 * size0 + extraDaneY,
			this.x2z1 * size0 + extraDaneX,
			this.y2z1 * size0 + extraDaneY,
			this.x3z1 * size0 + extraDaneX,
			this.y3z1 * size0 + extraDaneY);
		// z1 - żyła główna 
		endShape();

		beginShape();
		vertex(this.x1z1_l1 * size0 + extraDaneX,
			this.y1z1_l1 * size0 + extraDaneY);
		bezierVertex(this.x1z1_l1 * size0 + extraDaneX,
			this.y1z1_l1 * size0 + extraDaneY,
			this.x2z1_l1 * size0 + extraDaneX,
			this.y2z1_l1 * size0 + extraDaneY,
			this.x3z1_l1 * size0 + extraDaneX,
			this.y3z1_l1 * size0 + extraDaneY);
		// z1_l1 - lewa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l2 * size0 + extraDaneX,
			this.y1z1_l2 * size0 + extraDaneY);
		bezierVertex(this.x1z1_l2 * size0 + extraDaneX,
			this.y1z1_l2 * size0 + extraDaneY,
			this.x2z1_l2 * size0 + extraDaneX,
			this.y2z1_l2 * size0 + extraDaneY,
			this.x3z1_l2 * size0 + extraDaneX,
			this.y3z1_l2 * size0 + extraDaneY);
		// z1_l2 - lewa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l3 * size0 + extraDaneX,
			this.y1z1_l3 * size0 + extraDaneY);
		bezierVertex(this.x1z1_l3 * size0 + extraDaneX,
			this.y1z1_l3 * size0 + extraDaneY,
			this.x2z1_l3 * size0 + extraDaneX,
			this.y2z1_l3 * size0 + extraDaneY,
			this.x3z1_l3 * size0 + extraDaneX,
			this.y3z1_l3 * size0 + extraDaneY);
		// z1_l3 - lewa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l4 * size0 + extraDaneX,
			this.y1z1_l4 * size0 + extraDaneY);
		bezierVertex(this.x1z1_l4 * size0 + extraDaneX,
			this.y1z1_l4 * size0 + extraDaneY,
			this.x2z1_l4 * size0 + extraDaneX,
			this.y2z1_l4 * size0 + extraDaneY,
			this.x3z1_l4 * size0 + extraDaneX,
			this.y3z1_l4 * size0 + extraDaneY);
		// z1_l4 - lewa4 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p1 * size0 + extraDaneX,
			this.y1z1_p1 * size0 + extraDaneY);
		bezierVertex(this.x1z1_p1 * size0 + extraDaneX,
			this.y1z1_p1 * size0 + extraDaneY,
			this.x2z1_p1 * size0 + extraDaneX,
			this.y2z1_p1 * size0 + extraDaneY,
			this.x3z1_p1 * size0 + extraDaneX,
			this.y3z1_p1 * size0 + extraDaneY);
		// z1_p1 - prawa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p2 * size0 + extraDaneX,
			this.y1z1_p2 * size0 + extraDaneY);
		bezierVertex(this.x1z1_p2 * size0 + extraDaneX,
			this.y1z1_p2 * size0 + extraDaneY,
			this.x2z1_p2 * size0 + extraDaneX,
			this.y2z1_p2 * size0 + extraDaneY,
			this.x3z1_p2 * size0 + extraDaneX,
			this.y3z1_p2 * size0 + extraDaneY);
		// z1_p2 - prawa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p3 * size0 + extraDaneX,
			this.y1z1_p3 * size0 + extraDaneY);
		bezierVertex(this.x1z1_p3 * size0 + extraDaneX,
			this.y1z1_p3 * size0 + extraDaneY,
			this.x2z1_p3 * size0 + extraDaneX,
			this.y2z1_p3 * size0 + extraDaneY,
			this.x3z1_p3 * size0 + extraDaneX,
			this.y3z1_p3 * size0 + extraDaneY);
		// z1_p3 - prawa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();
		// z1 - żyła główna - end

		// z2 - żyła lewa górna - start			
		beginShape();
		vertex(this.x1z2 * size0 + extraDaneX,
			this.y1z2 * size0 + extraDaneY);
		bezierVertex(this.x1z2 * size0 + extraDaneX,
			this.y1z2 * size0 + extraDaneY,
			this.x2z2 * size0 + extraDaneX,
			this.y2z2 * size0 + extraDaneY,
			this.x3z2 * size0 + extraDaneX,
			this.y3z2 * size0 + extraDaneY);
		// z2 - żyła lewa górna
		endShape();

		beginShape();
		vertex(this.x1z2_p1 * size0 + extraDaneX,
			this.y1z2_p1 * size0 + extraDaneY);
		bezierVertex(this.x1z2_p1 * size0 + extraDaneX,
			this.y1z2_p1 * size0 + extraDaneY,
			this.x2z2_p1 * size0 + extraDaneX,
			this.y2z2_p1 * size0 + extraDaneY,
			this.x3z2_p1 * size0 + extraDaneX,
			this.y3z2_p1 * size0 + extraDaneY);
		// z2_p1 - prawa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p2 * size0 + extraDaneX,
			this.y1z2_p2 * size0 + extraDaneY);
		bezierVertex(this.x1z2_p2 * size0 + extraDaneX,
			this.y1z2_p2 * size0 + extraDaneY,
			this.x2z2_p2 * size0 + extraDaneX,
			this.y2z2_p2 * size0 + extraDaneY,
			this.x3z2_p2 * size0 + extraDaneX,
			this.y3z2_p2 * size0 + extraDaneY);
		// z2_p2 - prawa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p3 * size0 + extraDaneX,
			this.y1z2_p3 * size0 + extraDaneY);
		bezierVertex(this.x1z2_p3 * size0 + extraDaneX,
			this.y1z2_p3 * size0 + extraDaneY,
			this.x2z2_p3 * size0 + extraDaneX,
			this.y2z2_p3 * size0 + extraDaneY,
			this.x3z2_p3 * size0 + extraDaneX,
			this.y3z2_p3 * size0 + extraDaneY);
		// z2_p3 - prawa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l1 * size0 + extraDaneX,
			this.y1z2_l1 * size0 + extraDaneY);
		bezierVertex(this.x1z2_l1 * size0 + extraDaneX,
			this.y1z2_l1 * size0 + extraDaneY,
			this.x2z2_l1 * size0 + extraDaneX,
			this.y2z2_l1 * size0 + extraDaneY,
			this.x3z2_l1 * size0 + extraDaneX,
			this.y3z2_l1 * size0 + extraDaneY);
		// z2_l1 - lewa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l2 * size0 + extraDaneX,
			this.y1z2_l2 * size0 + extraDaneY);
		bezierVertex(this.x1z2_l2 * size0 + extraDaneX,
			this.y1z2_l2 * size0 + extraDaneY,
			this.x2z2_l2 * size0 + extraDaneX,
			this.y2z2_l2 * size0 + extraDaneY,
			this.x3z2_l2 * size0 + extraDaneX,
			this.y3z2_l2 * size0 + extraDaneY);
		// z2_l2 - lewa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l3 * size0 + extraDaneX,
			this.y1z2_l3 * size0 + extraDaneY);
		bezierVertex(this.x1z2_l3 * size0 + extraDaneX,
			this.y1z2_l3 * size0 + extraDaneY,
			this.x2z2_l3 * size0 + extraDaneX,
			this.y2z2_l3 * size0 + extraDaneY,
			this.x3z2_l3 * size0 + extraDaneX,
			this.y3z2_l3 * size0 + extraDaneY);
		// z2_l3 - lewa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();
		// z2 - żyła lewa górna - end	

		// z3 - żyła lewa dolna - start			
		beginShape();
		vertex(this.x1z3 * size0 + extraDaneX,
			this.y1z3 * size0 + extraDaneY);
		bezierVertex(this.x1z3 * size0 + extraDaneX,
			this.y1z3 * size0 + extraDaneY,
			this.x2z3 * size0 + extraDaneX,
			this.y2z3 * size0 + extraDaneY,
			this.x3z3 * size0 + extraDaneX,
			this.y3z3 * size0 + extraDaneY);
		// z3 - żyła lewa dolna
		endShape();

		beginShape();
		vertex(this.x1z3_l1 * size0 + extraDaneX,
			this.y1z3_l1 * size0 + extraDaneY);
		bezierVertex(this.x1z3_l1 * size0 + extraDaneX,
			this.y1z3_l1 * size0 + extraDaneY,
			this.x2z3_l1 * size0 + extraDaneX,
			this.y2z3_l1 * size0 + extraDaneY,
			this.x3z3_l1 * size0 + extraDaneX,
			this.y3z3_l1 * size0 + extraDaneY);
		// z3_l1 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_l2 * size0 + extraDaneX,
			this.y1z3_l2 * size0 + extraDaneY);
		bezierVertex(this.x1z3_l2 * size0 + extraDaneX,
			this.y1z3_l2 * size0 + extraDaneY,
			this.x2z3_l2 * size0 + extraDaneX,
			this.y2z3_l2 * size0 + extraDaneY,
			this.x3z3_l2 * size0 + extraDaneX,
			this.y3z3_l2 * size0 + extraDaneY);
		// z3_l2 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p1 * size0 + extraDaneX,
			this.y1z3_p1 * size0 + extraDaneY);
		bezierVertex(this.x1z3_p1 * size0 + extraDaneX,
			this.y1z3_p1 * size0 + extraDaneY,
			this.x2z3_p1 * size0 + extraDaneX,
			this.y2z3_p1 * size0 + extraDaneY,
			this.x3z3_p1 * size0 + extraDaneX,
			this.y3z3_p1 * size0 + extraDaneY);
		// z3_p1 - prawa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p2 * size0 + extraDaneX,
			this.y1z3_p2 * size0 + extraDaneY);
		bezierVertex(this.x1z3_p2 * size0 + extraDaneX,
			this.y1z3_p2 * size0 + extraDaneY,
			this.x2z3_p2 * size0 + extraDaneX,
			this.y2z3_p2 * size0 + extraDaneY,
			this.x3z3_p2 * size0 + extraDaneX,
			this.y3z3_p2 * size0 + extraDaneY);
		// z3_p2 - prawa2 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();
		// z3 - żyła lewa dolna - end		

		// z4 - żyła prawa górna - start			
		beginShape();
		vertex(this.x1z4 * size0 + extraDaneX,
			this.y1z4 * size0 + extraDaneY);
		bezierVertex(this.x1z4 * size0 + extraDaneX,
			this.y1z4 * size0 + extraDaneY,
			this.x2z4 * size0 + extraDaneX,
			this.y2z4 * size0 + extraDaneY,
			this.x3z4 * size0 + extraDaneX,
			this.y3z4 * size0 + extraDaneY);
		// z4 - żyła prawa górna
		endShape();

		beginShape();
		vertex(this.x1z4_p1 * size0 + extraDaneX,
			this.y1z4_p1 * size0 + extraDaneY);
		bezierVertex(this.x1z4_p1 * size0 + extraDaneX,
			this.y1z4_p1 * size0 + extraDaneY,
			this.x2z4_p1 * size0 + extraDaneX,
			this.y2z4_p1 * size0 + extraDaneY,
			this.x3z4_p1 * size0 + extraDaneX,
			this.y3z4_p1 * size0 + extraDaneY);
		// z4_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p2 * size0 + extraDaneX,
			this.y1z4_p2 * size0 + extraDaneY);
		bezierVertex(this.x1z4_p2 * size0 + extraDaneX,
			this.y1z4_p2 * size0 + extraDaneY,
			this.x2z4_p2 * size0 + extraDaneX,
			this.y2z4_p2 * size0 + extraDaneY,
			this.x3z4_p2 * size0 + extraDaneX,
			this.y3z4_p2 * size0 + extraDaneY);
		// z4_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p3 * size0 + extraDaneX,
			this.y1z4_p3 * size0 + extraDaneY);
		bezierVertex(this.x1z4_p3 * size0 + extraDaneX,
			this.y1z4_p3 * size0 + extraDaneY,
			this.x2z4_p3 * size0 + extraDaneX,
			this.y2z4_p3 * size0 + extraDaneY,
			this.x3z4_p3 * size0 + extraDaneX,
			this.y3z4_p3 * size0 + extraDaneY);
		// z4_p3 - prawa3 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l1 * size0 + extraDaneX,
			this.y1z4_l1 * size0 + extraDaneY);
		bezierVertex(this.x1z4_l1 * size0 + extraDaneX,
			this.y1z4_l1 * size0 + extraDaneY,
			this.x2z4_l1 * size0 + extraDaneX,
			this.y2z4_l1 * size0 + extraDaneY,
			this.x3z4_l1 * size0 + extraDaneX,
			this.y3z4_l1 * size0 + extraDaneY);
		// z4_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l2 * size0 + extraDaneX,
			this.y1z4_l2 * size0 + extraDaneY);
		bezierVertex(this.x1z4_l2 * size0 + extraDaneX,
			this.y1z4_l2 * size0 + extraDaneY,
			this.x2z4_l2 * size0 + extraDaneX,
			this.y2z4_l2 * size0 + extraDaneY,
			this.x3z4_l2 * size0 + extraDaneX,
			this.y3z4_l2 * size0 + extraDaneY);
		// z4_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z4 - żyła prawa górna - end			

		// z5 - żyła prawa dolna - start			
		beginShape();
		vertex(this.x1z5 * size0 + extraDaneX,
			this.y1z5 * size0 + extraDaneY);
		bezierVertex(this.x1z5 * size0 + extraDaneX,
			this.y1z5 * size0 + extraDaneY,
			this.x2z5 * size0 + extraDaneX,
			this.y2z5 * size0 + extraDaneY,
			this.x3z5 * size0 + extraDaneX,
			this.y3z5 * size0 + extraDaneY);
		// z5 - żyła prawa dolna
		endShape();

		beginShape();
		vertex(this.x1z5_p1 * size0 + extraDaneX,
			this.y1z5_p1 * size0 + extraDaneY);
		bezierVertex(this.x1z5_p1 * size0 + extraDaneX,
			this.y1z5_p1 * size0 + extraDaneY,
			this.x2z5_p1 * size0 + extraDaneX,
			this.y2z5_p1 * size0 + extraDaneY,
			this.x3z5_p1 * size0 + extraDaneX,
			this.y3z5_p1 * size0 + extraDaneY);
		// z5_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_p2 * size0 + extraDaneX,
			this.y1z5_p2 * size0 + extraDaneY);
		bezierVertex(this.x1z5_p2 * size0 + extraDaneX,
			this.y1z5_p2 * size0 + extraDaneY,
			this.x2z5_p2 * size0 + extraDaneX,
			this.y2z5_p2 * size0 + extraDaneY,
			this.x3z5_p2 * size0 + extraDaneX,
			this.y3z5_p2 * size0 + extraDaneY);
		// z5_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l1 * size0 + extraDaneX,
			this.y1z5_l1 * size0 + extraDaneY);
		bezierVertex(this.x1z5_l1 * size0 + extraDaneX,
			this.y1z5_l1 * size0 + extraDaneY,
			this.x2z5_l1 * size0 + extraDaneX,
			this.y2z5_l1 * size0 + extraDaneY,
			this.x3z5_l1 * size0 + extraDaneX,
			this.y3z5_l1 * size0 + extraDaneY);
		// z5_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l2 * size0 + extraDaneX,
			this.y1z5_l2 * size0 + extraDaneY);
		bezierVertex(this.x1z5_l2 * size0 + extraDaneX,
			this.y1z5_l2 * size0 + extraDaneY,
			this.x2z5_l2 * size0 + extraDaneX,
			this.y2z5_l2 * size0 + extraDaneY,
			this.x3z5_l2 * size0 + extraDaneX,
			this.y3z5_l2 * size0 + extraDaneY);
		// z5_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z5 - żyła prawa dolna - end			
		// żyłki liścia - end


	}
	showSizeLeafTreeNo3Line1() {
		let size = sizeTreeNo3Line1;
		let extraDaneX = this.randomXLine0 * sizeTreeNo3Line1;
		let extraDaneY = this.randomYLine0 * sizeTreeNo3Line1;

		// kształt liścia - start
		noStroke();
		// kolor liścia
		strokeWeight(strokeWeightLeafTreeNo3Line1);
		beginShape();
		vertex(this.x1l1 * size + extraDaneX,
			this.y1l1 * size + extraDaneY);
		bezierVertex(this.x1l1 * size + extraDaneX,
			this.y1l1 * size + extraDaneY,
			this.x2l1 * size + extraDaneX,
			this.y2l1 * size + extraDaneY,
			this.x3l1 * size + extraDaneX,
			this.y3l1 * size + extraDaneY); // l1 - od wierzchołka w lewo rysujemy;
		// lewa strona
		bezierVertex(this.x3l1 * size + extraDaneX,
			this.y3l1 * size + extraDaneY,
			this.x2l2 * size + extraDaneX,
			this.y2l2 * size + extraDaneY,
			this.x3l2 * size + extraDaneX,
			this.y3l2 * size + extraDaneY); // l2

		bezierVertex(this.x3l2 * size + extraDaneX,
			this.y3l2 * size + extraDaneY,
			this.x2l3 * size + extraDaneX,
			this.y2l3 * size + extraDaneY,
			this.x3l3 * size + extraDaneX,
			this.y3l3 * size + extraDaneY); // l3

		bezierVertex(this.x3l3 * size + extraDaneX,
			this.y3l3 * size + extraDaneY,
			this.x2l4 * size + extraDaneX,
			this.y2l4 * size + extraDaneY,
			this.x3l4 * size + extraDaneX,
			this.y3l4 * size + extraDaneY); // l4

		bezierVertex(this.x3l4 * size + extraDaneX,
			this.y3l4 * size + extraDaneY,
			this.x2l5 * size + extraDaneX,
			this.y2l5 * size + extraDaneY,
			this.x3l5 * size + extraDaneX,
			this.y3l5 * size + extraDaneY); // l5

		bezierVertex(this.x3l5 * size + extraDaneX,
			this.y3l5 * size + extraDaneY,
			this.x2l6 * size + extraDaneX,
			this.y2l6 * size + extraDaneY,
			this.x3l6 * size + extraDaneX,
			this.y3l6 * size + extraDaneY); // l6

		bezierVertex(this.x3l6 * size + extraDaneX,
			this.y3l6 * size + extraDaneY,
			this.x2l7 * size + extraDaneX,
			this.y2l7 * size + extraDaneY,
			this.x3l7 * size + extraDaneX,
			this.y3l7 * size + extraDaneY); // l7

		bezierVertex(this.x3l7 * size + extraDaneX,
			this.y3l7 * size + extraDaneY,
			this.x2l8 * size + extraDaneX,
			this.y2l8 * size + extraDaneY,
			this.x3l8 * size + extraDaneX,
			this.y3l8 * size + extraDaneY); // l8

		bezierVertex(this.x3l8 * size + extraDaneX,
			this.y3l8 * size + extraDaneY,
			this.x2l9 * size + extraDaneX,
			this.y2l9 * size + extraDaneY,
			this.x3l9 * size + extraDaneX,
			this.y3l9 * size + extraDaneY); // l9

		bezierVertex(this.x3l9 * size + extraDaneX,
			this.y3l9 * size + extraDaneY,
			this.x2l10 * size + extraDaneX,
			this.y2l10 * size + extraDaneY,
			this.x3l10 * size + extraDaneX,
			this.y3l10 * size + extraDaneY); // l10 +l11

		bezierVertex(this.x3l10 * size + extraDaneX,
			this.y3l10 * size + extraDaneY,
			this.x2l12 * size + extraDaneX,
			this.y2l12 * size + extraDaneY,
			this.x3l12 * size + extraDaneX,
			this.y3l12 * size + extraDaneY); // l12

		bezierVertex(this.x3l12 * size + extraDaneX,
			this.y3l12 * size + extraDaneY,
			this.x2l13 * size + extraDaneX,
			this.y2l13 * size + extraDaneY,
			this.x3l13 * size + extraDaneX,
			this.y3l13 * size + extraDaneY); // l13

		bezierVertex(this.x3l13 * size + extraDaneX,
			this.y3l13 * size + extraDaneY,
			this.x2l14 * size + extraDaneX,
			this.y2l14 * size + extraDaneY,
			this.x3l14 * size + extraDaneX,
			this.y3l14 * size + extraDaneY); // l14

		// prawa strona - rysujemy od dołu do góry - nie zmieniamy kierunku rysowania
		bezierVertex(this.x3l14 * size + extraDaneX,
			this.y3l14 * size + extraDaneY,
			this.x2l15 * size + extraDaneX,
			this.y2l15 * size + extraDaneY,
			this.x3l15 * size + extraDaneX,
			this.y3l15 * size + extraDaneY); // l15

		bezierVertex(this.x3l15 * size + extraDaneX,
			this.y3l15 * size + extraDaneY,
			this.x2l16 * size + extraDaneX,
			this.y2l16 * size + extraDaneY,
			this.x3l16 * size + extraDaneX,
			this.y3l16 * size + extraDaneY); // l16

		bezierVertex(this.x3l16 * size + extraDaneX,
			this.y3l16 * size + extraDaneY,
			this.x2l17 * size + extraDaneX,
			this.y2l17 * size + extraDaneY,
			this.x3l17 * size + extraDaneX,
			this.y3l17 * size + extraDaneY); // l17

		bezierVertex(this.x3l17 * size + extraDaneX,
			this.y3l17 * size + extraDaneY,
			this.x2l18 * size + extraDaneX,
			this.y2l18 * size + extraDaneY,
			this.x3l18 * size + extraDaneX,
			this.y3l18 * size + extraDaneY); // l18

		bezierVertex(this.x3l18 * size + extraDaneX,
			this.y3l18 * size + extraDaneY,
			this.x2l19 * size + extraDaneX,
			this.y2l19 * size + extraDaneY,
			this.x3l19 * size + extraDaneX,
			this.y3l19 * size + extraDaneY); // l19

		bezierVertex(this.x3l19 * size + extraDaneX,
			this.y3l19 * size + extraDaneY,
			this.x2l20 * size + extraDaneX,
			this.y2l20 * size + extraDaneY,
			this.x3l20 * size + extraDaneX,
			this.y3l20 * size + extraDaneY); // l20

		bezierVertex(this.x3l20 * size + extraDaneX,
			this.y3l20 * size + extraDaneY,
			this.x2l21 * size + extraDaneX,
			this.y2l21 * size + extraDaneY,
			this.x3l21 * size + extraDaneX,
			this.y3l21 * size + extraDaneY); // l21

		bezierVertex(this.x3l21 * size + extraDaneX,
			this.y3l21 * size + extraDaneY,
			this.x2l22 * size + extraDaneX,
			this.y2l22 * size + extraDaneY,
			this.x3l22 * size + extraDaneX,
			this.y3l22 * size + extraDaneY); // l22

		bezierVertex(this.x3l22 * size + extraDaneX,
			this.y3l22 * size + extraDaneY,
			this.x2l23 * size + extraDaneX,
			this.y2l23 * size + extraDaneY,
			this.x3l23 * size + extraDaneX,
			this.y3l23 * size + extraDaneY); // l23

		bezierVertex(this.x3l23 * size + extraDaneX,
			this.y3l23 * size + extraDaneY,
			this.x2l24 * size + extraDaneX,
			this.y2l24 * size + extraDaneY,
			this.x3l24 * size + extraDaneX,
			this.y3l24 * size + extraDaneY); // l24

		bezierVertex(this.x3l24 * size + extraDaneX,
			this.y3l24 * size + extraDaneY,
			this.x2l25 * size + extraDaneX,
			this.y2l25 * size + extraDaneY,
			this.x3l25 * size + extraDaneX,
			this.y3l25 * size + extraDaneY); // l25

		bezierVertex(this.x3l25 * size + extraDaneX,
			this.y3l25 * size + extraDaneY,
			this.x2l26 * size + extraDaneX,
			this.y2l26 * size + extraDaneY,
			this.x3l26 * size + extraDaneX,
			this.y3l26 * size + extraDaneY); // l26
		endShape();
		// kształt liscia - end

		// żyłki liścia - start
		// z1 - żyła główna - start		
		stroke(0);
		strokeWeight(strokeWeightLeafVeinTreeNo3Line1);
		noFill();
		beginShape();
		vertex(this.x1z1 * size + extraDaneX,
			this.y1z1 * size + extraDaneY);
		bezierVertex(this.x1z1 * size + extraDaneX,
			this.y1z1 * size + extraDaneY,
			this.x2z1 * size + extraDaneX,
			this.y2z1 * size + extraDaneY,
			this.x3z1 * size + extraDaneX,
			this.y3z1 * size + extraDaneY);
		// z1 - żyła główna 
		endShape();

		beginShape();
		vertex(this.x1z1_l1 * size + extraDaneX,
			this.y1z1_l1 * size + extraDaneY);
		bezierVertex(this.x1z1_l1 * size + extraDaneX,
			this.y1z1_l1 * size + extraDaneY,
			this.x2z1_l1 * size + extraDaneX,
			this.y2z1_l1 * size + extraDaneY,
			this.x3z1_l1 * size + extraDaneX,
			this.y3z1_l1 * size + extraDaneY);
		// z1_l1 - lewa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l2 * size + extraDaneX,
			this.y1z1_l2 * size + extraDaneY);
		bezierVertex(this.x1z1_l2 * size + extraDaneX,
			this.y1z1_l2 * size + extraDaneY,
			this.x2z1_l2 * size + extraDaneX,
			this.y2z1_l2 * size + extraDaneY,
			this.x3z1_l2 * size + extraDaneX,
			this.y3z1_l2 * size + extraDaneY);
		// z1_l2 - lewa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l3 * size + extraDaneX,
			this.y1z1_l3 * size + extraDaneY);
		bezierVertex(this.x1z1_l3 * size + extraDaneX,
			this.y1z1_l3 * size + extraDaneY,
			this.x2z1_l3 * size + extraDaneX,
			this.y2z1_l3 * size + extraDaneY,
			this.x3z1_l3 * size + extraDaneX,
			this.y3z1_l3 * size + extraDaneY);
		// z1_l3 - lewa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_l4 * size + extraDaneX,
			this.y1z1_l4 * size + extraDaneY);
		bezierVertex(this.x1z1_l4 * size + extraDaneX,
			this.y1z1_l4 * size + extraDaneY,
			this.x2z1_l4 * size + extraDaneX,
			this.y2z1_l4 * size + extraDaneY,
			this.x3z1_l4 * size + extraDaneX,
			this.y3z1_l4 * size + extraDaneY);
		// z1_l4 - lewa4 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p1 * size + extraDaneX,
			this.y1z1_p1 * size + extraDaneY);
		bezierVertex(this.x1z1_p1 * size + extraDaneX,
			this.y1z1_p1 * size + extraDaneY,
			this.x2z1_p1 * size + extraDaneX,
			this.y2z1_p1 * size + extraDaneY,
			this.x3z1_p1 * size + extraDaneX,
			this.y3z1_p1 * size + extraDaneY);
		// z1_p1 - prawa1 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p2 * size + extraDaneX,
			this.y1z1_p2 * size + extraDaneY);
		bezierVertex(this.x1z1_p2 * size + extraDaneX,
			this.y1z1_p2 * size + extraDaneY,
			this.x2z1_p2 * size + extraDaneX,
			this.y2z1_p2 * size + extraDaneY,
			this.x3z1_p2 * size + extraDaneX,
			this.y3z1_p2 * size + extraDaneY);
		// z1_p2 - prawa2 - mała żyłka - żyły głównej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z1_p3 * size + extraDaneX,
			this.y1z1_p3 * size + extraDaneY);
		bezierVertex(this.x1z1_p3 * size + extraDaneX,
			this.y1z1_p3 * size + extraDaneY,
			this.x2z1_p3 * size + extraDaneX,
			this.y2z1_p3 * size + extraDaneY,
			this.x3z1_p3 * size + extraDaneX,
			this.y3z1_p3 * size + extraDaneY);
		// z1_p3 - prawa3 - mała żyłka - żyły głównej - liczone od góry
		endShape();
		// z1 - żyła główna - end

		// z2 - żyła lewa górna - start			
		beginShape();
		vertex(this.x1z2 * size + extraDaneX,
			this.y1z2 * size + extraDaneY);
		bezierVertex(this.x1z2 * size + extraDaneX,
			this.y1z2 * size + extraDaneY,
			this.x2z2 * size + extraDaneX,
			this.y2z2 * size + extraDaneY,
			this.x3z2 * size + extraDaneX,
			this.y3z2 * size + extraDaneY);
		// z2 - żyła lewa górna
		endShape();

		beginShape();
		vertex(this.x1z2_p1 * size + extraDaneX,
			this.y1z2_p1 * size + extraDaneY);
		bezierVertex(this.x1z2_p1 * size + extraDaneX,
			this.y1z2_p1 * size + extraDaneY,
			this.x2z2_p1 * size + extraDaneX,
			this.y2z2_p1 * size + extraDaneY,
			this.x3z2_p1 * size + extraDaneX,
			this.y3z2_p1 * size + extraDaneY);
		// z2_p1 - prawa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p2 * size + extraDaneX,
			this.y1z2_p2 * size + extraDaneY);
		bezierVertex(this.x1z2_p2 * size + extraDaneX,
			this.y1z2_p2 * size + extraDaneY,
			this.x2z2_p2 * size + extraDaneX,
			this.y2z2_p2 * size + extraDaneY,
			this.x3z2_p2 * size + extraDaneX,
			this.y3z2_p2 * size + extraDaneY);
		// z2_p2 - prawa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_p3 * size + extraDaneX,
			this.y1z2_p3 * size + extraDaneY);
		bezierVertex(this.x1z2_p3 * size + extraDaneX,
			this.y1z2_p3 * size + extraDaneY,
			this.x2z2_p3 * size + extraDaneX,
			this.y2z2_p3 * size + extraDaneY,
			this.x3z2_p3 * size + extraDaneX,
			this.y3z2_p3 * size + extraDaneY);
		// z2_p3 - prawa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l1 * size + extraDaneX,
			this.y1z2_l1 * size + extraDaneY);
		bezierVertex(this.x1z2_l1 * size + extraDaneX,
			this.y1z2_l1 * size + extraDaneY,
			this.x2z2_l1 * size + extraDaneX,
			this.y2z2_l1 * size + extraDaneY,
			this.x3z2_l1 * size + extraDaneX,
			this.y3z2_l1 * size + extraDaneY);
		// z2_l1 - lewa1 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l2 * size + extraDaneX,
			this.y1z2_l2 * size + extraDaneY);
		bezierVertex(this.x1z2_l2 * size + extraDaneX,
			this.y1z2_l2 * size + extraDaneY,
			this.x2z2_l2 * size + extraDaneX,
			this.y2z2_l2 * size + extraDaneY,
			this.x3z2_l2 * size + extraDaneX,
			this.y3z2_l2 * size + extraDaneY);
		// z2_l2 - lewa2 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z2_l3 * size + extraDaneX,
			this.y1z2_l3 * size + extraDaneY);
		bezierVertex(this.x1z2_l3 * size + extraDaneX,
			this.y1z2_l3 * size + extraDaneY,
			this.x2z2_l3 * size + extraDaneX,
			this.y2z2_l3 * size + extraDaneY,
			this.x3z2_l3 * size + extraDaneX,
			this.y3z2_l3 * size + extraDaneY);
		// z2_l3 - lewa3 - mała żyłka - żyły lewej górnej - liczone od góry
		endShape();
		// z2 - żyła lewa górna - end	

		// z3 - żyła lewa dolna - start			
		beginShape();
		vertex(this.x1z3 * size + extraDaneX,
			this.y1z3 * size + extraDaneY);
		bezierVertex(this.x1z3 * size + extraDaneX,
			this.y1z3 * size + extraDaneY,
			this.x2z3 * size + extraDaneX,
			this.y2z3 * size + extraDaneY,
			this.x3z3 * size + extraDaneX,
			this.y3z3 * size + extraDaneY);
		// z3 - żyła lewa dolna
		endShape();

		beginShape();
		vertex(this.x1z3_l1 * size + extraDaneX,
			this.y1z3_l1 * size + extraDaneY);
		bezierVertex(this.x1z3_l1 * size + extraDaneX,
			this.y1z3_l1 * size + extraDaneY,
			this.x2z3_l1 * size + extraDaneX,
			this.y2z3_l1 * size + extraDaneY,
			this.x3z3_l1 * size + extraDaneX,
			this.y3z3_l1 * size + extraDaneY);
		// z3_l1 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_l2 * size + extraDaneX,
			this.y1z3_l2 * size + extraDaneY);
		bezierVertex(this.x1z3_l2 * size + extraDaneX,
			this.y1z3_l2 * size + extraDaneY,
			this.x2z3_l2 * size + extraDaneX,
			this.y2z3_l2 * size + extraDaneY,
			this.x3z3_l2 * size + extraDaneX,
			this.y3z3_l2 * size + extraDaneY);
		// z3_l2 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p1 * size + extraDaneX,
			this.y1z3_p1 * size + extraDaneY);
		bezierVertex(this.x1z3_p1 * size + extraDaneX,
			this.y1z3_p1 * size + extraDaneY,
			this.x2z3_p1 * size + extraDaneX,
			this.y2z3_p1 * size + extraDaneY,
			this.x3z3_p1 * size + extraDaneX,
			this.y3z3_p1 * size + extraDaneY);
		// z3_p1 - prawa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z3_p2 * size + extraDaneX,
			this.y1z3_p2 * size + extraDaneY);
		bezierVertex(this.x1z3_p2 * size + extraDaneX,
			this.y1z3_p2 * size + extraDaneY,
			this.x2z3_p2 * size + extraDaneX,
			this.y2z3_p2 * size + extraDaneY,
			this.x3z3_p2 * size + extraDaneX,
			this.y3z3_p2 * size + extraDaneY);
		// z3_p2 - prawa2 - mała żyłka - żyły lewej dolnej - liczone od góry
		endShape();
		// z3 - żyła lewa dolna - end		

		// z4 - żyła prawa górna - start			
		beginShape();
		vertex(this.x1z4 * size + extraDaneX,
			this.y1z4 * size + extraDaneY);
		bezierVertex(this.x1z4 * size + extraDaneX,
			this.y1z4 * size + extraDaneY,
			this.x2z4 * size + extraDaneX,
			this.y2z4 * size + extraDaneY,
			this.x3z4 * size + extraDaneX,
			this.y3z4 * size + extraDaneY);
		// z4 - żyła prawa górna
		endShape();

		beginShape();
		vertex(this.x1z4_p1 * size + extraDaneX,
			this.y1z4_p1 * size + extraDaneY);
		bezierVertex(this.x1z4_p1 * size + extraDaneX,
			this.y1z4_p1 * size + extraDaneY,
			this.x2z4_p1 * size + extraDaneX,
			this.y2z4_p1 * size + extraDaneY,
			this.x3z4_p1 * size + extraDaneX,
			this.y3z4_p1 * size + extraDaneY);
		// z4_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p2 * size + extraDaneX,
			this.y1z4_p2 * size + extraDaneY);
		bezierVertex(this.x1z4_p2 * size + extraDaneX,
			this.y1z4_p2 * size + extraDaneY,
			this.x2z4_p2 * size + extraDaneX,
			this.y2z4_p2 * size + extraDaneY,
			this.x3z4_p2 * size + extraDaneX,
			this.y3z4_p2 * size + extraDaneY);
		// z4_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_p3 * size + extraDaneX,
			this.y1z4_p3 * size + extraDaneY);
		bezierVertex(this.x1z4_p3 * size + extraDaneX,
			this.y1z4_p3 * size + extraDaneY,
			this.x2z4_p3 * size + extraDaneX,
			this.y2z4_p3 * size + extraDaneY,
			this.x3z4_p3 * size + extraDaneX,
			this.y3z4_p3 * size + extraDaneY);
		// z4_p3 - prawa3 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l1 * size + extraDaneX,
			this.y1z4_l1 * size + extraDaneY);
		bezierVertex(this.x1z4_l1 * size + extraDaneX,
			this.y1z4_l1 * size + extraDaneY,
			this.x2z4_l1 * size + extraDaneX,
			this.y2z4_l1 * size + extraDaneY,
			this.x3z4_l1 * size + extraDaneX,
			this.y3z4_l1 * size + extraDaneY);
		// z4_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z4_l2 * size + extraDaneX,
			this.y1z4_l2 * size + extraDaneY);
		bezierVertex(this.x1z4_l2 * size + extraDaneX,
			this.y1z4_l2 * size + extraDaneY,
			this.x2z4_l2 * size + extraDaneX,
			this.y2z4_l2 * size + extraDaneY,
			this.x3z4_l2 * size + extraDaneX,
			this.y3z4_l2 * size + extraDaneY);
		// z4_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z4 - żyła prawa górna - end			

		// z5 - żyła prawa dolna - start			
		beginShape();
		vertex(this.x1z5 * size + extraDaneX,
			this.y1z5 * size + extraDaneY);
		bezierVertex(this.x1z5 * size + extraDaneX,
			this.y1z5 * size + extraDaneY,
			this.x2z5 * size + extraDaneX,
			this.y2z5 * size + extraDaneY,
			this.x3z5 * size + extraDaneX,
			this.y3z5 * size + extraDaneY);
		// z5 - żyła prawa dolna
		endShape();

		beginShape();
		vertex(this.x1z5_p1 * size + extraDaneX,
			this.y1z5_p1 * size + extraDaneY);
		bezierVertex(this.x1z5_p1 * size + extraDaneX,
			this.y1z5_p1 * size + extraDaneY,
			this.x2z5_p1 * size + extraDaneX,
			this.y2z5_p1 * size + extraDaneY,
			this.x3z5_p1 * size + extraDaneX,
			this.y3z5_p1 * size + extraDaneY);
		// z5_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_p2 * size + extraDaneX,
			this.y1z5_p2 * size + extraDaneY);
		bezierVertex(this.x1z5_p2 * size + extraDaneX,
			this.y1z5_p2 * size + extraDaneY,
			this.x2z5_p2 * size + extraDaneX,
			this.y2z5_p2 * size + extraDaneY,
			this.x3z5_p2 * size + extraDaneX,
			this.y3z5_p2 * size + extraDaneY);
		// z5_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l1 * size + extraDaneX,
			this.y1z5_l1 * size + extraDaneY);
		bezierVertex(this.x1z5_l1 * size + extraDaneX,
			this.y1z5_l1 * size + extraDaneY,
			this.x2z5_l1 * size + extraDaneX,
			this.y2z5_l1 * size + extraDaneY,
			this.x3z5_l1 * size + extraDaneX,
			this.y3z5_l1 * size + extraDaneY);
		// z5_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();

		beginShape();
		vertex(this.x1z5_l2 * size + extraDaneX,
			this.y1z5_l2 * size + extraDaneY);
		bezierVertex(this.x1z5_l2 * size + extraDaneX,
			this.y1z5_l2 * size + extraDaneY,
			this.x2z5_l2 * size + extraDaneX,
			this.y2z5_l2 * size + extraDaneY,
			this.x3z5_l2 * size + extraDaneX,
			this.y3z5_l2 * size + extraDaneY);
		// z5_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		endShape();
		// z5 - żyła prawa dolna - end			
		// żyłki liścia - end


	}

	moveLeaf() {
		// zX, zY zmiana położenia liści, dzięki temu liście spadają
		let zX = random(-2, 14);
		let zY = random(-4, 1);

		// kształt liścia - start
		this.x1l1 += zX;
		this.y1l1 += zY;
		this.x2l1 += zX;
		this.y2l1 += zY;
		this.x3l1 += zX;
		this.y3l1 += zY;

		this.x2l2 += zX;
		this.y2l2 += zY;
		this.x3l2 += zX;
		this.y3l2 += zY;

		this.x2l3 += zX;
		this.y2l3 += zY;
		this.x3l3 += zX;
		this.y3l3 += zY;

		this.x2l4 += zX;
		this.y2l4 += zY;
		this.x3l4 += zX;
		this.y3l4 += zY;

		this.x2l5 += zX;
		this.y2l5 += zY;
		this.x3l5 += zX;
		this.y3l5 += zY;

		this.x2l6 += zX;
		this.y2l6 += zY;
		this.x3l6 += zX;
		this.y3l6 += zY;

		this.x2l7 += zX;
		this.y2l7 += zY;
		this.x3l7 += zX;
		this.y3l7 += zY;

		this.x2l8 += zX;
		this.y2l8 += zY;
		this.x3l8 += zX;
		this.y3l8 += zY;

		this.x2l9 += zX;
		this.y2l9 += zY;
		this.x3l9 += zX;
		this.y3l9 += zY;

		this.x2l10 += zX; // l10 + l11
		this.y2l10 += zY;
		this.x3l10 += zX;
		this.y3l10 += zY;

		this.x2l12 += zX;
		this.y2l12 += zY;
		this.x3l12 += zX;
		this.y3l12 += zY;

		this.x2l13 += zX;
		this.y2l13 += zY;
		this.x3l13 += zX;
		this.y3l13 += zY;

		this.x2l14 += zX;
		this.y2l14 += zY;
		this.x3l14 += zX;
		this.y3l14 += zY;
		// prawa strona - rysujemy od dołu do góry - nie zmieniamy kierunku rysowania - połowa kształtu liścia -> na dole
		this.x2l15 += zX;
		this.y2l15 += zY;
		this.x3l15 += zX;
		this.y3l15 += zY;

		this.x2l16 += zX;
		this.y2l16 += zY;
		this.x3l16 += zX;
		this.y3l16 += zY;

		this.x2l17 += zX;
		this.y2l17 += zY;
		this.x3l17 += zX;
		this.y3l17 += zY;

		this.x2l18 += zX;
		this.y2l18 += zY;
		this.x3l18 += zX;
		this.y3l18 += zY;

		this.x2l19 += zX;
		this.y2l19 += zY;
		this.x3l19 += zX;
		this.y3l19 += zY;

		this.x2l20 += zX;
		this.y2l20 += zY;
		this.x3l20 += zX;
		this.y3l20 += zY;

		this.x2l21 += zX;
		this.y2l21 += zY;
		this.x3l21 += zX;
		this.y3l21 += zY;

		this.x2l22 += zX;
		this.y2l22 += zY;
		this.x3l22 += zX;
		this.y3l22 += zY;

		this.x2l23 += zX;
		this.y2l23 += zY;
		this.x3l23 += zX;
		this.y3l23 += zY;

		this.x2l24 += zX;
		this.y2l24 += zY;
		this.x3l24 += zX;
		this.y3l24 += zY;

		this.x2l25 += zX;
		this.y2l25 += zY;
		this.x3l25 += zX;
		this.y3l25 += zY;

		this.x2l26 += zX;
		this.y2l26 += zY;
		this.x3l26 += zX;
		this.y3l26 += zY;
		// kształt liścia - end

		// vein - start
		// z1 żyła główna
		this.x1z1 += zX;
		this.y1z1 += zY;
		this.x2z1 += zX;
		this.y2z1 += zY;
		this.x3z1 += zX;
		this.y3z1 += zY;

		// z1_l1 - lewa1 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l1 += zX;
		this.y1z1_l1 += zY;
		this.x2z1_l1 += zX;
		this.y2z1_l1 += zY;
		this.x3z1_l1 += zX;
		this.y3z1_l1 += zY;

		// z1_l2 - lewa2 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l2 += zX;
		this.y1z1_l2 += zY;
		this.x2z1_l2 += zX;
		this.y2z1_l2 += zY;
		this.x3z1_l2 += zX;
		this.y3z1_l2 += zY;

		// z1_l3 - lewa3 - mała żyłka - żyły głównej - liczone od góry	
		this.x1z1_l3 += zX;
		this.y1z1_l3 += zY;
		this.x2z1_l3 += zX;
		this.y2z1_l3 += zY;
		this.x3z1_l3 += zX;
		this.y3z1_l3 += zY;
		// z1_l4 - lewa4 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_l4 += zX;
		this.y1z1_l4 += zY;
		this.x2z1_l4 += zX;
		this.y2z1_l4 += zY;
		this.x3z1_l4 += zX;
		this.y3z1_l4 += zY;

		// z1_p1 - prawa1 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p1 += zX;
		this.y1z1_p1 += zY;
		this.x2z1_p1 += zX;
		this.y2z1_p1 += zY;
		this.x3z1_p1 += zX;
		this.y3z1_p1 += zY;

		// z1_p2 - prawa2 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p2 += zX;
		this.y1z1_p2 += zY;
		this.x2z1_p2 += zX;
		this.y2z1_p2 += zY;
		this.x3z1_p2 += zX;
		this.y3z1_p2 += zY;

		// z1_p3 - prawa3 - mała żyłka - żyły głównej - liczone od góry
		this.x1z1_p3 += zX;
		this.y1z1_p3 += zY;
		this.x2z1_p3 += zX;
		this.y2z1_p3 += zY;
		this.x3z1_p3 += zX;
		this.y3z1_p3 += zY;

		// z2 - żyła lewa górna
		this.x1z2 += zX;
		this.y1z2 += zY;
		this.x2z2 += zX;
		this.y2z2 += zY;
		this.x3z2 += zX;
		this.y3z2 += zY;

		// z2_p1 - prawa1 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p1 += zX;
		this.y1z2_p1 += zY;
		this.x2z2_p1 += zX;
		this.y2z2_p1 += zY;
		this.x3z2_p1 += zX;
		this.y3z2_p1 += zY;

		// z2_p2 - prawa2 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p2 += zX;
		this.y1z2_p2 += zY;
		this.x2z2_p2 += zX;
		this.y2z2_p2 += zY;
		this.x3z2_p2 += zX;
		this.y3z2_p2 += zY;

		// z2_p3 - prawa3 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_p3 += zX;
		this.y1z2_p3 += zY;
		this.x2z2_p3 += zX;
		this.y2z2_p3 += zY;
		this.x3z2_p3 += zX;
		this.y3z2_p3 += zY;
		// z2_l1 - lewa1 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l1 += zX;
		this.y1z2_l1 += zY;
		this.x2z2_l1 += zX;
		this.y2z2_l1 += zY;
		this.x3z2_l1 += zX;
		this.y3z2_l1 += zY;

		// z2_l2 - lewa2 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l2 += zX;
		this.y1z2_l2 += zY;
		this.x2z2_l2 += zX;
		this.y2z2_l2 += zY;
		this.x3z2_l2 += zX;
		this.y3z2_l2 += zY;

		// z2_l3 - lewa3 - mała żyłka - żyły lewej górnej - liczone od góry
		this.x1z2_l3 += zX;
		this.y1z2_l3 += zY;
		this.x2z2_l3 += zX;
		this.y2z2_l3 += zY;
		this.x3z2_l3 += zX;
		this.y3z2_l3 += zY;

		// z3 - żyła lewa dolna
		this.x1z3 += zX;
		this.y1z3 += zY;
		this.x2z3 += zX;
		this.y2z3 += zY;
		this.x3z3 += zX;
		this.y3z3 += zY;

		// z3_l1 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_l1 += zX;
		this.y1z3_l1 += zY;
		this.x2z3_l1 += zX;
		this.y2z3_l1 += zY;
		this.x3z3_l1 += zX;
		this.y3z3_l1 += zY;

		// z3_l2 - lewa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_l2 += zX;
		this.y1z3_l2 += zY;
		this.x2z3_l2 += zX;
		this.y2z3_l2 += zY;
		this.x3z3_l2 += zX;
		this.y3z3_l2 += zY;

		// z3_p1 - prawa1 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_p1 += zX;
		this.y1z3_p1 += zY;
		this.x2z3_p1 += zX;
		this.y2z3_p1 += zY;
		this.x3z3_p1 += zX;
		this.y3z3_p1 += zY;

		// z3_p2 - prawa2 - mała żyłka - żyły lewej dolnej - liczone od góry
		this.x1z3_p2 += zX;
		this.y1z3_p2 += zY;
		this.x2z3_p2 += zX;
		this.y2z3_p2 += zY;
		this.x3z3_p2 += zX;
		this.y3z3_p2 += zY;

		// z4 - żyła prawa górna
		this.x1z4 += zX;
		this.y1z4 += zY;
		this.x2z4 += zX;
		this.y2z4 += zY;
		this.x3z4 += zX;
		this.y3z4 += zY;

		// z4_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p1 += zX;
		this.y1z4_p1 += zY;
		this.x2z4_p1 += zX;
		this.y2z4_p1 += zY;
		this.x3z4_p1 += zX;
		this.y3z4_p1 += zY;

		// z4_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p2 += zX;
		this.y1z4_p2 += zY;
		this.x2z4_p2 += zX;
		this.y2z4_p2 += zY;
		this.x3z4_p2 += zX;
		this.y3z4_p2 += zY;

		// z4_p3 - prawa3 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_p3 += zX;
		this.y1z4_p3 += zY;
		this.x2z4_p3 += zX;
		this.y2z4_p3 += zY;
		this.x3z4_p3 += zX;
		this.y3z4_p3 += zY;

		// z4_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z4_l1 += zX;
		this.y1z4_l1 += zY;
		this.x2z4_l1 += zX;
		this.y2z4_l1 += zY;
		this.x3z4_l1 += zX;
		this.y3z4_l1 += zY;

		// z4_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od gór
		this.x1z4_l2 += zX;
		this.y1z4_l2 += zY;
		this.x2z4_l2 += zX;
		this.y2z4_l2 += zY;
		this.x3z4_l2 += zX;
		this.y3z4_l2 += zY;

		// z5 - żyła prawa dolna
		this.x1z5 += zX;
		this.y1z5 += zY;
		this.x2z5 += zX;
		this.y2z5 += zY;
		this.x3z5 += zX;
		this.y3z5 += zY;

		// z5_p1 - prawa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_p1 += zX;
		this.y1z5_p1 += zY;
		this.x2z5_p1 += zX;
		this.y2z5_p1 += zY;
		this.x3z5_p1 += zX;
		this.y3z5_p1 += zY;

		// z5_p2 - prawa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_p2 += zX;
		this.y1z5_p2 += zY;
		this.x2z5_p2 += zX;
		this.y2z5_p2 += zY;
		this.x3z5_p2 += zX;
		this.y3z5_p2 += zY;

		// z5_l1 - lewa1 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_l1 += zX;
		this.y1z5_l1 += zY;
		this.x2z5_l1 += zX;
		this.y2z5_l1 += zY;
		this.x3z5_l1 += zX;
		this.y3z5_l1 += zY;

		// z5_l2 - lewa2 - mała żyłka - żyły prawej górnej - liczone od góry
		this.x1z5_l2 += zX;
		this.y1z5_l2 += zY;
		this.x2z5_l2 += zX;
		this.y2z5_l2 += zY;
		this.x3z5_l2 += zX;
		this.y3z5_l2 += zY;
		// vein - end

	}
	// suwa spadające liście, jeżeli znajdą się poza canvas - start
	finished() {
		return this.x1t1 > heightCanvas;
	}
	// suwa spadające liście, jeżeli znajdą się poza canvas - start

}
// LEAF KLASA - FINISH

// MOUNTAIN KLASA - START
class Mountain {

	constructor() {

		this.strokeColor = "#202020";
		// kolory gór - skały - start
		let mountainColors = ["#808080", "#606060", "#404040", "#4C4B4F"];
		let randomColorMountainIndex1 = floor(random(mountainColors.length));
		let randomColorMountainIndex2 = floor(random(mountainColors.length));
		let randomColorMountainIndex3 = floor(random(mountainColors.length));
		let randomColorMountainIndex4 = floor(random(mountainColors.length));
		//kolory, dla każdego z putnktów krzywej beziera
		this.mountainColor1 = mountainColors[randomColorMountainIndex1];
		this.mountainColor2 = mountainColors[randomColorMountainIndex2];
		this.mountainColor3 = mountainColors[randomColorMountainIndex3];
		this.mountainColor4 = mountainColors[randomColorMountainIndex4];
		// kolory gór skały - end	

		// kolory gór - trawa - start		
		let mountainColorsGreen = ["#244712", "#063008", "#374A0A", "#857B3A"];
		let randomColorGreenMountainIndex1 = floor(random(mountainColorsGreen.length));
		let randomColorGreenMountainIndex2 = floor(random(mountainColorsGreen.length));
		let randomColorGreenMountainIndex3 = floor(random(mountainColorsGreen.length));
		let randomColorGreenMountainIndex4 = floor(random(mountainColorsGreen.length));
		let randomColorGreenMountainIndex5 = floor(random(mountainColorsGreen.length));
		let randomColorGreenMountainIndex6 = floor(random(mountainColorsGreen.length));
		//kolory, dla każdego z putnktów krzywej beziera
		this.mountainColorGreen1 = mountainColorsGreen[randomColorGreenMountainIndex1];
		this.mountainColorGreen2 = mountainColorsGreen[randomColorGreenMountainIndex2];
		this.mountainColorGreen3 = mountainColorsGreen[randomColorGreenMountainIndex3];
		this.mountainColorGreen4 = mountainColorsGreen[randomColorGreenMountainIndex4];
		this.mountainColorGreen5 = mountainColorsGreen[randomColorGreenMountainIndex5];
		this.mountainColorGreen6 = mountainColorsGreen[randomColorGreenMountainIndex6];
		// kolory gór - trawa - end			


		// kształt góry - s4 - start		
		this.s4l3x1 = s4l3x1;
		this.s4l3y1 = s4l3y1;
		this.s4l3x2 = s4l3x2;
		this.s4l3y2 = s4l3y2;
		this.s4l3x3 = s4l3x3;
		this.s4l3y3 = s4l3y3;

		this.s4l4x1 = s4l4x1;
		this.s4l4y1 = s4l4y1;
		this.s4l4x2 = s4l4x2;
		this.s4l4y2 = s4l4y2;
		this.s4l4x3 = s4l4x3;
		this.s4l4y3 = s4l4y3;

		this.s4l5bx1 = s4l5bx1;
		this.s4l5by1 = s4l5by1;
		this.s4l5bx2 = s4l5bx2;
		this.s4l5by2 = s4l5by2;
		this.s4l5bx3 = s4l5bx3;
		this.s4l5by3 = s4l5by3;

		this.s4l6ax1 = s4l6ax1;
		this.s4l6ay1 = s4l6ay1;
		this.s4l6ax2 = s4l6ax2;
		this.s4l6ay2 = s4l6ay2;
		this.s4l6ax3 = s4l6ax3;
		this.s4l6ay3 = s4l6ay3;

		this.s4l7x1 = s4l7x1;
		this.s4l7y1 = s4l7y1;
		this.s4l7x2 = s4l7x2;
		this.s4l7y2 = s4l7y2;
		this.s4l7x3 = s4l7x3;
		this.s4l7y3 = s4l7y3;

		this.s4l8x1 = s4l8x1;
		this.s4l8y1 = s4l8y1;
		this.s4l8x2 = s4l8x2;
		this.s4l8y2 = s4l8y2;
		this.s4l8x3 = s4l8x3;
		this.s4l8y3 = s4l8y3;

		this.s4l9x1 = s4l9x1;
		this.s4l9y1 = s4l9y1;
		this.s4l9x2 = s4l9x2;
		this.s4l9y2 = s4l9y2;
		this.s4l9x3 = s4l9x3;
		this.s4l9y3 = s4l9y3;

		this.s4l10x1 = s4l10x1;
		this.s4l10y1 = s4l10y1;
		this.s4l10x2 = s4l10x2;
		this.s4l10y2 = s4l10y2;
		this.s4l10x3 = s4l10x3;
		this.s4l10y3 = s4l10y3;

		this.s4l11x1 = s4l11x1;
		this.s4l11y1 = s4l11y1;
		this.s4l11x2 = s4l11x2;
		this.s4l11y2 = s4l11y2;
		this.s4l11x3 = s4l11x3;
		this.s4l11y3 = s4l11y3;

		// prawa - pionowa		
		this.s4er1x1 = s4er1x1;
		this.s4er1y1 = s4er1y1;
		this.s4er1x2 = s4er1x2;
		this.s4er1y2 = s4er1y2;
		this.s4er1x3 = s4er1x3;
		this.s4er1y3 = s4er1y3;
		// poziomo		
		this.s4eh1x1 = s4eh1x1;
		this.s4eh1y1 = s4eh1y1;
		this.s4eh1x2 = s4eh1x2;
		this.s4eh1y2 = s4eh1y2;
		this.s4eh1x3 = s4eh1x3;
		this.s4eh1y3 = s4eh1y3;
		// lewa - pionowa		
		this.s4el1x1 = s4el1x1;
		this.s4el1y1 = s4el1y1;
		this.s4el1x2 = s4el1x2;
		this.s4el1y2 = s4el1y2;
		this.s4el1x3 = s4el1x3;
		this.s4el1y3 = s4el1y3;
		// linie - kształt góry - s4 - end

		// linie - kształt góry - s4 - start
		this.s4l6bx1 = s4l6bx1;
		this.s4l6by1 = s4l6by1;
		this.s4l6bx2 = s4l6bx2;
		this.s4l6by2 = s4l6by2;
		this.s4l6bx3 = s4l6bx3;
		this.s4l6by3 = s4l6by3;

		this.s4l5ax1 = s4l5ax1;
		this.s4l5ay1 = s4l5ay1;
		this.s4l5ax2 = s4l5ax2;
		this.s4l5ay2 = s4l5ay2;
		this.s4l5ax3 = s4l5ax3;
		this.s4l5ay3 = s4l5ay3;
		// linie - kształt góry - s4 - end	

		// kształt góry - s1 - start	

		this.s1l26x1 = s1l26x1;
		this.s1l26y1 = s1l26y1;
		this.s1l26x2 = s1l26x2;
		this.s1l26y2 = s1l26y2;
		this.s1l26x3 = s1l26x3;
		this.s1l26y3 = s1l26y3;

		this.s1l27x1 = s1l27x1;
		this.s1l27y1 = s1l27y1;
		this.s1l27x2 = s1l27x2;
		this.s1l27y2 = s1l27y2;
		this.s1l27x3 = s1l27x3;
		this.s1l27y3 = s1l27y3;

		this.s1l28x1 = s1l28x1;
		this.s1l28y1 = s1l28y1;
		this.s1l28x2 = s1l28x2;
		this.s1l28y2 = s1l28y2;
		this.s1l28x3 = s1l28x3;
		this.s1l28y3 = s1l28y3;

		this.s1l29x1 = s1l29x1;
		this.s1l29y1 = s1l29y1;
		this.s1l29x2 = s1l29x2;
		this.s1l29y2 = s1l29y2;
		this.s1l29x3 = s1l29x3;
		this.s1l29y3 = s1l29y3;

		this.s1l30x1 = s1l30x1;
		this.s1l30y1 = s1l30y1;
		this.s1l30x2 = s1l30x2;
		this.s1l30y2 = s1l30y2;
		this.s1l30x3 = s1l30x3;
		this.s1l30y3 = s1l30y3;

		this.s1l31x1 = s1l31x1;
		this.s1l31y1 = s1l31y1;
		this.s1l31x2 = s1l31x2;
		this.s1l31y2 = s1l31y2;
		this.s1l31x3 = s1l31x3;
		this.s1l31y3 = s1l31y3;

		this.s1l32ax1 = s1l32ax1;
		this.s1l32ay1 = s1l32ay1;
		this.s1l32ax2 = s1l32ax2;
		this.s1l32ay2 = s1l32ay2;
		this.s1l32ax3 = s1l32ax3;
		this.s1l32ay3 = s1l32ay3;

		this.s1l33x1 = s1l33x1;
		this.s1l33y1 = s1l33y1;
		this.s1l33x2 = s1l33x2;
		this.s1l33y2 = s1l33y2;
		this.s1l33x3 = s1l33x3;
		this.s1l33y3 = s1l33y3;

		this.s1l34ax1 = s1l34ax1;
		this.s1l34ay1 = s1l34ay1;
		this.s1l34ax2 = s1l34ax2;
		this.s1l34ay2 = s1l34ay2;
		this.s1l34ax3 = s1l34ax3;
		this.s1l34ay3 = s1l34ay3;

		this.s1l34bx1 = s1l34bx1;
		this.s1l34by1 = s1l34by1;
		this.s1l34bx2 = s1l34bx2;
		this.s1l34by2 = s1l34by2;
		this.s1l34bx3 = s1l34bx3;
		this.s1l34by3 = s1l34by3;

		// prawa - pionowa		
		this.s1er1x1 = s1er1x1;
		this.s1er1y1 = s1er1y1;
		this.s1er1x2 = s1er1x2;
		this.s1er1y2 = s1er1y2;
		this.s1er1x3 = s1er1x3;
		this.s1er1y3 = s1er1y3;
		// poziomo		
		this.s1eh1x1 = s1eh1x1;
		this.s1eh1y1 = s1eh1y1;
		this.s1eh1x2 = s1eh1x2;
		this.s1eh1y2 = s1eh1y2;
		this.s1eh1x3 = s1eh1x3;
		this.s1eh1y3 = s1eh1y3;
		// lewa - pionowa		
		this.s1el1x1 = s1el1x1;
		this.s1el1y1 = s1el1y1;
		this.s1el1x2 = s1el1x2;
		this.s1el1y2 = s1el1y2;
		this.s1el1x3 = s1el1x3;
		this.s1el1y3 = s1el1y3;
		// kształt góry - s1 - end

		// linie - kształt góry - s1 - start
		this.s1l39x1 = s1l39x1;
		this.s1l39y1 = s1l39y1;
		this.s1l39x2 = s1l39x2;
		this.s1l39y2 = s1l39y2;
		this.s1l39x3 = s1l39x3;
		this.s1l39y3 = s1l39y3;

		this.s1l38ax1 = s1l38ax1;
		this.s1l38ay1 = s1l38ay1;
		this.s1l38ax2 = s1l38ax2;
		this.s1l38ay2 = s1l38ay2;
		this.s1l38ax3 = s1l38ax3;
		this.s1l38ay3 = s1l38ay3;

		this.s1l38bx1 = s1l38bx1;
		this.s1l38by1 = s1l38by1;
		this.s1l38bx2 = s1l38bx2;
		this.s1l38by2 = s1l38by2;
		this.s1l38bx3 = s1l38bx3;
		this.s1l38by3 = s1l38by3;

		this.s1l41x1 = s1l41x1;
		this.s1l41y1 = s1l41y1;
		this.s1l41x2 = s1l41x2;
		this.s1l41y2 = s1l41y2;
		this.s1l41x3 = s1l41x3;
		this.s1l41y3 = s1l41y3;

		this.s1l40x1 = s1l40x1;
		this.s1l40y1 = s1l40y1;
		this.s1l40x2 = s1l40x2;
		this.s1l40y2 = s1l40y2;
		this.s1l40x3 = s1l40x3;
		this.s1l40y3 = s1l40y3;

		this.s1l37x1 = s1l37x1;
		this.s1l37y1 = s1l37y1;
		this.s1l37x2 = s1l37x2;
		this.s1l37y2 = s1l37y2;
		this.s1l37x3 = s1l37x3;
		this.s1l37y3 = s1l37y3;

		this.s1l36x1 = s1l36x1;
		this.s1l36y1 = s1l36y1;
		this.s1l36x2 = s1l36x2;
		this.s1l36y2 = s1l36y2;
		this.s1l36x3 = s1l36x3;
		this.s1l36y3 = s1l36y3;

		this.s1l35x1 = s1l35x1;
		this.s1l35y1 = s1l35y1;
		this.s1l35x2 = s1l35x2;
		this.s1l35y2 = s1l35y2;
		this.s1l35x3 = s1l35x3;
		this.s1l35y3 = s1l35y3;

		this.s1l32bx1 = s1l32bx1;
		this.s1l32by1 = s1l32by1;
		this.s1l32bx2 = s1l32bx2;
		this.s1l32by2 = s1l32by2;
		this.s1l32bx3 = s1l32bx3;
		this.s1l32by3 = s1l32by3;
		// linie - kształt góry - s1 - end		

		//kształt góry - s3 - start			
		this.s3l12ax1 = s3l12ax1;
		this.s3l12ay1 = s3l12ay1;
		this.s3l12ax2 = s3l12ax2;
		this.s3l12ay2 = s3l12ay2;
		this.s3l12ax3 = s3l12ax3;
		this.s3l12ay3 = s3l12ay3;

		this.s3l12bx1 = s3l12bx1;
		this.s3l12by1 = s3l12by1;
		this.s3l12bx2 = s3l12bx2;
		this.s3l12by2 = s3l12by2;
		this.s3l12bx3 = s3l12bx3;
		this.s3l12by3 = s3l12by3;

		this.s3l13x1 = s3l13x1;
		this.s3l13y1 = s3l13y1;
		this.s3l13x2 = s3l13x2;
		this.s3l13y2 = s3l13y2;
		this.s3l13x3 = s3l13x3;
		this.s3l13y3 = s3l13y3;

		this.s3l14x1 = s3l14x1;
		this.s3l14y1 = s3l14y1;
		this.s3l14x2 = s3l14x2;
		this.s3l14y2 = s3l14y2;
		this.s3l14x3 = s3l14x3;
		this.s3l14y3 = s3l14y3;

		this.s3l15x1 = s3l15x1;
		this.s3l15y1 = s3l15y1;
		this.s3l15x2 = s3l15x2;
		this.s3l15y2 = s3l15y2;
		this.s3l15x3 = s3l15x3;
		this.s3l15y3 = s3l15y3;

		this.s3l16x1 = s3l16x1;
		this.s3l16y1 = s3l16y1;
		this.s3l16x2 = s3l16x2;
		this.s3l16y2 = s3l16y2;
		this.s3l16x3 = s3l16x3;
		this.s3l16y3 = s3l16y3;

		this.s3l17ax1 = s3l17ax1;
		this.s3l17ay1 = s3l17ay1;
		this.s3l17ax2 = s3l17ax2;
		this.s3l17ay2 = s3l17ay2;
		this.s3l17ax3 = s3l17ax3;
		this.s3l17ay3 = s3l17ay3;

		this.s3l18x1 = s3l18x1;
		this.s3l18y1 = s3l18y1;
		this.s3l18x2 = s3l18x2;
		this.s3l18y2 = s3l18y2;
		this.s3l18x3 = s3l18x3;
		this.s3l18y3 = s3l18y3;

		this.s3l19x1 = s3l19x1;
		this.s3l19y1 = s3l19y1;
		this.s3l19x2 = s3l19x2;
		this.s3l19y2 = s3l19y2;
		this.s3l19x3 = s3l19x3;
		this.s3l19y3 = s3l19y3;

		this.s3l20x1 = s3l20x1;
		this.s3l20y1 = s3l20y1;
		this.s3l20x2 = s3l20x2;
		this.s3l20y2 = s3l20y2;
		this.s3l20x3 = s3l20x3;
		this.s3l20y3 = s3l20y3;

		// prawa - pionowa		
		this.s3er1x1 = s3er1x1;
		this.s3er1y1 = s3er1y1;
		this.s3er1x2 = s3er1x2;
		this.s3er1y2 = s3er1y2;
		this.s3er1x3 = s3er1x3;
		this.s3er1y3 = s3er1y3;
		// poziomo		
		this.s3eh1x1 = s3eh1x1;
		this.s3eh1y1 = s3eh1y1;
		this.s3eh1x2 = s3eh1x2;
		this.s3eh1y2 = s3eh1y2;
		this.s3eh1x3 = s3eh1x3;
		this.s3eh1y3 = s3eh1y3;
		// lewa - pionowa		
		this.s3el1x1 = s3el1x1;
		this.s3el1y1 = s3el1y1;
		this.s3el1x2 = s3el1x2;
		this.s3el1y2 = s3el1y2;
		this.s3el1x3 = s3el1x3;
		this.s3el1y3 = s3el1y3;
		//kształt góry - s3 - end

		// linie - kształt góry - s3 - start
		this.s3l62x1 = s3l62x1;
		this.s3l62y1 = s3l62y1;
		this.s3l62x2 = s3l62x2;
		this.s3l62y2 = s3l62y2;
		this.s3l62x3 = s3l62x3;
		this.s3l62y3 = s3l62y3;

		this.s3l17bx1 = s3l17bx1;
		this.s3l17by1 = s3l17by1;
		this.s3l17bx2 = s3l17bx2;
		this.s3l17by2 = s3l17by2;
		this.s3l17bx3 = s3l17bx3;
		this.s3l17by3 = s3l17by3;

		this.s3l19bx1 = s3l19bx1;
		this.s3l19by1 = s3l19by1;
		this.s3l19bx2 = s3l19bx2;
		this.s3l19by2 = s3l19by2;
		this.s3l19bx3 = s3l19bx3;
		this.s3l19by3 = s3l19by3;
		// linie - kształt góry - s3 - end			


		// kształt góry - s2 - start
		this.s2l1x1 = s2l1x1;
		this.s2l1y1 = s2l1y1;
		this.s2l1x2 = s2l1x2;
		this.s2l1y2 = s2l1y2;
		this.s2l1x3 = s2l1x3;
		this.s2l1y3 = s2l1y3;

		this.s2l2x1 = s2l2x1;
		this.s2l2y1 = s2l2y1;
		this.s2l2x2 = s2l2x2;
		this.s2l2y2 = s2l2y2;
		this.s2l2x3 = s2l2x3;
		this.s2l2y3 = s2l2y3;

		this.s2l72x1 = s2l72x1;
		this.s2l72y1 = s2l72y1;
		this.s2l72x2 = s2l72x2;
		this.s2l72y2 = s2l72y2;
		this.s2l72x3 = s2l72x3;
		this.s2l72y3 = s2l72y3;

		this.s2l71ax1 = s2l71ax1;
		this.s2l71ay1 = s2l71ay1;
		this.s2l71ax2 = s2l71ax2;
		this.s2l71ay2 = s2l71ay2;
		this.s2l71ax3 = s2l71ax3;
		this.s2l71ay3 = s2l71ay3;

		this.s2l71bx1 = s2l71bx1;
		this.s2l71by1 = s2l71by1;
		this.s2l71bx2 = s2l71bx2;
		this.s2l71by2 = s2l71by2;
		this.s2l71bx3 = s2l71bx3;
		this.s2l71by3 = s2l71by3;

		this.s2l70x1 = s2l70x1;
		this.s2l70y1 = s2l70y1;
		this.s2l70x2 = s2l70x2;
		this.s2l70y2 = s2l70y2;
		this.s2l70x3 = s2l70x3;
		this.s2l70y3 = s2l70y3;

		this.s2l68x1 = s2l68x1;
		this.s2l68y1 = s2l68y1;
		this.s2l68x2 = s2l68x2;
		this.s2l68y2 = s2l68y2;
		this.s2l68x3 = s2l68x3;
		this.s2l68y3 = s2l68y3;

		this.s2l67x1 = s2l67x1;
		this.s2l67y1 = s2l67y1;
		this.s2l67x2 = s2l67x2;
		this.s2l67y2 = s2l67y2;
		this.s2l67x3 = s2l67x3;
		this.s2l67y3 = s2l67y3;

		this.s2l63x1 = s2l63x1;
		this.s2l63y1 = s2l63y1;
		this.s2l63x2 = s2l63x2;
		this.s2l63y2 = s2l63y2;
		this.s2l63x3 = s2l63x3;
		this.s2l63y3 = s2l63y3;

		this.s2l61x1 = s2l61x1;
		this.s2l61y1 = s2l61y1;
		this.s2l61x2 = s2l61x2;
		this.s2l61y2 = s2l61y2;
		this.s2l61x3 = s2l61x3;
		this.s2l61y3 = s2l61y3;

		this.s2l60ax1 = s2l60ax1;
		this.s2l60ay1 = s2l60ay1;
		this.s2l60ax2 = s2l60ax2;
		this.s2l60ay2 = s2l60ay2;
		this.s2l60ax3 = s2l60ax3;
		this.s2l60ay3 = s2l60ay3;

		this.s2l60bx1 = s2l60bx1;
		this.s2l60by1 = s2l60by1;
		this.s2l60bx2 = s2l60bx2;
		this.s2l60by2 = s2l60by2;
		this.s2l60bx3 = s2l60bx3;
		this.s2l60by3 = s2l60by3;

		this.s2l57ax1 = s2l57ax1;
		this.s2l57ay1 = s2l57ay1;
		this.s2l57ax2 = s2l57ax2;
		this.s2l57ay2 = s2l57ay2;
		this.s2l57ax3 = s2l57ax3;
		this.s2l57ay3 = s2l57ay3;

		this.s2l57bx1 = s2l57bx1;
		this.s2l57by1 = s2l57by1;
		this.s2l57bx2 = s2l57bx2;
		this.s2l57by2 = s2l57by2;
		this.s2l57bx3 = s2l57bx3;
		this.s2l57by3 = s2l57by3;

		this.s2l56ax1 = s2l56ax1;
		this.s2l56ay1 = s2l56ay1;
		this.s2l56ax2 = s2l56ax2;
		this.s2l56ay2 = s2l56ay2;
		this.s2l56ax3 = s2l56ax3;
		this.s2l56ay3 = s2l56ay3;

		this.s2l21x1 = s2l21x1;
		this.s2l21y1 = s2l21y1;
		this.s2l21x2 = s2l21x2;
		this.s2l21y2 = s2l21y2;
		this.s2l21x3 = s2l21x3;
		this.s2l21y3 = s2l21y3;

		this.s2l22ax1 = s2l22ax1;
		this.s2l22ay1 = s2l22ay1;
		this.s2l22ax2 = s2l22ax2;
		this.s2l22ay2 = s2l22ay2;
		this.s2l22ax3 = s2l22ax3;
		this.s2l22ay3 = s2l22ay3;

		this.s2l23x1 = s2l23x1;
		this.s2l23y1 = s2l23y1;
		this.s2l23x2 = s2l23x2;
		this.s2l23y2 = s2l23y2;
		this.s2l23x3 = s2l23x3;
		this.s2l23y3 = s2l23y3;

		this.s2l24x1 = s2l24x1;
		this.s2l24y1 = s2l24y1;
		this.s2l24x2 = s2l24x2;
		this.s2l24y2 = s2l24y2;
		this.s2l24x3 = s2l24x3;
		this.s2l24y3 = s2l24y3;

		this.s2l25x1 = s2l25x1;
		this.s2l25y1 = s2l25y1;
		this.s2l25x2 = s2l25x2;
		this.s2l25y2 = s2l25y2;
		this.s2l25x3 = s2l25x3;
		this.s2l25y3 = s2l25y3;

		this.s2l42ax1 = s2l42ax1;
		this.s2l42ay1 = s2l42ay1;
		this.s2l42ax2 = s2l42ax2;
		this.s2l42ay2 = s2l42ay2;
		this.s2l42ax3 = s2l42ax3;
		this.s2l42ay3 = s2l42ay3;

		this.s2l42bx1 = s2l42bx1;
		this.s2l42by1 = s2l42by1;
		this.s2l42bx2 = s2l42bx2;
		this.s2l42by2 = s2l42by2;
		this.s2l42bx3 = s2l42bx3;
		this.s2l42by3 = s2l42by3;

		this.s2l43bx1 = s2l43bx1;
		this.s2l43by1 = s2l43by1;
		this.s2l43bx2 = s2l43bx2;
		this.s2l43by2 = s2l43by2;
		this.s2l43bx3 = s2l43bx3;
		this.s2l43by3 = s2l43by3;

		this.s2l44x1 = s2l44x1;
		this.s2l44y1 = s2l44y1;
		this.s2l44x2 = s2l44x2;
		this.s2l44y2 = s2l44y2;
		this.s2l44x3 = s2l44x3;
		this.s2l44y3 = s2l44y3;

		this.s2l45x1 = s2l45x1;
		this.s2l45y1 = s2l45y1;
		this.s2l45x2 = s2l45x2;
		this.s2l45y2 = s2l45y2;
		this.s2l45x3 = s2l45x3;
		this.s2l45y3 = s2l45y3;

		this.s2l46ax1 = s2l46ax1;
		this.s2l46ay1 = s2l46ay1;
		this.s2l46ax2 = s2l46ax2;
		this.s2l46ay2 = s2l46ay2;
		this.s2l46ax3 = s2l46ax3;
		this.s2l46ay3 = s2l46ay3;

		this.s2l46bx1 = s2l46bx1;
		this.s2l46by1 = s2l46by1;
		this.s2l46bx2 = s2l46bx2;
		this.s2l46by2 = s2l46by2;
		this.s2l46bx3 = s2l46bx3;
		this.s2l46by3 = s2l46by3;

		// prawa - pionowa		
		this.s2er1x1 = s2er1x1;
		this.s2er1y1 = s2er1y1;
		this.s2er1x2 = s2er1x2;
		this.s2er1y2 = s2er1y2;
		this.s2er1x3 = s2er1x3;
		this.s2er1y3 = s2er1y3;
		// poziomo		
		this.s2eh1x1 = s2eh1x1;
		this.s2eh1y1 = s2eh1y1;
		this.s2eh1x2 = s2eh1x2;
		this.s2eh1y2 = s2eh1y2;
		this.s2eh1x3 = s2eh1x3;
		this.s2eh1y3 = s2eh1y3;
		// lewa - pionowa		
		this.s2el1x1 = s2el1x1;
		this.s2el1y1 = s2el1y1;
		this.s2el1x2 = s2el1x2;
		this.s2el1y2 = s2el1y2;
		this.s2el1x3 = s2el1x3;
		this.s2el1y3 = s2el1y3;
		// kształt góry - s2 - end	

		// linie - kształt góry - s2 - start
		this.s2l22bx1 = s2l22bx1;
		this.s2l22by1 = s2l22by1;
		this.s2l22bx2 = s2l22bx2;
		this.s2l22by2 = s2l22by2;
		this.s2l22bx3 = s2l22bx3;
		this.s2l22by3 = s2l22by3;

		this.s2l47x1 = s2l47x1;
		this.s2l47y1 = s2l47y1;
		this.s2l47x2 = s2l47x2;
		this.s2l47y2 = s2l47y2;
		this.s2l47x3 = s2l47x3;
		this.s2l47y3 = s2l47y3;

		this.s2l48x1 = s2l48x1;
		this.s2l48y1 = s2l48y1;
		this.s2l48x2 = s2l48x2;
		this.s2l48y2 = s2l48y2;
		this.s2l48x3 = s2l48x3;
		this.s2l48y3 = s2l48y3;

		this.s2l58ax1 = s2l58ax1;
		this.s2l58ay1 = s2l58ay1;
		this.s2l58ax2 = s2l58ax2;
		this.s2l58ay2 = s2l58ay2;
		this.s2l58ax3 = s2l58ax3;
		this.s2l58ay3 = s2l58ay3;

		this.s2l58bx1 = s2l58bx1;
		this.s2l58by1 = s2l58by1;
		this.s2l58bx2 = s2l58bx2;
		this.s2l58by2 = s2l58by2;
		this.s2l58bx3 = s2l58bx3;
		this.s2l58by3 = s2l58by3;

		this.s2l59x1 = s2l59x1;
		this.s2l59y1 = s2l59y1;
		this.s2l59x2 = s2l59x2;
		this.s2l59y2 = s2l59y2;
		this.s2l59x3 = s2l59x3;
		this.s2l59y3 = s2l59y3;

		this.s2l64ax1 = s2l64ax1;
		this.s2l64ay1 = s2l64ay1;
		this.s2l64ax2 = s2l64ax2;
		this.s2l64ay2 = s2l64ay2;
		this.s2l64ax3 = s2l64ax3;
		this.s2l64ay3 = s2l64ay3;

		this.s2l64bx1 = s2l64ax1;
		this.s2l64by1 = s2l64ay1;
		this.s2l64bx2 = s2l64ax2;
		this.s2l64by2 = s2l64ay2;
		this.s2l64bx3 = s2l64ax3;
		this.s2l64by3 = s2l64ay3;

		this.s2l64bx1 = s2l64bx1;
		this.s2l64by1 = s2l64by1;
		this.s2l64bx2 = s2l64bx2;
		this.s2l64by2 = s2l64by2;
		this.s2l64bx3 = s2l64bx3;
		this.s2l64by3 = s2l64by3;

		this.s2l65ax1 = s2l65ax1;
		this.s2l65ay1 = s2l65ay1;
		this.s2l65ax2 = s2l65ax2;
		this.s2l65ay2 = s2l65ay2;
		this.s2l65ax3 = s2l65ax3;
		this.s2l65ay3 = s2l65ay3;

		this.s2l65bx1 = s2l65bx1;
		this.s2l65by1 = s2l65by1;
		this.s2l65bx2 = s2l65bx2;
		this.s2l65by2 = s2l65by2;
		this.s2l65bx3 = s2l65bx3;
		this.s2l65by3 = s2l65by3;

		this.s2l55bx1 = s2l55bx1;
		this.s2l55by1 = s2l55by1;
		this.s2l55bx2 = s2l55bx2;
		this.s2l55by2 = s2l55by2;
		this.s2l55bx3 = s2l55bx3;
		this.s2l55by3 = s2l55by3;

		this.s2l55ax1 = s2l55ax1;
		this.s2l55ay1 = s2l55ay1;
		this.s2l55ax2 = s2l55ax2;
		this.s2l55ay2 = s2l55ay2;
		this.s2l55ax3 = s2l55ax3;
		this.s2l55ay3 = s2l55ay3;

		this.s2l49x1 = s2l49x1;
		this.s2l49y1 = s2l49y1;
		this.s2l49x2 = s2l49x2;
		this.s2l49y2 = s2l49y2;
		this.s2l49x3 = s2l49x3;
		this.s2l49y3 = s2l49y3;

		this.s2l50x1 = s2l50x1;
		this.s2l50y1 = s2l50y1;
		this.s2l50x2 = s2l50x2;
		this.s2l50y2 = s2l50y2;
		this.s2l50x3 = s2l50x3;
		this.s2l50y3 = s2l50y3;

		this.s2l51x1 = s2l51x1;
		this.s2l51y1 = s2l51y1;
		this.s2l51x2 = s2l51x2;
		this.s2l51y2 = s2l51y2;
		this.s2l51x3 = s2l51x3;
		this.s2l51y3 = s2l51y3;

		this.s2l52x1 = s2l52x1;
		this.s2l52y1 = s2l52y1;
		this.s2l52x2 = s2l52x2;
		this.s2l52y2 = s2l52y2;
		this.s2l52x3 = s2l52x3;
		this.s2l52y3 = s2l52y3;

		this.s2l53x1 = s2l53x1;
		this.s2l53y1 = s2l53y1;
		this.s2l53x2 = s2l53x2;
		this.s2l53y2 = s2l53y2;
		this.s2l53x3 = s2l53x3;
		this.s2l53y3 = s2l53y3;

		this.s2l54x1 = s2l54x1;
		this.s2l54y1 = s2l54y1;
		this.s2l54x2 = s2l54x2;
		this.s2l54y2 = s2l54y2;
		this.s2l54x3 = s2l54x3;
		this.s2l54y3 = s2l54y3;

		this.s2l43ax1 = s2l43ax1;
		this.s2l43ay1 = s2l43ay1;
		this.s2l43ax2 = s2l43ax2;
		this.s2l43ay2 = s2l43ay2;
		this.s2l43ax3 = s2l43ax3;
		this.s2l43ay3 = s2l43ay3;

		this.s2l46cx1 = s2l46cx1;
		this.s2l46cy1 = s2l46cy1;
		this.s2l46cx2 = s2l46cx2;
		this.s2l46cy2 = s2l46cy2;
		this.s2l46cx3 = s2l46cx3;
		this.s2l46cy3 = s2l46cy3;

		this.s2l74x1 = s2l74x1;
		this.s2l74y1 = s2l74y1;
		this.s2l74x2 = s2l74x2;
		this.s2l74y2 = s2l74y2;
		this.s2l74x3 = s2l74x3;
		this.s2l74y3 = s2l74y3;
		// linie - kształt góry - s2 - start	

		// kształt góry - s6 - start
		this.s6l76x1 = s6l76x1;
		this.s6l76y1 = s6l76y1;
		this.s6l76x2 = s6l76x2;
		this.s6l76y2 = s6l76y2;
		this.s6l76x3 = s6l76x3;
		this.s6l76y3 = s6l76y3;

		// prawa - pionowa		
		this.s6er1x1 = s6er1x1;
		this.s6er1y1 = s6er1y1;
		this.s6er1x2 = s6er1x2;
		this.s6er1y2 = s6er1y2;
		this.s6er1x3 = s6er1x3;
		this.s6er1y3 = s6er1y3;
		// poziomo		
		this.s6eh1x1 = s6eh1x1;
		this.s6eh1y1 = s6eh1y1;
		this.s6eh1x2 = s6eh1x2;
		this.s6eh1y2 = s6eh1y2;
		this.s6eh1x3 = s6eh1x3;
		this.s6eh1y3 = s6eh1y3;
		// lewa - pionowa		
		this.s6el1x1 = s6el1x1;
		this.s6el1y1 = s6el1y1;
		this.s6el1x2 = s6el1x2;
		this.s6el1y2 = s6el1y2;
		this.s6el1x3 = s6el1x3;
		this.s6el1y3 = s6el1y3;
		// kształt góry - s6 - end	

		// kształt góry - s6 - start
		this.s8l82x1 = s8l82x1;
		this.s8l82y1 = s8l82y1;
		this.s8l82x2 = s8l82x2;
		this.s8l82y2 = s8l82y2;
		this.s8l82x3 = s8l82x3;
		this.s8l82y3 = s8l82y3;

		this.s8l83x1 = s8l83x1;
		this.s8l83y1 = s8l83y1;
		this.s8l83x2 = s8l83x2;
		this.s8l83y2 = s8l83y2;
		this.s8l83x3 = s8l83x3;
		this.s8l83y3 = s8l83y3;

		// prawa - pionowa		
		this.s8er1x1 = s8er1x1;
		this.s8er1y1 = s8er1y1;
		this.s8er1x2 = s8er1x2;
		this.s8er1y2 = s8er1y2;
		this.s8er1x3 = s8er1x3;
		this.s8er1y3 = s8er1y3;
		// poziomo		
		this.s8eh1x1 = s8eh1x1;
		this.s8eh1y1 = s8eh1y1;
		this.s8eh1x2 = s8eh1x2;
		this.s8eh1y2 = s8eh1y2;
		this.s8eh1x3 = s8eh1x3;
		this.s8eh1y3 = s8eh1y3;
		// lewa - pionowa		
		this.s8el1x1 = s8el1x1;
		this.s8el1y1 = s8el1y1;
		this.s8el1x2 = s8el1x2;
		this.s8el1y2 = s8el1y2;
		this.s8el1x3 = s8el1x3;
		this.s8el1y3 = s8el1y3;
		// kształt góry - s6 - end	

		// kształt góry - s5 - start
		this.s5l75x1 = s5l75x1;
		this.s5l75y1 = s5l75y1;
		this.s5l75x2 = s5l75x2;
		this.s5l75y2 = s5l75y2;
		this.s5l75x3 = s5l75x3;
		this.s5l75y3 = s5l75y3;

		// prawa - pionowa		
		this.s5er1x1 = s5er1x1;
		this.s5er1y1 = s5er1y1;
		this.s5er1x2 = s5er1x2;
		this.s5er1y2 = s5er1y2;
		this.s5er1x3 = s5er1x3;
		this.s5er1y3 = s5er1y3;
		// poziomo		
		this.s5eh1x1 = s5eh1x1;
		this.s5eh1y1 = s5eh1y1;
		this.s5eh1x2 = s5eh1x2;
		this.s5eh1y2 = s5eh1y2;
		this.s5eh1x3 = s5eh1x3;
		this.s5eh1y3 = s5eh1y3;
		// lewa - pionowa		
		this.s5el1x1 = s5el1x1;
		this.s5el1y1 = s5el1y1;
		this.s5el1x2 = s5el1x2;
		this.s5el1y2 = s5el1y2;
		this.s5el1x3 = s5el1x3;
		this.s5el1y3 = s5el1y3;
		// kształt góry - s5 - end

		// kształt góry - s9 - start
		this.s9l85x1 = s9l85x1;
		this.s9l85y1 = s9l85y1;
		this.s9l85x2 = s9l85x2;
		this.s9l85y2 = s9l85y2;
		this.s9l85x3 = s9l85x3;
		this.s9l85y3 = s9l85y3;

		this.s9l87x1 = s9l87x1;
		this.s9l87y1 = s9l87y1;
		this.s9l87x2 = s9l87x2;
		this.s9l87y2 = s9l87y2;
		this.s9l87x3 = s9l87x3;
		this.s9l87y3 = s9l87y3;

		this.s9l88x1 = s9l88x1;
		this.s9l88y1 = s9l88y1;
		this.s9l88x2 = s9l88x2;
		this.s9l88y2 = s9l88y2;
		this.s9l88x3 = s9l88x3;
		this.s9l88y3 = s9l88y3;

		this.s9l89bx1 = s9l89bx1;
		this.s9l89by1 = s9l89by1;
		this.s9l89bx2 = s9l89bx2;
		this.s9l89by2 = s9l89by2;
		this.s9l89bx3 = s9l89bx3;
		this.s9l89by3 = s9l89by3;

		// prawa - pionowa		
		this.s9er1x1 = s9er1x1;
		this.s9er1y1 = s9er1y1;
		this.s9er1x2 = s9er1x2;
		this.s9er1y2 = s9er1y2;
		this.s9er1x3 = s9er1x3;
		this.s9er1y3 = s9er1y3;
		// poziomo		
		this.s9eh1x1 = s9eh1x1;
		this.s9eh1y1 = s9eh1y1;
		this.s9eh1x2 = s9eh1x2;
		this.s9eh1y2 = s9eh1y2;
		this.s9eh1x3 = s9eh1x3;
		this.s9eh1y3 = s9eh1y3;
		// lewa - pionowa		
		this.s9el1x1 = s9el1x1;
		this.s9el1y1 = s9el1y1;
		this.s9el1x2 = s9el1x2;
		this.s9el1y2 = s9el1y2;
		this.s9el1x3 = s9el1x3;
		this.s9el1y3 = s9el1y3;
		// kształt góry - s9 - end	

		// kształt góry - s7 - start
		this.s7l78ex1 = s7l78ex1;
		this.s7l78ey1 = s7l78ey1;
		this.s7l78ex2 = s7l78ex2;
		this.s7l78ey2 = s7l78ey2;
		this.s7l78ex3 = s7l78ex3;
		this.s7l78ey3 = s7l78ey3;

		this.s7l78dx1 = s7l78dx1;
		this.s7l78dy1 = s7l78dy1;
		this.s7l78dx2 = s7l78dx2;
		this.s7l78dy2 = s7l78dy2;
		this.s7l78dx3 = s7l78dx3;
		this.s7l78dy3 = s7l78dy3;

		this.s7l78bcx1 = s7l78bcx1;
		this.s7l78bcy1 = s7l78bcy1;
		this.s7l78bcx2 = s7l78bcx2;
		this.s7l78bcy2 = s7l78bcy2;
		this.s7l78bcx3 = s7l78bcx3;
		this.s7l78bcy3 = s7l78bcy3;

		this.s7l78ax1 = s7l78ax1;
		this.s7l78ay1 = s7l78ay1;
		this.s7l78ax2 = s7l78ax2;
		this.s7l78ay2 = s7l78ay2;
		this.s7l78ax3 = s7l78ax3;
		this.s7l78ay3 = s7l78ay3;

		this.s7l79x1 = s7l79x1;
		this.s7l79y1 = s7l79y1;
		this.s7l79x2 = s7l79x2;
		this.s7l79y2 = s7l79y2;
		this.s7l79x3 = s7l79x3;
		this.s7l79y3 = s7l79y3;

		this.s7l80ax1 = s7l80ax1;
		this.s7l80ay1 = s7l80ay1;
		this.s7l80ax2 = s7l80ax2;
		this.s7l80ay2 = s7l80ay2;
		this.s7l80ax3 = s7l80ax3;
		this.s7l80ay3 = s7l80ay3;

		this.s7l81x1 = s7l81x1;
		this.s7l81y1 = s7l81y1;
		this.s7l81x2 = s7l81x2;
		this.s7l81y2 = s7l81y2;
		this.s7l81x3 = s7l81x3;
		this.s7l81y3 = s7l81y3;

		this.s7l84x1 = s7l84x1;
		this.s7l84y1 = s7l84y1;
		this.s7l84x2 = s7l84x2;
		this.s7l84y2 = s7l84y2;
		this.s7l84x3 = s7l84x3;
		this.s7l84y3 = s7l84y3;

		this.s7l86x1 = s7l86x1;
		this.s7l86y1 = s7l86y1;
		this.s7l86x2 = s7l86x2;
		this.s7l86y2 = s7l86y2;
		this.s7l86x3 = s7l86x3;
		this.s7l86y3 = s7l86y3;

		// prawa - pionowa		
		this.s7er1x1 = s7er1x1;
		this.s7er1y1 = s7er1y1;
		this.s7er1x2 = s7er1x2;
		this.s7er1y2 = s7er1y2;
		this.s7er1x3 = s7er1x3;
		this.s7er1y3 = s7er1y3;
		// poziomo		
		this.s7eh1x1 = s7eh1x1;
		this.s7eh1y1 = s7eh1y1;
		this.s7eh1x2 = s7eh1x2;
		this.s7eh1y2 = s7eh1y2;
		this.s7eh1x3 = s7eh1x3;
		this.s7eh1y3 = s7eh1y3;
		// lewa - pionowa		
		this.s7el1x1 = s7el1x1;
		this.s7el1y1 = s7el1y1;
		this.s7el1x2 = s7el1x2;
		this.s7el1y2 = s7el1y2;
		this.s7el1x3 = s7el1x3;
		this.s7el1y3 = s7el1y3;
		// kształt góry - s7 - end

		// linie - kształt góry - s7 - start
		this.s7l80bx1 = s7l80bx1;
		this.s7l80by1 = s7l80by1;
		this.s7l80bx2 = s7l80bx2;
		this.s7l80by2 = s7l80by2;
		this.s7l80bx3 = s7l80bx3;
		this.s7l80by3 = s7l80by3;
		// linie - kształt góry - s7 - end	

		// kształt góry - s10 - start
		this.s10l90x1 = s10l90x1;
		this.s10l90y1 = s10l90y1;
		this.s10l90x2 = s10l90x2;
		this.s10l90y2 = s10l90y2;
		this.s10l90x3 = s10l90x3;
		this.s10l90y3 = s10l90y3;

		// prawa - pionowa		
		this.s10er1x1 = s10er1x1;
		this.s10er1y1 = s10er1y1;
		this.s10er1x2 = s10er1x2;
		this.s10er1y2 = s10er1y2;
		this.s10er1x3 = s10er1x3;
		this.s10er1y3 = s10er1y3;
		// poziomo		
		this.s10eh1x1 = s10eh1x1;
		this.s10eh1y1 = s10eh1y1;
		this.s10eh1x2 = s10eh1x2;
		this.s10eh1y2 = s10eh1y2;
		this.s10eh1x3 = s10eh1x3;
		this.s10eh1y3 = s10eh1y3;
		// lewa - pionowa		
		this.s7el1x1 = s7el1x1;
		this.s7el1y1 = s7el1y1;
		this.s7el1x2 = s7el1x2;
		this.s7el1y2 = s7el1y2;
		this.s7el1x3 = s7el1x3;
		this.s7el1y3 = s7el1y3;
		// kształt góry - s10 - end		
	}


	shows1234() {

		// kształt góry - s4 - start
		stroke(this.strokeColor);
		fill(this.mountainColor1);
		beginShape();
		vertex(this.s4l3x1, this.s4l3y1);
		bezierVertex(this.s4l3x1, this.s4l3y1, this.s4l3x2, this.s4l3y2, this.s4l3x3, this.s4l3y3); // l3
		bezierVertex(this.s4l4x1, this.s4l4y1, this.s4l4x2, this.s4l4y2, this.s4l4x3, this.s4l4y3); // l4
		bezierVertex(this.s4l5bx1, this.s4l5by1, this.s4l5bx2, this.s4l5by2, this.s4l5bx3, this.s4l5by3); // l5
		bezierVertex(this.s4l6ax1, this.s4l6ay1, this.s4l6ax2, this.s4l6ay2, this.s4l6ax3, this.s4l6ay3); // l6a
		bezierVertex(this.s4l7x1, this.s4l7y1, this.s4l7x2, this.s4l7y2, this.s4l7x3, this.s4l7y3); // l7
		bezierVertex(this.s4l8x1, this.s4l8y1, this.s4l8x2, this.s4l8y2, this.s4l8x3, this.s4l8y3); // l8
		bezierVertex(this.s4l9x1, this.s4l9y1, this.s4l9x2, this.s4l9y2, this.s4l9x3, this.s4l9y3); // l9
		bezierVertex(this.s4l10x1, this.s4l10y1, this.s4l10x2, this.s4l10y2, this.s4l10x3, this.s4l10y3); // l10
		bezierVertex(this.s4l11x1, this.s4l11y1, this.s4l11x2, this.s4l11y2, this.s4l11x3, this.s4l11y3); // l11
		bezierVertex(this.s4er1x1, this.s4er1y1, this.s4er1x2, this.s4er1y2, this.s4er1x3, this.s4er1y3); //  prawa/ pionowa/ do dołu
		bezierVertex(this.s4eh1x1, this.s4eh1y1, this.s4eh1x2, this.s4eh1y2, this.s4eh1x3, this.s4eh1y3); //  prawa/ pionowa/ do dołu / na lewo - pozioma
		bezierVertex(this.s4el1x1, this.s4el1y1, this.s4el1x2, this.s4el1y2, this.s4el1x3, this.s4el1y3); //  lewa pionowa do góry

		endShape();
		// kształt góry - s4 - end	

		// linie - kształt góry - s4 - start
		beginShape();
		vertex(this.s4l6bx1, this.s4l6by1);
		bezierVertex(this.s4l6bx1, this.s4l6by1, this.s4l6bx2, this.s4l6by2, this.s4l6bx3, this.s4l6by3); // l6b
		endShape();

		beginShape();
		vertex(this.s4l5ax1, this.s4l5ay1);
		bezierVertex(this.s4l5ax1, this.s4l5ay1, this.s4l5ax2, this.s4l5ay2, this.s4l5ax3, this.s4l5ay3); // l5a
		endShape();
		// linie - kształt góry - s4 - end			

		// kształt góry - s1 - start
		fill(this.mountainColor2);
		//		noFill();
		beginShape();
		vertex(this.s1l26x1, this.s1l26y1);
		bezierVertex(this.s1l26x1, this.s1l26y1, this.s1l26x2, this.s1l26y2, this.s1l26x3, this.s1l26y3); // l26
		bezierVertex(this.s1l27x1, this.s1l27y1, this.s1l27x2, this.s1l27y2, this.s1l27x3, this.s1l27y3); // l27
		bezierVertex(this.s1l28x1, this.s1l28y1, this.s1l28x2, this.s1l28y2, this.s1l28x3, this.s1l28y3); // l28
		bezierVertex(this.s1l29x1, this.s1l29y1, this.s1l29x2, this.s1l29y2, this.s1l29x3, this.s1l29y3); // l29
		bezierVertex(this.s1l30x1, this.s1l30y1, this.s1l30x2, this.s1l30y2, this.s1l30x3, this.s1l30y3); // l30
		bezierVertex(this.s1l31x1, this.s1l31y1, this.s1l31x2, this.s1l31y2, this.s1l31x3, this.s1l31y3); // l31
		bezierVertex(this.s1l32ax1, this.s1l32ay1, this.s1l32ax2, this.s1l32ay2, this.s1l32ax3, this.s1l32ay3); // l32a
		bezierVertex(this.s1l33x1, this.s1l33y1, this.s1l33x2, this.s1l33y2, this.s1l33x3, this.s1l33y3); // l33
		bezierVertex(this.s1l34ax1, this.s1l34ay1, this.s1l34ax2, this.s1l34ay2, this.s1l34ax3, this.s1l34ay3); // l34a
		bezierVertex(this.s1l34bx1, this.s1l34by1, this.s1l34bx2, this.s1l34by2, this.s1l34bx3, this.s1l34by3); // l34b
		bezierVertex(this.s1er1x1, this.s1er1y1, this.s1er1x2, this.s1er1y2, this.s1er1x3, this.s1er1y3); //  prawa/ pionowa/ do dołu
		bezierVertex(this.s1eh1x1, this.s1eh1y1, this.s1eh1x2, this.s1eh1y2, this.s1eh1x3, this.s1eh1y3); //  prawa/ pionowa/ do dołu/ na lewo - pozioma
		bezierVertex(this.s1el1x1, this.s1el1y1, this.s1el1x2, this.s1el1y2, this.s1el1x3, this.s1el1y3); //  lewa pionowa do góry
		endShape();
		// kształt góry - s1 - end	

		// linie - kształt góry - s1 - start
		beginShape();
		vertex(this.s1l39x1, this.s1l39y1);
		bezierVertex(this.s1l39x1, this.s1l39y1, this.s1l39x2, this.s1l39y2, this.s1l39x3, this.s1l39y3); // l39
		endShape();

		beginShape();
		vertex(this.s1l38ax1, this.s1l38ay1);
		bezierVertex(this.s1l38ax1, this.s1l38ay1, this.s1l38ax2, this.s1l38ay2, this.s1l38ax3, this.s1l38ay3); // l38a
		endShape();

		beginShape();
		vertex(this.s1l38bx1, this.s1l38by1);
		bezierVertex(this.s1l38bx1, this.s1l38by1, this.s1l38bx2, this.s1l38by2, this.s1l38bx3, this.s1l38by3); // l38b
		endShape();

		beginShape();
		vertex(this.s1l41x1, this.s1l41y1);
		bezierVertex(this.s1l41x1, this.s1l41y1, this.s1l41x2, this.s1l41y2, this.s1l41x3, this.s1l41y3); // l41
		endShape();

		beginShape();
		vertex(this.s1l40x1, this.s1l40y1);
		bezierVertex(this.s1l40x1, this.s1l40y1, this.s1l40x2, this.s1l40y2, this.s1l40x3, this.s1l40y3); // l40
		endShape();

		beginShape();
		vertex(this.s1l37x1, this.s1l37y1);
		bezierVertex(this.s1l37x1, this.s1l37y1, this.s1l37x2, this.s1l37y2, this.s1l37x3, this.s1l37y3); // l37
		endShape();

		beginShape();
		vertex(this.s1l36x1, this.s1l36y1);
		bezierVertex(this.s1l36x1, this.s1l36y1, this.s1l36x2, this.s1l36y2, this.s1l36x3, this.s1l36y3); // l36
		endShape();

		beginShape();
		vertex(this.s1l35x1, this.s1l35y1);
		bezierVertex(this.s1l35x1, this.s1l35y1, this.s1l35x2, this.s1l35y2, this.s1l35x3, this.s1l35y3); // l35
		endShape();

		beginShape();
		vertex(this.s1l32bx1, this.s1l32by1);
		bezierVertex(this.s1l32bx1, this.s1l32by1, this.s1l32bx2, this.s1l32by2, this.s1l32bx3, this.s1l32by3); // l32b
		endShape();
		// linie - kształt góry - s1 - end			

		// kształt góry - s3 - start
		fill(this.mountainColor3);
		beginShape();
		vertex(this.s3l12ax1, this.s3l12ay1);
		bezierVertex(this.s3l12ax1, this.s3l12ay1, this.s3l12ax2, this.s3l12ay2, this.s3l12ax3, this.s3l12ay3); // l12a
		bezierVertex(this.s3l12bx1, this.s3l12by1, this.s3l12bx2, this.s3l12by2, this.s3l12bx3, this.s3l12by3); // l12b
		bezierVertex(this.s3l13x1, this.s3l13y1, this.s3l13x2, this.s3l13y2, this.s3l13x3, this.s3l13y3); // l13
		bezierVertex(this.s3l14x1, this.s3l14y1, this.s3l14x2, this.s3l14y2, this.s3l14x3, this.s3l14y3); // l14
		bezierVertex(this.s3l15x1, this.s3l15y1, this.s3l15x2, this.s3l15y2, this.s3l15x3, this.s3l15y3); // l15
		bezierVertex(this.s3l16x1, this.s3l16y1, this.s3l16x2, this.s3l16y2, this.s3l16x3, this.s3l16y3); // l16
		bezierVertex(this.s3l17ax1, this.s3l17ay1, this.s3l17ax2, this.s3l17ay2, this.s3l17ax3, this.s3l17ay3); // l17a
		bezierVertex(this.s3l18x1, this.s3l18y1, this.s3l18x2, this.s3l18y2, this.s3l18x3, this.s3l18y3); // l18
		bezierVertex(this.s3l19x1, this.s3l19y1, this.s3l19x2, this.s3l19y2, this.s3l19x3, this.s3l19y3); // l19a
		bezierVertex(this.s3l20x1, this.s3l20y1, this.s3l20x2, this.s3l20y2, this.s3l20x3, this.s3l20y3); // l20
		bezierVertex(this.s3er1x1, this.s3er1y1, this.s3er1x2, this.s3er1y2, this.s3er1x3, this.s3er1y3); //  prawa/ pionowa/ do dołu
		bezierVertex(this.s3eh1x1, this.s3eh1y1, this.s3eh1x2, this.s3eh1y2, this.s3eh1x3, this.s3eh1y3); //  prawa/ pionowa/ do dołu / na lewo - pozioma
		bezierVertex(this.s3el1x1, this.s3el1y1, this.s3el1x2, this.s3el1y2, this.s3el1x3, this.s3el1y3); //  lewa pionowa do góry
		endShape();
		// kształt góry - s3 - end	

		// linie - kształt góry - s3 - start
		beginShape();
		vertex(this.s3l62x1, this.s3l62y1);
		bezierVertex(this.s3l62x1, this.s3l62y1, this.s3l62x2, this.s3l62y2, this.s3l62x3, this.s3l62y3); // l62
		endShape();

		beginShape();
		vertex(this.s3l17bx1, this.s3l17by1);
		bezierVertex(this.s3l17bx1, this.s3l17by1, this.s3l17bx2, this.s3l17by2, this.s3l17bx3, this.s3l17by3); // l17b
		endShape();

		beginShape();
		vertex(this.s3l19bx1, this.s3l19by1);
		bezierVertex(this.s3l19bx1, this.s3l19by1, this.s3l19bx2, this.s3l19by2, this.s3l19bx3, this.s3l19by3); // l19b
		endShape();

		// linie - kształt góry - s3 - end	

		// kształt góry - s2 - start
		fill(this.mountainColor4);
		beginShape();
		vertex(this.s2l1x1, this.s2l1y1);
		bezierVertex(this.s2l1x1, this.s2l1y1, this.s2l1x2, this.s2l1y2, this.s2l1x3, this.s2l1y3); // l1
		bezierVertex(this.s2l2x1, this.s2l2y1, this.s2l2x2, this.s2l2y2, this.s2l2x3, this.s2l2y3); // l2
		bezierVertex(this.s2l72x1, this.s2l72y1, this.s2l72x2, this.s2l72y2, this.s2l72x3, this.s2l72y3); // l72
		bezierVertex(this.s2l71ax1, this.s2l71ay1, this.s2l71ax2, this.s2l71ay2, this.s2l71ax3, this.s2l71ay3); // l71a
		bezierVertex(this.s2l71bx1, this.s2l71by1, this.s2l71bx2, this.s2l71by2, this.s2l71bx3, this.s2l71by3); // l71b
		bezierVertex(this.s2l70x1, this.s2l70y1, this.s2l70x2, this.s2l70y2, this.s2l70x3, this.s2l70y3); // l70
		bezierVertex(this.s2l68x1, this.s2l68y1, this.s2l68x2, this.s2l68y2, this.s2l68x3, this.s2l68y3); // l68
		bezierVertex(this.s2l67x1, this.s2l67y1, this.s2l67x2, this.s2l67y2, this.s2l67x3, this.s2l67y3); // l67
		bezierVertex(this.s2l63x1, this.s2l63y1, this.s2l63x2, this.s2l63y2, this.s2l63x3, this.s2l63y3); // l63
		bezierVertex(this.s2l61x1, this.s2l61y1, this.s2l61x2, this.s2l61y2, this.s2l61x3, this.s2l61y3); // l61
		bezierVertex(this.s2l60ax1, this.s2l60ay1, this.s2l60ax2, this.s2l60ay2, this.s2l60ax3, this.s2l60ay3); // l60a
		bezierVertex(this.s2l60bx1, this.s2l60by1, this.s2l60bx2, this.s2l60by2, this.s2l60bx3, this.s2l60by3); // l60b
		bezierVertex(this.s2l57ax1, this.s2l57ay1, this.s2l57ax2, this.s2l57ay2, this.s2l57ax3, this.s2l57ay3); // l57a
		bezierVertex(this.s2l57bx1, this.s2l57by1, this.s2l57bx2, this.s2l57by2, this.s2l57bx3, this.s2l57by3); // l57b
		bezierVertex(this.s2l56ax1, this.s2l56ay1, this.s2l56ax2, this.s2l56ay2, this.s2l56ax3, this.s2l56ay3); // l56a
		bezierVertex(this.s2l21x1, this.s2l21y1, this.s2l21x2, this.s2l21y2, this.s2l21x3, this.s2l21y3); // l21
		bezierVertex(this.s2l22ax1, this.s2l22ay1, this.s2l22ax2, this.s2l22ay2, this.s2l22ax3, this.s2l22ay3); // l22a
		bezierVertex(this.s2l23x1, this.s2l23y1, this.s2l23x2, this.s2l23y2, this.s2l23x3, this.s2l23y3); // l23
		bezierVertex(this.s2l24x1, this.s2l24y1, this.s2l24x2, this.s2l24y2, this.s2l24x3, this.s2l24y3); // l24
		bezierVertex(this.s2l25x1, this.s2l25y1, this.s2l25x2, this.s2l25y2, this.s2l25x3, this.s2l25y3); // l25
		bezierVertex(this.s2l42ax1, this.s2l42ay1, this.s2l42ax2, this.s2l42ay2, this.s2l42ax3, this.s2l42ay3); // l42a
		bezierVertex(this.s2l42bx1, this.s2l42by1, this.s2l42bx2, this.s2l42by2, this.s2l42bx3, this.s2l42by3); // l42b
		bezierVertex(this.s2l43bx1, this.s2l43by1, this.s2l43bx2, this.s2l43by2, this.s2l43bx3, this.s2l43by3); // l43b
		bezierVertex(this.s2l44x1, this.s2l44y1, this.s2l44x2, this.s2l44y2, this.s2l44x3, this.s2l44y3); // l44
		bezierVertex(this.s2l45x1, this.s2l45y1, this.s2l45x2, this.s2l45y2, this.s2l45x3, this.s2l45y3); // l45
		bezierVertex(this.s2l46ax1, this.s2l46ay1, this.s2l46ax2, this.s2l46ay2, this.s2l46ax3, this.s2l46ay3); // l46a
		bezierVertex(this.s2l46bx1, this.s2l46by1, this.s2l46bx2, this.s2l46by2, this.s2l46bx3, this.s2l46by3); // l46b
		bezierVertex(this.s2er1x1, this.s2er1y1, this.s2er1x2, this.s2er1y2, this.s2er1x3, this.s2er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s2eh1x1, this.s2eh1y1, this.s2eh1x2, this.s2eh1y2, this.s2eh1x3, this.s2eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s2el1x1, this.s2el1y1, this.s2el1x2, this.s2el1y2, this.s2el1x3, this.s2el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s2 - end

		// linie - kształt góry - s2 - start
		beginShape();
		vertex(this.s2l22bx1, this.s2l22by1);
		bezierVertex(this.s2l22bx1, this.s2l22by1, this.s2l22bx2, this.s2l22by2, this.s2l22bx3, this.s2l22by3); // l22b
		endShape();

		beginShape();
		vertex(this.s2l47x1, this.s2l47y1);
		bezierVertex(this.s2l47x1, this.s2l47y1, this.s2l47x2, this.s2l47y2, this.s2l47x3, this.s2l47y3); // l47
		endShape();

		beginShape();
		vertex(this.s2l48x1, this.s2l48y1);
		bezierVertex(this.s2l48x1, this.s2l48y1, this.s2l48x2, this.s2l48y2, this.s2l48x3, this.s2l48y3); // l48
		endShape();

		beginShape();
		vertex(this.s2l58ax1, this.s2l58ay1);
		bezierVertex(this.s2l58ax1, this.s2l58ay1, this.s2l58ax2, this.s2l58ay2, this.s2l58ax3, this.s2l58ay3); // l58a
		endShape();

		beginShape();
		vertex(this.s2l58bx1, this.s2l58by1);
		bezierVertex(this.s2l58bx1, this.s2l58by1, this.s2l58bx2, this.s2l58by2, this.s2l58bx3, this.s2l58by3); // l58b
		endShape();

		beginShape();
		vertex(this.s2l59x1, this.s2l59y1);
		bezierVertex(this.s2l59x1, this.s2l59y1, this.s2l59x2, this.s2l59y2, this.s2l59x3, this.s2l59y3); // l59
		endShape();

		beginShape();
		vertex(this.s2l64ax1, this.s2l64ay1);
		bezierVertex(this.s2l64ax1, this.s2l64ay1, this.s2l64ax2, this.s2l64ay2, this.s2l64ax3, this.s2l64ay3); // l64a
		endShape();

		beginShape();
		vertex(this.s2l64bx1, this.s2l64by1);
		bezierVertex(this.s2l64bx1, this.s2l64by1, this.s2l64bx2, this.s2l64by2, this.s2l64bx3, this.s2l64by3); // l64b
		endShape();

		beginShape();
		vertex(this.s2l65ax1, this.s2l65ay1);
		bezierVertex(this.s2l65ax1, this.s2l65ay1, this.s2l65ax2, this.s2l65ay2, this.s2l65ax3, this.s2l65ay3); // l65a
		endShape();

		beginShape();
		vertex(this.s2l65bx1, this.s2l65by1);
		bezierVertex(this.s2l65bx1, this.s2l65by1, this.s2l65bx2, this.s2l65by2, this.s2l65bx3, this.s2l65by3); // l65b
		endShape();

		beginShape();
		vertex(this.s2l55bx1, this.s2l55by1);
		bezierVertex(this.s2l55bx1, this.s2l55by1, this.s2l55bx2, this.s2l55by2, this.s2l55bx3, this.s2l55by3); // l55b
		endShape();

		beginShape();
		vertex(this.s2l55ax1, this.s2l55ay1);
		bezierVertex(this.s2l55ax1, this.s2l55ay1, this.s2l55ax2, this.s2l55ay2, this.s2l55ax3, this.s2l55ay3); // l55a
		endShape();

		beginShape();
		vertex(this.s2l49x1, this.s2l49y1);
		bezierVertex(this.s2l49x1, this.s2l49y1, this.s2l49x2, this.s2l49y2, this.s2l49x3, this.s2l49y3); // l49
		endShape();

		beginShape();
		vertex(this.s2l50x1, this.s2l50y1);
		bezierVertex(this.s2l50x1, this.s2l50y1, this.s2l50x2, this.s2l50y2, this.s2l50x3, this.s2l50y3); // l50
		endShape();

		beginShape();
		vertex(this.s2l51x1, this.s2l51y1);
		bezierVertex(this.s2l51x1, this.s2l51y1, this.s2l51x2, this.s2l51y2, this.s2l51x3, this.s2l51y3); // l51
		endShape();

		beginShape();
		vertex(this.s2l52x1, this.s2l52y1);
		bezierVertex(this.s2l52x1, this.s2l52y1, this.s2l52x2, this.s2l52y2, this.s2l52x3, this.s2l52y3); // l52
		endShape();

		beginShape();
		vertex(this.s2l53x1, this.s2l53y1);
		bezierVertex(this.s2l53x1, this.s2l53y1, this.s2l53x2, this.s2l53y2, this.s2l53x3, this.s2l53y3); // l53
		endShape();

		beginShape();
		vertex(this.s2l54x1, this.s2l54y1);
		bezierVertex(this.s2l54x1, this.s2l54y1, this.s2l54x2, this.s2l54y2, this.s2l54x3, this.s2l54y3); // l54
		endShape();

		beginShape();
		vertex(this.s2l43ax1, this.s2l43ay1);
		bezierVertex(this.s2l43ax1, this.s2l43ay1, this.s2l43ax2, this.s2l43ay2, this.s2l43ax3, this.s2l43ay3); // l43a
		endShape();

		beginShape();
		vertex(this.s2l46cx1, this.s2l46cy1);
		bezierVertex(this.s2l46cx1, this.s2l46cy1, this.s2l46cx2, this.s2l46cy2, this.s2l46cx3, this.s2l46cy3); // l46c
		endShape();

		beginShape();
		vertex(this.s2l74x1, this.s2l74y1);
		bezierVertex(this.s2l74x1, this.s2l74y1, this.s2l74x2, this.s2l74y2, this.s2l74x3, this.s2l74y3); // l74
		endShape();
		// linie - kształt góry - s2 - end			
	}

	shows68() {

		// kształt góry - s6 - start
		fill(this.mountainColorGreen1);
		beginShape();
		vertex(this.s6l76x1, this.s6l76y1);
		bezierVertex(this.s6l76x1, this.s6l76y1, this.s6l76x2, this.s6l76y2, this.s6l76x3, this.s6l76y3); // l76 + 77
		bezierVertex(this.s6er1x1, this.s6er1y1, this.s6er1x2, this.s6er1y2, this.s6er1x3, this.s6er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s6eh1x1, this.s6eh1y1, this.s6eh1x2, this.s6eh1y2, this.s6eh1x3, this.s6eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s6el1x1, this.s6el1y1, this.s6el1x2, this.s6el1y2, this.s6el1x3, this.s6el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s6- end			

		// kształt góry - s8 - start
		fill(this.mountainColorGreen2);
		beginShape();
		vertex(this.s8l82x1, this.s8l82y1);
		bezierVertex(this.s8l82x1, this.s8l82y1, this.s8l82x2, this.s8l82y2, this.s8l82x3, this.s8l82y3); // l82
		bezierVertex(this.s8l83x1, this.s8l83y1, this.s8l83x2, this.s8l83y2, this.s8l83x3, this.s8l83y3); // 83
		bezierVertex(this.s8er1x1, this.s8er1y1, this.s8er1x2, this.s8er1y2, this.s8er1x3, this.s8er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s8eh1x1, this.s8eh1y1, this.s8eh1x2, this.s8eh1y2, this.s8eh1x3, this.s8eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s8el1x1, this.s8el1y1, this.s8el1x2, this.s8el1y2, this.s8el1x3, this.s8el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s8- end
	}

	shows59() {
		// kształt góry - s5 - start
		fill(this.mountainColorGreen3);
		beginShape();
		vertex(this.s5l75x1, this.s5l75y1);
		bezierVertex(this.s5l75x1, this.s5l75y1, this.s5l75x2, this.s5l75y2, this.s5l75x3, this.s5l75y3); // l75
		bezierVertex(this.s5er1x1, this.s5er1y1, this.s5er1x2, this.s5er1y2, this.s5er1x3, this.s5er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s5eh1x1, this.s5eh1y1, this.s5eh1x2, this.s5eh1y2, this.s5eh1x3, this.s5eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s5el1x1, this.s5el1y1, this.s5el1x2, this.s5el1y2, this.s5el1x3, this.s5el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s5 - end	

		// kształt góry - s9 - start
		fill(this.mountainColorGreen4);
		beginShape();
		vertex(this.s9l85x1, this.s9l85y1);
		bezierVertex(this.s9l85x1, this.s9l85y1, this.s9l85x2, this.s9l85y2, this.s9l85x3, this.s9l85y3); // l85
		bezierVertex(this.s9l87x1, this.s9l87y1, this.s9l87x2, this.s9l87y2, this.s9l87x3, this.s9l87y3); // l87
		bezierVertex(this.s9l88x1, this.s9l88y1, this.s9l88x2, this.s9l88y2, this.s9l88x3, this.s9l88y3); // l88
		bezierVertex(this.s9l89bx1, this.s9l89by1, this.s9l89bx2, this.s9l89by2, this.s9l89bx3, this.s9l89by3); // l89b
		bezierVertex(this.s9er1x1, this.s9er1y1, this.s9er1x2, this.s9er1y2, this.s9er1x3, this.s9er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s9eh1x1, this.s9eh1y1, this.s9eh1x2, this.s9eh1y2, this.s9eh1x3, this.s9eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s9el1x1, this.s9el1y1, this.s9el1x2, this.s9el1y2, this.s9el1x3, this.s9el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s9 - end	
	}

	shows7() {
		// kształt góry - s7 - start
		fill(this.mountainColorGreen5);
		beginShape();
		vertex(this.s7l78ex1, this.s7l78ey1);
		bezierVertex(this.s7l78ex1, this.s7l78ey1, this.s7l78ex2, this.s7l78ey2, this.s7l78ex3, this.s7l78ey3); // l78e
		bezierVertex(this.s7l78dx1, this.s7l78dy1, this.s7l78dx2, this.s7l78dy2, this.s7l78dx3, this.s7l78dy3); // l78d
		bezierVertex(this.s7l78bcx1, this.s7l78bcy1, this.s7l78bcx2, this.s7l78bcy2, this.s7l78bcx3, this.s7l78bcy3); // l78c + 78b
		//			stroke(100, 0, 255);
		bezierVertex(this.s7l78ax1, this.s7l78ay1, this.s7l78ax2, this.s7l78ay2, this.s7l78ax3, this.s7l78ay3); // l78a
		bezierVertex(this.s7l79x1, this.s7l79y1, this.s7l79x2, this.s7l79y2, this.s7l79x3, this.s7l79y3); // l79
		bezierVertex(this.s7l80ax1, this.s7l80ay1, this.s7l80ax2, this.s7l80ay2, this.s7l80ax3, this.s7l80ay3); // l80a
		bezierVertex(this.s7l81x1, this.s7l81y1, this.s7l81x2, this.s7l81y2, this.s7l81x3, this.s7l81y3); // l81
		bezierVertex(this.s7l84x1, this.s7l84y1, this.s7l84x2, this.s7l84y2, this.s7l84x3, this.s7l84y3); // l84
		bezierVertex(this.s7l86x1, this.s7l86y1, this.s7l86x2, this.s7l86y2, this.s7l86x3, this.s7l86y3); // l86
		bezierVertex(this.s7er1x1, this.s7er1y1, this.s7er1x2, this.s7er1y2, this.s7er1x3, this.s7er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s7eh1x1, this.s7eh1y1, this.s7eh1x2, this.s7eh1y2, this.s7eh1x3, this.s7eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s7el1x1, this.s7el1y1, this.s7el1x2, this.s7el1y2, this.s7el1x3, this.s7el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s7 - end

		// linie - kształt góry - s7 - start
		beginShape();
		vertex(this.s7l80bx1, this.s7l80by1);
		bezierVertex(this.s7l80bx1, this.s7l80by1, this.s7l80bx2, this.s7l80by2, this.s7l80bx3, this.s7l80by3); // l80b
		endShape();
		// linie - kształt góry - s7 - end
	}

	shows10() {
		// kształt góry - s10 - start
		fill(this.mountainColorGreen6);
		beginShape();
		vertex(this.s10l90x1, this.s10l90y1);
		bezierVertex(this.s10l90x1, this.s10l90y1, this.s10l90x2, this.s10l90y2, this.s10l90x3, this.s10l90y3); // l90
		bezierVertex(this.s10er1x1, this.s10er1y1, this.s10er1x2, this.s10er1y2, this.s10er1x3, this.s10er1y3); // prawa/ pionowa/ do dołu
		bezierVertex(this.s10eh1x1, this.s10eh1y1, this.s10eh1x2, this.s10eh1y2, this.s10eh1x3, this.s10eh1y3); // prawa/ pionowa/ do dołu / do lewej
		bezierVertex(this.s10el1x1, this.s10el1y1, this.s10el1x2, this.s10el1y2, this.s10el1x3, this.s10el1y3); // lewa/ pionowa do góry
		endShape();
		// kształt góry - s10 - end		
	}
}
// MOUNTAIN KLASA - FINSZ