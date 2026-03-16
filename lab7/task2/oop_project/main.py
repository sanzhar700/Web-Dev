from models import Animal, Dog, Cat


def main():

    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Misty", 2, "white", True)
    animal = Animal("Generic", 5, "gray")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)
        print(a.info())
        print(a.move())
        print(a.speak())

        if isinstance(a, Dog):
            print(a.fetch())

        if isinstance(a, Cat):
            print(a.scratch())

        print("-" * 30)


if __name__ == "__main__":
    main()