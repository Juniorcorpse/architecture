----

## Arquitetura de Software

----

```sh
npm install express mustache-express dotenv
```
```sh
npm install --save-dev @types/express @types/mustache-express @types/node
```
```sh
npm install -D tsx
```
```sh
npm install cors
```
```sh
npm install -D @types/cors
```

- Adicionado o `Jest` e seus tipos como dependências de desenvolvimento no `package.json`

## Configuração dos testes com Jest

O projeto usa Jest 30 para executar testes escritos em TypeScript. Como o projeto
usa módulos ES (`"type": "module"`) e imports TypeScript com extensão `.js`, a
configuração do Jest está definida no `package.json` para manter os testes
compatíveis com esse formato.

### Dependências

- `jest`: executor dos testes.
- `@types/jest`: tipos TypeScript para as funções globais do Jest, como `describe`,
	`it` e `expect`.
- `@swc/core` e `@swc/jest`: transformam os arquivos TypeScript durante a execução
	dos testes, preservando a sintaxe ESM.

### Opções do Jest

- `extensionsToTreatAsEsm: [".ts"]`: informa ao Jest que os arquivos TypeScript
	devem ser tratados como módulos ES.
- `transform`: aplica o `@swc/jest` aos arquivos `.ts` e `.tsx`, fazendo o parse
	de TypeScript e gerando JavaScript compatível com ES2022.
- `moduleNameMapper`: remove a extensão `.js` dos imports relativos durante a
	resolução dos módulos. Isso permite que imports como
	`../entities/user.js` encontrem o arquivo-fonte `user.ts` nos testes.

O script `test` inicia o Jest com `--experimental-vm-modules`, necessário para
executar os módulos ES no Jest com a versão atual do Node.js. O Node pode exibir
um aviso de que esse recurso é experimental.

### Executar os testes

```sh
npm install
npm test
```

Os arquivos de teste devem usar os nomes `*.spec.ts` ou `*.test.ts`. Por exemplo:
`src/use-cases/register-user.use-case.spec.ts`.

