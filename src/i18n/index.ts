// 项目国家化文件
import enUs from './en-us';
import zhCn from './zh-cn';
import zhTw from './zh-tw';

// element ui 国际化文件
import enLocal from 'element-plus/dist/locale/en.mjs';
import zhCnLocal from 'element-plus/dist/locale/zh-cn.mjs';
import zhTwLocal from 'element-plus/dist/locale/zh-tw.mjs';


const message = {
  'en-US': {
    ...enUs,
    ...enLocal,
  },
  'zh-CN': {
    ...zhCn,
    ...zhCnLocal,
  },
  'zh-TW': {
    ...zhTw,
    ...zhTwLocal,
  },
};

export default message;

