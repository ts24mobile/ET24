export class Code_SuoiTien_Model {
    constructor() { }
    private _phamViSuDung = "0";
    public get phamViSuDung() {
        return this._phamViSuDung;
    }
    public set phamViSuDung(value) {
        this._phamViSuDung = value;
    }
    private _maHieuQuayVe = "00";
    public get maHieuQuayVe() {
        return this._maHieuQuayVe;
    }
    public set maHieuQuayVe(value) {
        this._maHieuQuayVe = value;
    }
    private _ngayTaoMa = "000000";
    public get ngayTaoMa() {
        return this._ngayTaoMa;
    }
    public set ngayTaoMa(value) {
        this._ngayTaoMa = value;
    }
    private _loaiDichVu = "000";
    public get loaiDichVu() {
        return this._loaiDichVu;
    }
    public set loaiDichVu(value) {
        this._loaiDichVu = value;
    }
    private _kiemSoatRaVao = "0000";
    public get kiemSoatRaVao() {
        return this._kiemSoatRaVao;
    }
    public set kiemSoatRaVao(value) {
        this._kiemSoatRaVao = value;
    }
    private _soThuTu = "00000";
    public get soThuTu() {
        return this._soThuTu;
    }
    public set soThuTu(value) {
        this._soThuTu = value;
    }
    private _soKiemTra = "0";
    public get soKiemTra() {
        return this._soKiemTra;
    }
    public set soKiemTra(value) {
        this._soKiemTra = value;
    }
    private _maVe = "";
    public get maVe() {
        return this._maVe;
    }
    public set maVe(value) {
        this._maVe = value;
    }

    /**
     *
     *  //Tính số kiểm tra
            // 7.	Số kiểm tra : 01 chữ số sau cùng của mã vé. Số kiểm tra là kết quả của phép tính như sau :
            // •	A = (tổng các chữ số thứ 1, 5,  9, 13, 17 và 21) nhân với số nguyên tố 1.
            // •	B = (tổng các chữ số thứ 2, 6, 10, 14 và 18) nhân với số nguyên tố 3.
            // •	C = (tổng các chữ số thứ 3, 7, 11, 15 và 19) nhân với số nguyên tố 5.
            // •	D = (tổng các chữ số thứ 4, 8, 12, 16 và 20) nhân với số nguyên tố 7.
            // •	M = Modulo(A + B+ C+ D, 10)	
            // •	K là số kiểm tra, nếu M = 0 thì K là 0, nếu M > 0 thì K = 10 – M.

     */
    public generate_maVe() {
        try {
            let ordinal_num = 0,
                A = 0,
                B = 0,
                C = 0,
                D = 0,
                M = 0,
                K = 0;
            let sum_code = this.phamViSuDung + this.maHieuQuayVe + this.ngayTaoMa + this.loaiDichVu + this.kiemSoatRaVao + this.soThuTu;
            for (let index = 0; index < sum_code.length; index++) {
                ordinal_num = index + 1;
                switch (ordinal_num) {
                    case 1:
                    case 5:
                    case 9:
                    case 13:
                    case 17:
                    case 21:
                        A += parseInt(sum_code.charAt(index));
                        break;
                    case 2:
                    case 6:
                    case 10:
                    case 14:
                    case 18:
                        B += parseInt(sum_code.charAt(index));
                        break;
                    case 3:
                    case 7:
                    case 11:
                    case 15:
                    case 19:
                        C += parseInt(sum_code.charAt(index));
                        break;
                    case 4:
                    case 8:
                    case 12:
                    case 16:
                    case 20:
                        D += parseInt(sum_code.charAt(index));
                        break;
                }

            }

            B = B * 3;
            C = C * 5;
            D = D * 7;
            M = (A + B + C + D) % 10;
            if (M == 0) K = 0;
            else if (M > 0) K = 10 - M;
            this.soKiemTra = K.toString();
            this.maVe = sum_code + this.soKiemTra;
        } catch (ex) {
            console.log(ex);
        }
    }
}