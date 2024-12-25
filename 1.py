import os

# Функция для чтения всех файлов в папке и получения их содержимого
def get_all_files_code(directory):
    result = ""

    # Проходим по всем файлам и папкам в директории
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            
            try:
                # Читаем содержимое файла
                with open(file_path, 'r', encoding='utf-8') as f:
                    file_content = f.read()
                    result += f"// {file_path}\n{file_content}\n\n"  # Добавляем путь и содержимое
            except Exception as e:
                print(f"Не удалось прочитать файл {file_path}: {e}")
    
    return result

# Путь к папке с проектом
project_dir = './src'  # Заменить на путь к твоему проекту

# Получаем весь код всех файлов проекта
all_files_code = get_all_files_code(project_dir)

# Сохраняем результат в текстовый файл
with open('projectCode.txt', 'w', encoding='utf-8') as output_file:
    output_file.write(all_files_code)

print('Код всех файлов проекта успешно собран и сохранен в projectCode.txt')
