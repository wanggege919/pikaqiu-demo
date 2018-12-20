!function(){
    var duration = 50
    function writeCode(prefix,code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1
            container.innerHTML = prefix + code.substring(0,n)
            styleTag.innerHTML = prefix + code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(run,duration)
            }else{
                fn.call()
            }
        },duration)
    }
    let code = `
    /*首先,准备皮卡丘的皮肤*/
    .preview{
        height: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffdc42;
      }
      .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
      }
      /* 接着, 做出皮卡丘的鼻子 */
      .noes{
        width: 0px;
        height: 0px;
        border: 11px solid black;
        border-color: black transparent transparent transparent;
        border-width: 10px 12px;
        border-radius:11px;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
      }
      /* 然后,开始做皮卡丘的眼睛 */
      .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        border-radius: 50%;
        border: 2px solid #000000;
      }
      /*这是眼珠子哦*/
      .eye::after{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        border: 2px solid #000;
        top: -1px;
      }
      /* 这是左眼 */
      .eye.left{
        position: absolute;
        right: 50%;
        margin-right: 72px;
      }
      /* 这是右眼 */
      .eye.right{
        position: absolute;
        left: 50%;
        margin-left: 72px;
      }
      /* 接着,做出皮卡丘脸部可爱的腮红 */
      .face{
        width: 68px;
        height: 68px;
        background: #ff251a;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
      }
      /* 左腮红 */
      .face.left{
        right: 50%;
        margin-right: 110px;
        top: 85px;
      }
      /* 右腮红 */
      .face.right{
        left: 50%;
        margin-left: 110px;
        top: 85px;
      }
      /* 微微翘起的上嘴唇 */
      .upperLip{
        width: 80px;
        height: 25px;
        border: 3px solid black;
        position: absolute;
        top: 50px;
        background: #ffdc42;
        z-index: 1
      }
      .upperLip.left{
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
        border-bottom-left-radius: 40px 25px;
        right: 50%;
      }
      
      .upperLip.right{
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
        border-bottom-right-radius: 40px 25px;
        left: 50%;
      }
      /* 开始 做下嘴唇 */
      .lowerLip-wrapper{
        width: 200px;
        height: 115px;
        position: absolute;
        left: 50%;
        bottom: -10px;
        margin-left: -100px;
        overflow: hidden;
      }
      .lowerLip{
        width: 200px;
        height: 3500px;
        background: #a61413;
        border-radius: 200px/1500px;
        position: absolute;
        bottom: 0px;
        border: 2px solid #000;
        overflow: hidden;
      }
      /* 最后是 粉红色的小舌头 */
      .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -10px;
        width: 100px;
        height: 100px;
        background: #ff5d62;
        left: 50px;
        border-radius: 50%;
      }

      /* 好啦 , 这只皮卡丘就送给你啦! 哈哈哈*/
    `
    writeCode('',code)

    $('.action').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })

}.call()