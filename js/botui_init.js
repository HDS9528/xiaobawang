function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临小霸王😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是小霸王😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我黑皇😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于小霸王的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。小霸王是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "起这个名字是因为随便"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "分类也有一点我的恶趣味在。👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "都是瞎弄的🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "相册，不要看，很羞耻的。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "内容酌情观看哦👻"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么叫小霸王呢？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "不告诉你"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，那英文名为什么叫黑皇呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "小说看多了了 "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感来自于太古神王~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }