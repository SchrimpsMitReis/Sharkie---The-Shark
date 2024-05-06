import os

def create_files_and_folder():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    index_content = '''
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Document</title>
        </head>
        <body>
            <script src="./script.js"></script>
        </body>
        </html>
        '''
    with open(os.path.join(current_dir, 'index.html'), 'w') as file:
        file.write(index_content)
    
    with open(os.path.join(current_dir, 'script.js'), 'w') as file:
        pass
    
    with open(os.path.join(current_dir, 'style.css'), 'w') as file:
        pass
    
    img_dir = os.path.join(current_dir, 'IMG')
    os.makedirs(img_dir)

create_files_and_folder()
