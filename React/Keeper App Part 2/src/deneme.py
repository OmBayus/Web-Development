ilksayi = int(input("ilksayi: "))
ikincisayi = int(input("ikincisayi: "))
işlem = input("işlemi giriniz(+,-,/,x): ")

if işlem == "+":
      print(ilksayi+ikincisayi)
elif işlem == "-":
      print(ilksayi-ikincisayi)
elif işlem == "/":
      print(ilksayi/ikincisayi)
elif işlem == "x":
      print(ilksayi*ikincisayi)
else:
      print("Hatali Tuşlama")