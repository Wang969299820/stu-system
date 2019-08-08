## 数据

- 表格
    - list [] (page,(keyWord))
- 翻页
    - page
- 搜索
    - keyWord
- 弹出层
    - item (list[i])

## 翻页

```javascript
nowPage < =4
1,2,3,4
nowPage > 4
1...

nowPage> 4 && totalPage -4 >=nowPage
n-2, n-1, n, n+1, n+2

nowPage <= totalPage -4
...totalPage

nowPage > totalPage -4
totalPage -3, totalPage -2, totalPage -1, totalPage
```