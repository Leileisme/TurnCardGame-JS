// 若不是改成 function ，則會被引用的變更，改了之後再給個 return 每次都會是新的

export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'http://linecorp.com/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Brown Cafe',
          weight: 'bold',
          size: 'xl'
        }
      ]
    }
  }
}

// line的josn的檔案是""，但是是錯的，這邊是JS，所以才要改成JS格式(用'')
// setting +
// 改json檔格式
// "editor.codeActionsOnSave": {
//  "source.fixAll.eslint": true
//},
