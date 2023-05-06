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
              本站是一个专门用来收听李志(逼哥)的音乐平台，收集了李志(逼哥)先生的全部歌曲(几乎全部覆盖),
            </div>
            <div className="w-full kswz">
              如果您手上有本站没有的音源,可以联系我。
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
