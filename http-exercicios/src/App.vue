<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto" 
			:variant="mensagem.tipo"
		>
			{{ mensagem.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe seu nome"
				>
				</b-form-input>
			</b-form-group>
			<b-form-group label="email">
				<b-form-input type="text" size="lg"
					v-model="usuario.email"
					placeholder="Informe seu email"
				>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button size="lg" variant="primary" @click="salvar">Salvar</b-button>
			<b-button size="lg" variant="success" class="ml-2" @click="atualizarDados">Atualizar dados</b-button>
			{{ result }}
		</b-card>
		<hr>
		<b-card>
			<template v-if="usuarios.length > 0">
				Usuários cadastrados: <br>
				<b-list-group style="flex:1">
					<b-list-group-item v-for="(user, id) in usuarios" :key="id">
						<strong> Nome: </strong> {{ user.nome }} <br>
						<strong> E-mail: </strong> {{ user.email }} <br>
						<strong> Id: </strong> {{ user.id }} <br>
						<b-button variant="warning" size="lg" @click="carregar(user.id)" class="ml-2"> Carregar </b-button>
						<b-button variant="danger" size="lg" class="ml-2" @click="excluir(user.id)"> Excluir </b-button>
					</b-list-group-item>
				</b-list-group>
			</template>
			<template v-else>
					<p> Nenhum usuário cadastrado </p>
			</template>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			},
			usuarios: []
		}
	},
	methods: {
		// Envia uma mensagem ao usuário
		mensagem(msg, tipo) {
			this.mensagens.push({
				texto: msg,
				tipo
			})
		},
		// Salva os dados no firebase
		salvar() {
			this.$http.post('usuarios.json', {
				nome: this.usuario.nome,
				email: this.usuario.email
			})
				.then((result) => {
					this.limpar()
					this.atualizarDados()
					this.mensagem('Dados salvos com sucesso!', 'success')
				})
				.catch((err) => this.mensagem('Ocorreu um erro ao salvar os dados!', 'danger'))
		},
		// Carrega os dados do firebase
		atualizarDados() {
			this.$http.get('usuarios.json')
				.then((result) => {
					this.usuarios = []
					this.usuarios = result.data
					setTimeout(this.limpar(), 2000)
				})
				.catch((err) => console.log(err))
		},
		// Limpa os campos de input
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.mensagens = []
			this.id = null
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id]}
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.mensagem('Dados excluidos com sucesso!', 'warning')
					this.atualizarDados()
				})
				.catch((err) => console.log(err))
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
