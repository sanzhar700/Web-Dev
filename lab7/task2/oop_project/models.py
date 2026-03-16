class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Animal makes a sound"

    def move(self):
        return f"{self.name} moves around"

    def info(self):
        return f"{self.name} is {self.age} years old and has {self.color} color"

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof!"

    def fetch(self):
        return f"{self.name} is fetching a ball"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says Meow!"

    def scratch(self):
        return f"{self.name} is scratching the sofa"