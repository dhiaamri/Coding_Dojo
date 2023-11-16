# x = [ [5,2,3], [10,8,9] ] 
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]


# x[1][0]=15
# print(x[1][0])

# students[0]["last_name"]="jordan"
# print(students[0]["last_name"])


# sports_directory["basketball"][0]="The Goat"
# print(sports_directory["basketball"][0])

# z[0]["y"]=30
# print(z[0]["y"])






students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# iterateDictionary(students) 
# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

def iterate_dictionary(students):
    for one_student in students:
        print(f" first name - {one_student["first_name"]} , last name - {one_student["last_name"]}")


def iterate_dictionary2(choice,students):
    for one_student in students:
        print(f" {one_student[choice]}")
        


