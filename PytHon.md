**Muốn truyền thông tin an toàn cần đảm bảo 3 yêu cầu:**

- **Tính toàn vẹn**: dữ liệu không bị sửa đổi, can thiệp trên con đường vận chuyển
- **Tính xác thực**: đảm bảo là dữ liệu được gửi từ nguồn tin xác thực và không bị giả mạo
- **Tính bí mật**: đảm bảo chỉ người nhận mới có thể xem nội dung thông tin





# Python

### Cú pháp

```python
#Phân biệt chữ hoa, chữ thường
#Thụt đầu dòng cho 1 block
#Có thể dùng \ cuối dòng để bỏ qua kết thúc lệnh, các lệnh trong (), [], {} thì không cần
#' ', " ", ''' ''', """ """: giống nhau
"""
Comment nhiều dòng
Thực tế đây không phải là comment. Đây là một chuỗi không được gán cho bất kỳ biến nào, vì vậy chương trình sẽ không gọi hoặc tham chiếu nó.
"""
#Dùng ; để viết nhiều lệnh trên 1 dòng
```

```python
if __name__ == "__main__":
    main()
```

### Biến

```python
#Định danh: bắt đầu với chữ hoặc _, theo sau bởi số hoặc ký tự
#Không có khai báo. 
#Được định nghĩa khi gán với 1 giá trị
#Có thế thay đổi kiểu dữ liệu khi gán hoặc dùng str(x), int(a, b)
#Đa gán: a = b = c = 100 hoặc a, b, c = 5, 10, 15
```

### Toán tử

```python
+, -, *, /, %, ** (mũ), //(phần nguyên)
==, !=, <> (giống !=), >, <>=, <=,..
=, +=, -=, *=, /=, %=, **=, //=
and, or, not
in, not in
is, is not #so sánh địa chỉ biến chứ không phải giá trị biến
&, |, ^, ~, <<, >> #bit
```

### If Else

```python
if condition:
    pass
elif condition :
	pass
else:
	pass
#Hoặc
print(“a > b”) if a>b else print (“a=b”) if a==b else print(“a<b”)
```

### Loop

```python
while (condition):
	pass
```

```python 
for var in list:
    pass
    
range(a) #[1, 2, .., a]
range(a, b) #[a, .., b]

for var in range(a,b):
    #code
break #kết thúc vòng lặp
continue #chuyển sang vòng lặp tiếp theo
pass #không làm gì cả, tạm để trống, để sau này viết tiếp
```

### Kiểu dữ liệu chuẩn

#### Number

```python
int
float
complex(a, b) #số phức a + b*i
str
bool
```

#### Chuỗi

```python
.strip() #loại bỏ khoảng trắng
.lower(), .upper() #hoa thường
.replay('b', 'c') #thay thế ký tự
.split(', ') #tách thành các chuỗi con
'a' in string #kiểm tra ký tự trong chuỗi
u'ch uoi' #chuỗi unicode
index(..)
find(..)
```

#### Collection

```python
#List: có thứ tự, có thể thay đổi, cho phép dữ liệu trùng lặp

l = ['java', 'python', 1997, 2000];

print(l[1])
l[-1] #phần tử cuối cùng, tương tự với -2, -3,..
l[a:b], [:b], [a:] #danh sách các phần tử từ thứ a đến thứ b
l.append('kiwi') #thêm phần tử vào cuối
l.insert(2, 'kiwi') #thêm phần tử tại vị trí ..
l.remove('java') #xóa phần tử
l.pop() #xóa phần tử cuối cùng của list
del l[0] #xóa phần tử có chỉ mục
l.clear() #xóa hết các phần tử 
#không thể copy list bằng cách nhập l2 = l1. Khi đó l2 sẽ chỉ là 1 tham chiếu đến l1. Những thay đổi trong l1 cũng tự động cập nhật trong l2
l2 = l1.copy() #Copy l1 vào l2
l2 = list(l1) #Hoặc như này
l3 = l1 + l2 #Nối 2 list
l = list(('a', 'b', 1)) #tạo list mới bằng constructor

len(l) #độ dài list
max(l), min(l) #phần tử có giá trị lớn nhất, nhỏ nhất
list(seq) #chuyển đổi một tuple thành list
...
```

```python
#Tuple: có thứ tự, không thể thay đổi, cho phép dữ liệu trùng lặp

t1 = ("apple", "banana", "guava")
t2 = ("kiwi", "cherry")
t = (t1, t2) #nối 2 tuple
#Khá giống list nhưng không thể thay đổi được giá trị
#Tuy nhiên có thể chuyển nó thành 1 list để thay đổi giá trị 
```

