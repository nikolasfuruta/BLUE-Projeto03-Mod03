# Comandos Gerais do GIT

## INICIALIZAR REPOSITÓRIO
git init

## CRIAR BRANCH
git branch [nome da branch]

## ALTERAR AS BRANCHES
git checkout [nome da branch]

## SALVAR AS MUDANÇAS
git add .
git commit -m "comentário"

## ALTERAR OS COMMITS
git checkout [número do commit]

## ENVIAR OS DADOS
git push origin main

## PUXAR OS DADOS
git pull origin main

## COLOCAR AS ALTERAÇÕES DE UMA BRANCH FILHA PARA O MAIN
entrar na branch main
git merge [nome da branch filha] 

## LISTAR TODOS OS COMMITS
git log