# 关于 js 版本的使用方法

直接在你的网页 head 加入下面这句代码即可

```html
<script src="https://raw.githubusercontent.com/Yanren1225/i7h-js/slave/i7h.py"></script>
```

或者你也可以下载到本地用相对路径引入

# 【i18nglish】自动i18n

大家在工作中有经常遇到i18n这个单词吗？

i18n是internationalization的缩写，i和n是它的首尾字母，18则是中间的字符数量。

嗯……所以是谁发明的这个缩写？烂死了！我要把所有单词都变成i18n的，让他看看我的厉害！

好，就叫做i18nglish好了！

## 使用效果

使用前:

```txt
  Alice was beginning to get very tired of sitting by her sister
on the bank, and of having nothing to do:  once or twice she had
peeped into the book her sister was reading, but it had no
pictures or conversations in it, `and what is the use of a book,'
thought Alice `without pictures or conversation?'
```

使用后:

```txt
  A3e w1s b7g to g1t v2y t3d of s5g by h1r s4r
on t1e b2k, a1d of h4g n5g to do:  o2e or t3e s1e h1d
p4d i2o t1e b2k h1r s4r w1s r5g, b1t it h1d no
p6s or c11s in it, `a1d w2t is t1e u1e of a b2k,'
t5t A3e `w5t p6s or c10n?'
```

怎么样，是不是看起来更加i18n了？

## 使用方法

首先你要有一个Python。

把这个仓库clone回去，然后`import i7h`就可以啦，接口只有一个，是`i7h.i18n`。

```python
def i18n(s: str) -> str:
    ...
```

输入一个字符串，就可以把它i18n啦！

## 结束

我本来想说那个一如既往的结束语的，但是我突然又想到了一件事——

i18n本身也是一个以i开头以n结尾的单词，i和n之间只有2个字符，那岂不是说i18n就是i2n！

其实我是天才吧！