```python
#Set: không có thứ tự, không có chỉ mục, không cho phép dữ liệu trùng lặp

#không có chỉ mục nên không thể chắc chắc thứ tự các phần tử xuất hiện
#phải dùng vòng lặp for để truy cập các phần tử
s.add('a') #thêm phần tử
s.update(['a', 'b', 'c']) #thêm nhiều phần tử
s.remove('a') #xóa phần tử
s.pop() #xóa phần tử cuối cùng
s.clear() #xóa hết
s1 = s1.union(s2) #nối 2 set 
s1.update(s2) #nối 2 set
#cả union và update sẽ loại bỏ các phần tử trùng lặp
s = set(("apple", "banana", "cherry"))
```

```python
#Dictionary: không có thứ tự, có thể thay đổi và lập chỉ mục, không cho phép lặp chỉ mục

d = {'a': 'b', 'c': 1, 2: 'd'}

print(d.get('a'), d.get(2), d['a'], d[2])
d['a'] = 'e' #Thay đổi giá trị
d.pop('a') #Xóa phần tử
d.popitem() #Xóa phần tử cuối cùng
del d['a']
d.clear()
d1 = d2.copy()
d1 = dict(d2)
#Các dict có thể lồng nhau
```

### Hàm

```python
def name_fucntion(tham số):
    #code
    return ..
```

### Lambda

```python
x = lambda a, b, c : a + b + c
x(1, 2, 4)
```

### Class

```python
#File.py
class ClassName():
    #code
    self.attribute = 
    def __init__(self, , ):
        #code
        #phương thức khởi tạo
    def name(self,..):
        #code
        
#Dùng self để truy cập các thuộc tính và phương thức 
```

### Module

```python
import File
#Cn = File.ClassName(..,..)
#Cn.attribute..
#Cn.name(..)..

from File import fucn()
#fucn(..)
```

### Iterators

```python
#Là các đối tượng cho phép ta lấy từng phần tử
#Iterator trong python phải thực hiện 2 phương thức: 
#__iter__(): trả về đối tượng ite
#__next__(): trả về phần tử tiếp theo
l = [1, 2, 3, 4]
i = iter(l)
print(next(i)) = print(i.__next__()) #sẽ lỗi nếu không còn phần tử sau nữa
```

### Ngoại lệ

```python
while True:
    try:
        next(i)
    except StopIteration:
        break
    finally:
        #code
```

### Vào ra

```python
print ("nhập vào một số bất kì:")
s=input()
print ("số bạn nhập là:",s,"type là:",type(s))

x = open('text.txt', 'r')
# r là chỉ đọc
# w là ghi đè
# a là ghi xuống cuối
# r+ = r+w
x.write("hello")
x.close()

x.read()	#chỉ đọc nội dung có sẵn, ko đọc đc tại thời điểm ghi
x.read(5)	#chỉ định số chữ cái in ra màn hình
x.readline()	#in ra 1 dòng
x.readline(3)	#in ra 3 dòng

with open('text.txt', 'r+') as x:
    x.write('hello')
    print(f.read())	#tự động đóng file
    
array = "c o n c h o".split('cái để phân tách',độ dài lớn nhất)

for i in open(".."):	# ???
```

### Random

```python
Random.random()			#số thực bất kì giữa 0,1
Random.randrange(a,b)	#số thực bất kỳ giữa a, b
Random.randint(a,b)		#số nguyên...
```
### Command Line
```python
py FileName.py #chạy file
py #để code trực tiếp trong commandline, shift enter để xuống dòng, exit() để thoát

pip install ModuleName #cài module

jupyter notebook #chạy jupyter
```
### Selenium


```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://tuoitre.vn/tin-moi-nhat.htm")
soup = BeautifulSoup(response.content, "html.parser")
print(soup)
```

```python
from time import sleep
from selenium import webdriver
driver = webdriver.Chrome("D:\\Appliations\\chromedriver.exe")
driver.get("https://ctt-sis.hust.edu.vn/Account/Login.aspx")

driver.get("https://ctt-sis.hust.edu.vn/pub/CheckClassRegister.aspx")

mssv = driver.find_element_by_name("ctl00$ctl00$contentPane$MainPanel$MainContent$tbStudentID")
tim = driver.find_element_by_id("ctl00_ctl00_contentPane_MainPanel_MainContent_btSearch")

pre = ''
for i in range(20180000,20184000):
	mssv.send_keys(i)
	tim.click()
	while True:
		a = driver.find_element_by_class_name("dxgv").text
		if len(a) > 53:
			if a[45:53] != pre:
				pre = a[45:53] 
				break
		sleep(0.3)
	if len(a) > 270:
		c = a.index('.')
		print(a[160:(c-3)]+'\t'+a[(c-2):(c+8)])
	mssv.clear()```
```
