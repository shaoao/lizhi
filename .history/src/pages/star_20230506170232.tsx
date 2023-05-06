import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-10">
        {/* <img className="w-72" src="/qrcode/wxshop.jpeg" alt="qrcode" /> */}
        <div className="space-y-10">
          {/* <div className="p-10 shadow-xl bg-gradient-to-r from-gray-900 to-black border-4 border-solid border-gray-500 rounded-full inline-block">
            <img
              className="w-36 shadow-2xl rounded-full"
              src="/qrcode/wxshop_qrcode.png"
              alt="qrcode"
            />
          </div> */}
          <div className="space-y-2 bg-gray-50/10 rounded-xl p-4">
            <div>
              这里有一本李志原创歌曲的{' '}
              <a
                className="text-pink-500 hover:text-pink-500 hover:underline"
                href="https://pan.baidu.com/s/17LHv_8gI_Ee5RJqnzSuYIg?pwd=c8af"
                target="_blank"
              >
                《吉他谱》
              </a>
            </div>
            <div>
              在这里一起听歌一起
              <span className="text-yellow-500">「装逼」</span>
            </div>

            <div className="w-full kswz">
              本站是一个珍藏了李志音乐作品集、专门用来收听李志(逼哥)的在线音乐播放器，收集了互联网中李志(逼哥)先生的全部歌曲(几乎全部覆盖),并且提供了免费下载服务，我们不能失去信仰！！
            </div>
            <div className="w-full kswz">
              如果您还想听什么歌曲，可以
              <a
                className="text-pink-400 "
                href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1526464053&website=www.oicqzone.com"
              >
                {' '}
                联系{' '}
              </a>
              我。
            </div>
            <div className="w-full kswz">
              我是一个热爱音乐的人，喜欢很多乐队，当然也喜欢很多民谣，比如：李志。李志的音乐很好听，因为它不单纯追求商业成功，而是充满了真实、坦率、勇敢和反叛的元素。他有着个人独特的音乐风格和歌曲创作。李志的声音银色独特还很深情，在音乐中表现出人性光辉和沧桑之感，是我喜欢的原因。
            </div>
            <div className="w-full kswz">
              音乐版权所有权归
              <span className="text-green-500">【李志先生】</span>所有
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
