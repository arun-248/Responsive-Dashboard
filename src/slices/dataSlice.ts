import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

type Point = { name: string; value: number }
type BarDatum = { name: string; sales: number }
type PieDatum = { name: string; value: number }
type Activity = { id: number; message: string }

type DataState = {
  line: Point[]
  bar: BarDatum[]
  pie: PieDatum[]
  feed: Activity[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

export const fetchMock = createAsyncThunk("data/fetchMock", async () => {
  await new Promise((r) => setTimeout(r, 400))
  const now = Date.now()
  return {
    line: Array.from({ length: 7 }, (_, i) => ({
      name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      value: Math.floor(Math.random() * 100)
    })),
    bar: Array.from({ length: 6 }, (_, i) => ({
      name: `M${i + 1}`,
      sales: Math.floor(Math.random() * 500)
    })),
    pie: [
      { name: "Group A", value: Math.floor(Math.random() * 50) + 10 },
      { name: "Group B", value: Math.floor(Math.random() * 50) + 10 },
      { name: "Group C", value: Math.floor(Math.random() * 50) + 10 }
    ],
    feed: [{ id: now, message: "Auto-refreshed data" }]
  }
})

const initialState: DataState = {
  line: [],
  bar: [],
  pie: [],
  feed: [],
  status: "idle",
  error: null
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMock.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchMock.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.line = action.payload.line
        state.bar = action.payload.bar
        state.pie = action.payload.pie
        state.feed = [...action.payload.feed, ...state.feed].slice(0, 10)
      })
      .addCase(fetchMock.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Error"
      })
  }
})

export default dataSlice.reducer
