import { XiuzhenZhe } from "./XiuZhenZhe";

export class XiuzhenZheMap {
    private xiuzhenZheMap: Map<string, XiuzhenZhe> = new Map<string, XiuzhenZhe>();
    private static instance: XiuzhenZheMap = new XiuzhenZheMap();

    public static getInstance(): XiuzhenZheMap {
        return XiuzhenZheMap.instance;
    }

    public setXiuzhenZhe(name: string, xiuzhenZhe: XiuzhenZhe) {
        this.xiuzhenZheMap.set(name, xiuzhenZhe);
    }

    public getXiuzhenZhe(name: string): XiuzhenZhe {
        return this.xiuzhenZheMap.get(name) as XiuzhenZhe;
    }

    public deleteXiuzhenZhe(name: string) {
        this.xiuzhenZheMap.delete(name);
    }

    public clearXiuzhenZhe() {
        this.xiuzhenZheMap.clear();
    }
}