
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/fn_carteira_cobranca',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'descricao': '',
    'id_conta': '',
    'tipo_recebimento': 'Boleto',
    'envia_email_ao_gerar_finan': 'S',
    'envia_push_ao_gerar_finan': 'N',
    'imprime_ligacoes_voip': 'S',
    'registrado': 'S',
    'ativo': 'S',
    'filial_id': '',
    'id_config_alt_pagamento': '',
    'planejamento_tarifa': '',
    'lancamento_tarifa': 'L',
    'arredondamento_caixa': '0.01',
    'reseller_authorization_code': '',
    'dias_vencimento_fatura': '1',
    'carteira_padrao_fatura': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'aceite': 'N',
    'especie': 'R$',
    'especie_doc': 'DM',
    'taxa': '',
    'quem_emite': '2',
    'quem_distribui': '2',
    'endereco_envio_cobranca': '1',
    'boleto_local_atualiza': 'S',
    'local_pagamento': '',
    'contador_nn': '',
    'classe_funcoes': '',
    'versao_integracao_banrisul': 'v1',
    'n_convenio': '',
    'c_cedente': '',
    'codigo_edi7': '',
    'carteira': '',
    'sigla_arquivo_remessa': '',
    'variacao_carteira': '',
    'modalidade_cobranca': '02',
    'sicredi_byte': '',
    'sicredi_posto': '',
    'inicio_nosso_numero': '',
    'nosso_numero_const1': '2',
    'nosso_numero_const2': '4',
    'nosso_numero1': '000',
    'nosso_numero2': '000',
    'tipo_carteira': '1',
    'tipo': '',
    'utliza_numero_parcela_fixo': 'N',
    'pedido_baixa_automatico': 'N',
    'pedido_baixa_automatico_rec_manual': 'N',
    'enviar_pedido_baixa_renegociados': 'S',
    'pedido_baixa_automatico_rec_cartao': 'N',
    'pedido_baixa_automatico_rec_pix': 'N',
    'adiciona_remessa_auto_alt_data': 'N',
    'validar_vencidos_remessa': 'S',
    'validar_recebidos_remessa': 'S',
    'validar_clientes_bloqueados': 'N',
    'remessa_com_mensagem': 'N',
    'l_remessa': '',
    'l_retorno': '',
    'codigo_flash': '',
    'contabiliza_retorno_filial_emissao': 'N',
    'filtra_inicio_nn': 'S',
    'baixa_automatica': 'S',
    'baixa_automatica_dias': '90',
    'utilizar_baixa_apos_vencimento': 'N',
    'enviar_pedido_baixa_vencimento': '59',
    'gateway_nome': '',
    'versao_api': 'v1',
    'importado_gateway': 'N',
    'nova_api': 'N',
    'ambiente_homologacao_gateway': 'N',
    'utiliza_carne': 'N',
    'gerencia_client_id': '',
    'gerencia_client_secret': '',
    'developer_application_key': '',
    'gerencia_ip_callback': '',
    'gerencia_identificador_conta': '',
    'nova_int_fortunus': 'N',
    'gateway_token': '',
    'carteira_widepay': '',
    'gateway_tipo_impressao': 'CAR',
    'gateway_retorno': '',
    'adiciona_obs_descricao': 'N',
    'adiciona_venc_descricao': 'N',
    'envia_email_gerencia': 'S',
    'numero_conta_f2b': '',
    'n_convenio_credisis': '',
    'url_callback': '',
    'data_ultima_atualizacao': '',
    'galaxPayId': '',
    'galaxPayHash': '',
    'gera_pix_gateway': 'N',
    'recebimento_parcial_gateway': 'S',
    'lanca_tarifa_gateway': 'N',
    'valor_tarifa_gateway': '',
    'timeout': '60',
    'finalizar_cob_bf': 'S',
    'creditcard_gateway': '',
    'creditCard_ambiente': 'T',
    'creditcard_user': '',
    'creditcard_senha': '',
    'creditcard_senhassl': '',
    'creditCard_loja': '',
    'creditCard_chave': '',
    'gerencia_identificador_conta_card': '',
    'gerencia_client_id_card': '',
    'gerencia_client_secret_card': '',
    'gerencia_ip_callback_card': '',
    'galaxPayIdCard': '',
    'galaxPayHashCard': '',
    'galaxpay_ip_callback_card': '',
    'timeoutCreditCard': '60',
    'creditcard_sslcert': '',
    'creditcard_sslkey': '',
    'creditCard_local': 'L',
    'creditCard_autenticar': 'S',
    'creditCard_capturar': 'S',
    'creditCard_autorizar': '3',
    'credit_card_tipo': 'C',
    'creditCard_parcelamento': 'C',
    'creditCard_Nparcelas': '12',
    'creditCard_juro': '',
    'creditcard_banceira_vi': 'S',
    'creditcard_banceira_ma': 'S',
    'creditcard_banceira_am': 'S',
    'creditcard_banceira_el': 'S',
    'creditcard_banceira_dn': 'S',
    'creditcard_banceira_dc': 'S',
    'creditcard_banceira_jc': 'S',
    'creditcard_banceira_au': 'S',
    'creditcard_banceira_ca': 'S',
    'debito_convenio': '',
    'debito_carteira_vinculada': '',
    'debito_classe': '',
    'validar_vencidos_remessa_D': 'S',
    'valor_tarifa': '',
    'substrair_tarifa': 'S',
    'pix_gateway': '',
    'pix_ambiente': 'P',
    'pix_chave': '',
    'pix_client_id': '',
    'pix_client_secret': '',
    'pix_tempo_validade': '',
    'pix_certificado': '',
    'pix_gerencia_ip_callback': '',
    'pix_modalidade': 'I',
    'jurop_mes': '',
    'juros_boleto_juno': '',
    'jurop': '',
    'jurov': '',
    'multap': '',
    'multav': '',
    'desconto_v': '',
    'desconto_p': '',
    'desconto_condicional_valor': 'NULL',
    'desconto_condicional_percentual': 'NULL',
    'data_validade_condicional': 'NULL',
    'desconto_proporcional': 'S',
    'protestar': 'S',
    'atraso': '',
    'calcular_juros': 'D',
    'permite_atualizar_boleto_apos_data_ixc': 'N',
    'instrucao1': '',
    'instrucao2': '',
    'instrucao3': '',
    'instrucao4': '',
    'instrucao5': '',
    'instrucao6': '',
    'instrucao7': '',
    'instrucao8': '',
    'imp_inst_vencido': '1,2,3',
    'imp_inst_proporcional': '1,2,3',
    'obs_fn_areceber': 'S',
    'obs_anterior': '',
    'obs_posterior': '',
    'imp_nome_beneficiario': 'R',
    'imp_nome_beneficiario_recibo': 'R',
    'l_impressao': '',
    'imprimir_filial_venda': 'N',
    'considerar_modelo_nao_fiscal': 'N',
    'imprime_endereco_boleto': 'S',
    'imprime_fone_fatura_d': 'N',
    'imp_nome_sacador_avalista': 'S',
    'imprimir_filial_conta': 'N',
    'imprime_prod_val_zero': 'S',
    'boletos_capa_contratos': 'N',
    'imprime_tipo_resolucao_anatel': 'N',
    'boleto_capa': 'S',
    'boleto_capa_cliente_referencia': 'S',
    'fone_cliente_capa': 'S',
    'boleto_capa_local': 'I',
    'boleto_capa_imagem': '',
    'remover_fundo_capa_carteira': '',
    'boleto_capa_x': '',
    'boleto_capa_y': '',
    'tamanho_quadro_endereco_x': '',
    'tamanho_quadro_endereco_y': '',
    'mask_cpf_cnpj_impressao_boleto': 'N',
    'mostra_cep_beneficiario_impressao': 'N',
    'imprimir_beneficiario_gateway': 'A',
    'obs_adicional_boleto': '',
    'tipo_baixa': 'D',
    'validar_juros_multa': 'N',
    'id_produto_cob_adicional': '',
    'id_fn_areceber_modelo': ''
  },
  json: true
 };
