import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Account from "../component/account";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import DataTable from "react-data-table-component";

const kartegory = ["Kartegory All", "Pemasukan", "Pengeluaran"];

const formatRupiah = (number) => {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

const columns = [
  {
    name: "Tanggal",
    selector: (row) => row.tanggal,
  },
  {
    name: "Deskripsi",
    selector: (row) => row.deskripsi,
  },
  {
    name: "Kartegory",
    selector: (row) => row.kartegory,
  },
  {
    name: "Tipe",
    selector: (row) => row.tipe,
    cell: (row) => {
      // Tentukan warna berdasarkan tipe
      const isPemasukan = row.tipe === "Pemasukan";
      const bgColor = isPemasukan ? "#d4edda" : "#f8d7da";
      const textColor = isPemasukan ? "#155724" : "#721c24";
      const borderColor = isPemasukan ? "#28a745" : "#dc3545";

      return (
        <span
          style={{
            backgroundColor: bgColor,
            color: textColor,
            padding: "4px 12px", // atas-bawah kecil, kiri-kanan lebih besar
            border: `1px solid ${borderColor}`,
            borderRadius: "999px", // bikin kapsul
            display: "inline-block",
            fontWeight: "bold",
            minWidth: "100px",
            textAlign: "center",
          }}
        >
          {row.tipe}
        </span>
      );
    },
  },
  {
    name: "Jumlah",
    selector: (row) => formatRupiah(row.jumlah),
  },
];

const data = [
  {
    id: 1,
    tanggal: "01-12-2023",
    deskripsi: "Gaji Bulanan",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 5000000,
  },
  {
    id: 2,
    tanggal: "05-12-2023",
    deskripsi: "Bonus Proyek",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 2000000,
  },
  {
    id: 3,
    tanggal: "08-12-2023",
    deskripsi: "Biaya Listrik",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 500000,
  },
  {
    id: 4,
    tanggal: "10-12-2023",
    deskripsi: "Makan Siang",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 150000,
  },
  {
    id: 5,
    tanggal: "12-12-2023",
    deskripsi: "Freelance Project",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 3000000,
  },
  {
    id: 6,
    tanggal: "15-12-2023",
    deskripsi: "Bensin Mobil",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 200000,
  },
  {
    id: 7,
    tanggal: "18-12-2023",
    deskripsi: "Investasi Saham",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 1000000,
  },
  {
    id: 8,
    tanggal: "20-12-2023",
    deskripsi: "Dividen Saham",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 500000,
  },
  {
    id: 9,
    tanggal: "22-12-2023",
    deskripsi: "Sewa Apartment",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 2500000,
  },
  {
    id: 10,
    tanggal: "25-12-2023",
    deskripsi: "Hadiah Bonus Tahun Baru",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 1500000,
  },
  {
    id: 11,
    tanggal: "28-12-2023",
    deskripsi: "Pembelian Laptop",
    kartegory: "Pengeluaran",
    tipe: "Pengeluaran",
    jumlah: 8000000,
  },
  {
    id: 12,
    tanggal: "30-12-2023",
    deskripsi: "Refund Pembelian",
    kartegory: "Pemasukan",
    tipe: "Pemasukan",
    jumlah: 1200000,
  },
];

const customStyles = {
  headCells: {
    style: {
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
      },
    },
  },
};

const Transaksi = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [kartegorys, setKartegorys] = useState("Kartegory All");
  const [search, setSearch] = useState(data);

  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };

  const handleRangeChange = (ranges) => {
    setDate(ranges.selection);

    const filterDate = data.filter((row) => {
      const rowDate = new Date(row.tanggal.split("-").reverse().join("-"));
      return (
        rowDate >= ranges.selection.startDate &&
        rowDate <= ranges.selection.endDate
      );
    });
    setSearch(filterDate);
  };

  const handleKartegory = (e) => {
    setKartegorys(e.target.value);
    if (e.target.value === "Kartegory All") {
      setSearch(data);
    } else {
      setSearch(data.filter((row) => row.kartegory === e.target.value));
    }
  };

  const filteredData = (e) => {
    const dateFilter = data.filter((row) =>
      row.tanggal.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setSearch(dateFilter);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-md px-3">
        <Account />
      </div>
      <div className="flex flex-col gap-3 px-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-xl">Transaksi</span>
          </div>
          <div className="bg-[#3486FF] p-2 rounded-lg hover:bg-[#3486FF]/80 cursor-pointer">
            <button className="text-white font-semibold text-sm">
              Tambahkan Transaksi Baru
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-black/20 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="border border-black/20 rounded-lg">
                <span
                  className="cursor-pointer p-2 box-border flex gap-1"
                  onClick={handleOpenDate}
                >
                  <CalendarDays className="text-black/70" />
                  {`${format(date.startDate, "dd MMM yyyy")} - ${format(date.endDate, "dd MMM yyyy")}`}
                </span>
              </div>
              <div className="absolute top-2/6 z-50">
                {openDate && (
                  <DateRangePicker
                    className="relative shadow-lg rounded-2xl"
                    ranges={[date]}
                    onChange={handleRangeChange}
                  />
                )}
              </div>
              <div className="border border-black/20 rounded-lg mx-4">
                <select
                  className="p-2 cursor-pointer outline-none"
                  name="kartegory"
                  id="kartegory"
                  value={kartegorys}
                  onChange={handleKartegory}
                >
                  {kartegory.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex  border border-black/20 rounded-lg">
              <input
                type="text"
                placeholder="Cari tanggal"
                className="p-2 outline-none"
                onChange={filteredData}
              />
            </div>
          </div>
          <div className="border border-black/20 rounded-lg">
            <DataTable
              columns={columns}
              data={search}
              customStyles={customStyles}
              pagination
              highlightOnHover
            ></DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
