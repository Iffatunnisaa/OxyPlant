
# OxyPlant

Sebuah aplikasi manajemen tanaman digital dengan autentikasi menggunakan MongoDB dan JWT.

## 🚀 Fitur Utama

### 👤 User
- Registrasi dan login menggunakan email & password
- Dashboard user untuk melihat status tanaman
- Logout dan proteksi akses

### 🛠️ Admin
- Autentikasi admin
- Manajemen data pengguna & tanaman
- Dashboard admin untuk mengelola konten

### 🔒 Keamanan
- Password di-hash menggunakan **bcrypt**
- JSON Web Token (JWT) untuk otentikasi
- Cookie-based session untuk menjaga sesi pengguna

---

## How To Install

### 1. Clone the repository

```bash
git clone https://github.com/username/oxyplant.git
```

### 2. Go to folder and install dependencies

```bash
npm install
```

### 3. Copy the environment file

```bash
cp .env.example .env
```

> Jika error di Windows, jalankan:

```bash
copy .env.example .env
```

### 4. Generate application encryption key

```bash
node ace generate:key
```

### 5. Edit `.env` file

Ubah konfigurasi berikut:

```env
APP_KEY=hasil_dari_generate:key
JWT_SECRET=secret_key_kamu
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/adonis_mongo_auth
```

✅ **Pastikan:**

- Username/password benar  
- IP Address sudah di-whitelist di MongoDB Atlas  
- Database `adonis_mongo_auth` sudah dibuat (akan otomatis saat data diinsert)  

### 6. Build the project

```bash
node ace build
```

### 7. Run the application

```bash
node build/server.js
```

### 8. Open your browser

```
http://localhost:3333
```

---

## Features

- ✅ Register/Login dengan autentikasi JWT
- 🌱 Manajemen tanaman
- 👥 Komunitas antar pengguna
- 💾 Disimpan di MongoDB menggunakan Mongoose

## Tech Stack

- ⚙️ AdonisJS
- 🛢️ MongoDB + Mongoose
- 🔐 JWT (JSON Web Token)
- 🧠 TypeScript
- 🧩 Edge Templating Engine

## License

MIT © 2025 - OxyPlant Team
