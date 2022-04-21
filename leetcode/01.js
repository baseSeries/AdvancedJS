// 给你一个由若干单词组成的句子 sentence ，单词间由空格分隔。每个单词仅由大写和小写英文字母组成。
// 请你将句子转换为 “山羊拉丁文（Goat Latin）”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。山羊拉丁文的规则如下：

// 如果单词以元音开头（'a', 'e', 'i', 'o', 'u'），在单词后添加"ma"。
// 例如，单词 "apple" 变为 "applema" 。
// 如果单词以辅音字母开头（即，非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。
// 例如，单词 "goat" 变为 "oatgma" 。
// 根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从 1 开始。
// 例如，在第一个单词后添加 "a" ，在第二个单词后添加 "aa" ，以此类推。
// 返回将 sentence 转换为山羊拉丁文后的句子。

//1 添加   元音 添加  辅音 移动后添加
// 2 索引添加

// 示例 1：

// 输入：sentence = "I speak Goat Latin"
// 输出："Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// 示例 2：

// 输入：sentence = "The quick brown fox jumped over the lazy dog"
// 输出："heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
var toGoatLatin = function (sentence) {
    let yuanyin = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let sentenceArr = sentence.split(" ")
    let left = 0, right = sentenceArr.length - 1;
    function setVal (value, index) {
        if (!yuanyin.includes(value.at(0))) {
            value = value.slice(1) + value.slice(0, 1)
        }
        return value += "ma" + 'a'.repeat(index + 1)
    }
    while (left <= right) {
        let leftVal = sentenceArr[left]
        let rightVal = sentenceArr[right]
        sentenceArr[left] = setVal(leftVal, left)
        sentenceArr[right] = setVal(rightVal, right)
        left++
        right--
    }
    return sentenceArr.join(" ")
};
let sentence = "Each word consists of lowercase and uppercase letters only"
console.log(toGoatLatin(sentence));
