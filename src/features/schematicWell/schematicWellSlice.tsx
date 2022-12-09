import { createSlice } from '@reduxjs/toolkit';

import { Comment, InitialSchematicValue, SchematicState, SubsurfaceEquipment } from './interfaces';

const initialState = {
  maxDepth: 0,
  mousePosition: {
    yAxis: 0,
    xAxis: 0,
  },
  surfaceEquipmentTable: [
    {
      surfaceEquipment: '',
      description: '',
      yAxis: 0,
      xAxis: 0,
    },
  ],
  subsurfaceEquipmentTable: [
    {
      subsurfaceEquipment: '',
      odInch: '',
      idInch: '',
      manufacturer: '',
      depth: '',
      yAxis: 0,
      xAxis: 0,
    } as SubsurfaceEquipment,
  ],
  comments: [
    {
      comment: '',
      yAxis: 0,
      xAxis: 0,
    } as Comment,
  ],
} as InitialSchematicValue;

export const schematicWellSlice = createSlice({
  name: 'schematicWell',
  initialState,
  reducers: {
    setMaxDepth: (state, action) => {
      state.maxDepth = action.payload;
    },
    setSurfaceEquipment: (state, action) => {
      state.surfaceEquipmentTable = action.payload;
    },
    setSubsurfaceEquipment: (state, action) => {
      state.subsurfaceEquipmentTable = action.payload;
    },
    // A função abaixo deve ser usada para calcular a posição do clique do mouse
    // calculando a profundidade máxima e a posição do clique no eixo Y
    relativeCoordinates: (state, action) => {
      // Exemplo: profundidade máxima = 3000m e tamanho da imagem = 1000px
      // 3000m = profundidade máxima (state.depth)
      // 1000px = tamanho da imagem (imageSize.height)
      const event = action.payload;
      const bounds = event.target.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const clickDepth = (state.maxDepth * y) / 1000; // 1000 = imageSize.height;
      state.mousePosition = {
        yAxis: Number(clickDepth.toFixed(0)),
        xAxis: Number(x.toFixed(0)),
      };
    },
    openPointOfClick: (state, action) => {
      state.mousePosition = action.payload;
    },
  },
});

export const { relativeCoordinates, setMaxDepth, setSurfaceEquipment, setSubsurfaceEquipment, openPointOfClick } =
  schematicWellSlice.actions;

export const schematicWellState = (state: SchematicState) => state.schematicWell;
