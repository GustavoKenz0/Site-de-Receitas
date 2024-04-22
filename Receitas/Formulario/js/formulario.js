 // Função para adicionar ingredientes
 document.getElementById('addIngredientButton').addEventListener('click', function() {
    var ingredientInput = document.getElementById('ingredientInput');
    var ingredient = ingredientInput.value.trim();
    if (ingredient !== '') {
        var ingredientsList = document.getElementById('recipeIngredients');
        var li = document.createElement('li');
        li.textContent = ingredient;
        var removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(removeButton);
        ingredientsList.appendChild(li);
        ingredientInput.value = '';
    }
});

// Função para adicionar instruções
document.getElementById('addInstructionButton').addEventListener('click', function() {
    var instructionInput = document.getElementById('instructionInput');
    var instruction = instructionInput.value.trim();
    if (instruction !== '') {
        var instructionsList = document.getElementById('recipeInstructions');
        var li = document.createElement('li');
        li.textContent = instruction;
        var removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(removeButton);
        instructionsList.appendChild(li);
        instructionInput.value = '';
    }
});

// Função para lidar com o envio do formulário
document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os valores do formulário
    var recipeName = document.getElementById('recipeName').value;
    var ingredientsList = document.getElementById('recipeIngredients').getElementsByTagName('li');
    var instructionsList = document.getElementById('recipeInstructions').getElementsByTagName('li');

    // Transforma as listas de ingredientes e instruções em arrays de texto
    var ingredients = Array.from(ingredientsList).map(function(li) {
        return li.textContent;
    });
    var instructions = Array.from(instructionsList).map(function(li) {
        return li.textContent;
    });

    // Cria um objeto de receita
    var recipe = {
        name: recipeName,
        ingredients: ingredients,
        instructions: instructions
    };

    // Verifica se já existem receitas no localStorage
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Adiciona a nova receita ao array
    recipes.push(recipe);

    // Atualiza o localStorage com as receitas atualizadas
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Limpa os campos do formulário
    document.getElementById('recipeForm').reset();

    // Limpa a lista de ingredientes e instruções
    document.getElementById('recipeIngredients').innerHTML = '';
    document.getElementById('recipeInstructions').innerHTML = '';

    // Feedback para o usuário
    alert('Receita adicionada com sucesso!');
});