request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Deletar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'DELETE',
  url: 'https://HOST/webservice/v1/fn_carteira_cobranca/Id_a_deletar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   }
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Editar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'PUT',
  url: 'https://HOST/webservice/v1/fn_carteira_cobranca/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "descricao": "",
    "id_conta": "",
    "tipo_recebimento": "Boleto",
    "envia_email_ao_gerar_finan": "S",
    "envia_push_ao_gerar_finan": "N",
    "imprime_ligacoes_voip": "S",
    "registrado": "S",
    "ativo": "S",
    "filial_id": "",
    "id_config_alt_pagamento": "",
    "planejamento_tarifa": "",
    "lancamento_tarifa": "L",
    "arredondamento_caixa": "0.01",
    "reseller_authorization_code": "",
    "dias_vencimento_fatura": "1",
    "carteira_padrao_fatura": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "aceite": "N",
    "especie": "R$",
    "especie_doc": "DM",
    "taxa": "",
    "quem_emite": "2",
    "quem_distribui": "2",
    "endereco_envio_cobranca": "1",
    "boleto_local_atualiza": "S",
    "local_pagamento": "",
    "contador_nn": "",
    "classe_funcoes": "",
    "versao_integracao_banrisul": "v1",
    "n_convenio": "",
    "c_cedente": "",
    "codigo_edi7": "",
    "carteira": "",
    "sigla_arquivo_remessa": "",
    "variacao_carteira": "",
    "modalidade_cobranca": "02",
    "sicredi_byte": "",
    "sicredi_posto": "",
    "inicio_nosso_numero": "",
    "nosso_numero_const1": "2",
    "nosso_numero_const2": "4",
    "nosso_numero1": "000",
    "nosso_numero2": "000",
    "tipo_carteira": "1",
    "tipo": "",
    "utliza_numero_parcela_fixo": "N",
    "pedido_baixa_automatico": "N",
    "pedido_baixa_automatico_rec_manual": "N",
    "enviar_pedido_baixa_renegociados": "S",
    "pedido_baixa_automatico_rec_cartao": "N",
    "pedido_baixa_automatico_rec_pix": "N",
    "adiciona_remessa_auto_alt_data": "N",
    "validar_vencidos_remessa": "S",
    "validar_recebidos_remessa": "S",
    "validar_clientes_bloqueados": "N",
    "remessa_com_mensagem": "N",
    "l_remessa": "",
    "l_retorno": "",
    "codigo_flash": "",
    "contabiliza_retorno_filial_emissao": "N",
    "filtra_inicio_nn": "S",
    "baixa_automatica": "S",
    "baixa_automatica_dias": "90",
    "utilizar_baixa_apos_vencimento": "N",
    "enviar_pedido_baixa_vencimento": "59",
    "gateway_nome": "",
    "versao_api": "v1",
    "importado_gateway": "N",
    "nova_api": "N",
    "ambiente_homologacao_gateway": "N",
    "utiliza_carne": "N",
    "gerencia_client_id": "",
    "gerencia_client_secret": "",
    "developer_application_key": "",
    "gerencia_ip_callback": "",
    "gerencia_identificador_conta": "",
    "nova_int_fortunus": "N",
    "gateway_token": "",
    "carteira_widepay": "",
    "gateway_tipo_impressao": "CAR",
    "gateway_retorno": "",
    "adiciona_obs_descricao": "N",
    "adiciona_venc_descricao": "N",
    "envia_email_gerencia": "S",
    "numero_conta_f2b": "",
    "n_convenio_credisis": "",
    "url_callback": "",
    "data_ultima_atualizacao": "",
    "galaxPayId": "",
    "galaxPayHash": "",
    "gera_pix_gateway": "N",
    "recebimento_parcial_gateway": "S",
    "lanca_tarifa_gateway": "N",
    "valor_tarifa_gateway": "",
    "timeout": "60",
    "finalizar_cob_bf": "S",
    "creditcard_gateway": "",
    "creditCard_ambiente": "T",
    "creditcard_user": "",
    "creditcard_senha": "",
    "creditcard_senhassl": "",
    "creditCard_loja": "",
    "creditCard_chave": "",
    "gerencia_identificador_conta_card": "",
    "gerencia_client_id_card": "",
    "gerencia_client_secret_card": "",
    "gerencia_ip_callback_card": "",
    "galaxPayIdCard": "",
    "galaxPayHashCard": "",
    "galaxpay_ip_callback_card": "",
    "timeoutCreditCard": "60",
    "creditcard_sslcert": "",
    "creditcard_sslkey": "",
    "creditCard_local": "L",
    "creditCard_autenticar": "S",
    "creditCard_capturar": "S",
    "creditCard_autorizar": "3",
    "credit_card_tipo": "C",
    "creditCard_parcelamento": "C",
    "creditCard_Nparcelas": "12",
    "creditCard_juro": "",
    "creditcard_banceira_vi": "S",
    "creditcard_banceira_ma": "S",
    "creditcard_banceira_am": "S",
    "creditcard_banceira_el": "S",
    "creditcard_banceira_dn": "S",
    "creditcard_banceira_dc": "S",
    "creditcard_banceira_jc": "S",
    "creditcard_banceira_au": "S",
    "creditcard_banceira_ca": "S",
    "debito_convenio": "",
    "debito_carteira_vinculada": "",
    "debito_classe": "",
    "validar_vencidos_remessa_D": "S",
    "valor_tarifa": "",
    "substrair_tarifa": "S",
    "pix_gateway": "",
    "pix_ambiente": "P",
    "pix_chave": "",
    "pix_client_id": "",
    "pix_client_secret": "",
    "pix_tempo_validade": "",
    "pix_certificado": "",
    "pix_gerencia_ip_callback": "",
    "pix_modalidade": "I",
    "jurop_mes": "",
    "juros_boleto_juno": "",
    "jurop": "",
    "jurov": "",
    "multap": "",
    "multav": "",
    "desconto_v": "",
    "desconto_p": "",
    "desconto_condicional_valor": "NULL",
    "desconto_condicional_percentual": "NULL",
    "data_validade_condicional": "NULL",
    "desconto_proporcional": "S",
    "protestar": "S",
    "atraso": "",
    "calcular_juros": "D",
    "permite_atualizar_boleto_apos_data_ixc": "N",
    "instrucao1": "",
    "instrucao2": "",
    "instrucao3": "",
    "instrucao4": "",
    "instrucao5": "",
    "instrucao6": "",
    "instrucao7": "",
    "instrucao8": "",
    "imp_inst_vencido": "1,2,3",
    "imp_inst_proporcional": "1,2,3",
    "obs_fn_areceber": "S",
    "obs_anterior": "",
    "obs_posterior": "",
    "imp_nome_beneficiario": "R",
    "imp_nome_beneficiario_recibo": "R",
    "l_impressao": "",
    "imprimir_filial_venda": "N",
    "considerar_modelo_nao_fiscal": "N",
    "imprime_endereco_boleto": "S",
    "imprime_fone_fatura_d": "N",
    "imp_nome_sacador_avalista": "S",
    "imprimir_filial_conta": "N",
    "imprime_prod_val_zero": "S",
    "boletos_capa_contratos": "N",
    "imprime_tipo_resolucao_anatel": "N",
    "boleto_capa": "S",
    "boleto_capa_cliente_referencia": "S",
    "fone_cliente_capa": "S",
    "boleto_capa_local": "I",
    "boleto_capa_imagem": "",
    "remover_fundo_capa_carteira": "",
    "boleto_capa_x": "",
    "boleto_capa_y": "",
    "tamanho_quadro_endereco_x": "",
    "tamanho_quadro_endereco_y": "",
    "mask_cpf_cnpj_impressao_boleto": "N",
    "mostra_cep_beneficiario_impressao": "N",
    "imprimir_beneficiario_gateway": "A",
    "obs_adicional_boleto": "",
    "tipo_baixa": "D",
    "validar_juros_multa": "N",
    "id_produto_cob_adicional": "",
    "id_fn_areceber_modelo": ""
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Listar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'GET',
  url: 'https://HOST/webservice/v1/fn_carteira_cobranca',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'fn_carteira_cobranca.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'fn_carteira_cobranca.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    