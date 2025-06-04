<template>
  <div class="captive-portal">
    <h1>Bem-vindo à nossa Rede Wi-Fi!</h1>
    <p>Para ter acesso à internet, por favor, leia e aceite nossos termos de uso.</p>

    <div class="terms-content">
      <h2>Termos de Uso</h2>
      <p>
        Ao clicar em "Aceitar Termos", você concorda em utilizar nossa rede Wi-Fi de forma responsável,
        não acessando conteúdos ilegais, não distribuindo malware e respeitando a privacidade dos demais usuários.
        A utilização da rede é por sua conta e risco. Não nos responsabilizamos por perdas de dados ou
        acesso não autorizado a informações pessoais.
      </p>
      <p>
        Esta rede é fornecida como cortesia e pode ter sua velocidade ou disponibilidade alteradas a qualquer momento.
      </p>
      </div>

    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="loading" class="loading-message">Processando...</div>

    <button @click="acceptTerms" :disabled="loading">Aceitar Termos e Acessar</button>

    <p class="disclaimer">
      Se você não aceitar os termos, não poderá acessar a internet através desta rede.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'; 

export default defineComponent({
  name: 'TermsOfService',
  setup() {
    const router = useRouter();
    const route = useRoute(); 
    const clientId = ref<string | null>(null);
    const redirectUrl = ref<string | null>(null);
    const error = ref<string | null>(null);
    const loading = ref<boolean>(false);

    const BACKEND_URL = 'http://localhost:3000'; 

    onMounted(() => {

      clientId.value = route.query.clientId as string || null;
      redirectUrl.value = route.query.redirectUrl as string || null;

      if (!clientId.value) {
        console.warn("clientId não encontrado nos parâmetros da URL. Certifique-se de que o AP está configurado para enviá-lo.");
      }
      if (!redirectUrl.value) {
        console.warn("redirectUrl não encontrado nos parâmetros da URL. O redirecionamento automático pode falhar.");
      }

      console.log(`[Frontend] Portal carregado. clientId: ${clientId.value}, redirectUrl: ${redirectUrl.value}`);
    });

    const acceptTerms = async () => {
      if (!clientId.value) {
        error.value = "Não foi possível identificar seu dispositivo. Por favor, tente novamente ou contate o suporte.";
        return;
      }

      loading.value = true;
      error.value = null;

      try {
        const response = await axios.post(`${BACKEND_URL}/api/accept-terms`, {
          clientId: clientId.value
        });

        if (response.status === 200) {
          console.log(`[Frontend] Termos aceitos para ${clientId.value}. Redirecionando...`);
          if (redirectUrl.value) {
            window.location.href = redirectUrl.value;
          } else {
            alert("Termos aceitos! Agora você pode acessar a internet.");
            window.location.href = 'http://google.com'; 
          }
        } else {
          error.value = "Erro ao aceitar termos: " + (response.data.message || "Erro desconhecido.");
          console.error('[Frontend] Erro inesperado:', response.data);
        }
      } catch (err: any) {
        error.value = "Falha na comunicação com o servidor: " + (err.response?.data?.message || err.message);
        console.error('[Frontend] Erro na requisição:', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      clientId,
      redirectUrl,
      error,
      loading,
      acceptTerms
    };
  }
});
</script>

<style scoped>
.captive-portal {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.terms-content {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
  max-height: 300px;
  overflow-y: auto;
  line-height: 1.6;
}

.terms-content h2 {
  margin-top: 0;
  color: #555;
}

.terms-content p {
  margin-bottom: 15px;
  color: #666;
}

button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 15px;
  font-weight: bold;
}

.loading-message {
  color: #007bff;
  margin-top: 15px;
}

.disclaimer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #888;
}
</style>