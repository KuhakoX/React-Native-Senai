import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CalendarioComp() {
  const [dataAtual, setDataAtual] = useState(new Date());

  const mes = dataAtual.getMonth();
  const ano = dataAtual.getFullYear();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const quantidadeDiasMes = useMemo(() => {
    return new Date(ano, mes + 1, 0).getDate();
  }, [mes, ano]);

  const primeiroDiaMes = useMemo(() => {
    return new Date(ano, mes, 1).getDay();
  }, [mes, ano]);

  const diasCalendario = useMemo(() => {
    const dias = [];

    for (let i = 0; i < primeiroDiaMes; i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= quantidadeDiasMes; dia++) {
      dias.push(dia);
    }

    return dias;
  }, [primeiroDiaMes, quantidadeDiasMes]);

  const alterarMes = (direcao) => {
    setDataAtual((dataAnterior) => {
      const novaData = new Date(dataAnterior);
      novaData.setMonth(dataAnterior.getMonth() + direcao);
      return novaData;
    });
  };

  const hoje = new Date();

  return (
    <View style={estilos.container}>
      {/* CABEÇALHO */}
      <View style={estilos.cabecalho}>
        <TouchableOpacity onPress={() => alterarMes(-1)}>
          <Text style={estilos.seta}>◀</Text>
        </TouchableOpacity>

        <Text style={estilos.textoMes}>
          {meses[mes]} {ano}
        </Text>

        <TouchableOpacity onPress={() => alterarMes(1)}>
          <Text style={estilos.seta}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* DIAS DA SEMANA */}
      <View style={estilos.containerSemana}>
        {diasSemana.map((dia) => (
          <Text key={dia} style={estilos.diaSemana}>
            {dia}
          </Text>
        ))}
      </View>

      {/* DIAS DO MÊS */}
      <View style={estilos.containerDias}>
        {diasCalendario.map((dia, indice) => {
          const ehHoje =
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear();

          return (
            <View
              key={indice}
              style={[
                estilos.caixaDia,
                ehHoje && estilos.caixaHoje,
              ]}
            >
              <Text
                style={[
                  estilos.textoDia,
                  ehHoje && estilos.textoHoje,
                ]}
              >
                {dia || ""}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 20,
    margin: 20,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  textoMes: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  seta: {
    color: "#fff",
    fontSize: 22,
  },

  containerSemana: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  diaSemana: {
    color: "#aaa",
    width: 40,
    textAlign: "center",
    fontWeight: "600",
  },

  containerDias: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  caixaDia: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  textoDia: {
    color: "#fff",
    fontSize: 16,
  },

  caixaHoje: {
    backgroundColor: "#4F46E5",
    borderRadius: 999,
  },

  textoHoje: {
    fontWeight: "bold",
  },
});