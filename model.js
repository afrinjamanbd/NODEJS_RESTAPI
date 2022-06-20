class AllTeams{
    constructor(TeamID,TeamName){
        this.TeamID = TeamID;
        this.TeamName = TeamName;
    }
}

class Team_Dropdown{
    constructor(id,childid,name,code,parentid){
        this.id = id;
        this.childid = childid;
        this.name = name;
        this.code = code;
        this.parentid = parentid;
    }
}

class tblSalesDetail{
    constructor(MemoNo,MemoType,DepotCode,ProductCode,TradePrice,ProductVAT,Quantity,TradeAmount,VATAmount,DiscountAmount,FlatRate,FMax,FQty,OBI,BatchNo){
        this.MemoNo = MemoNo;
        this.MemoType = MemoType;
        this.DepotCode = DepotCode;
        this.ProductCode = ProductCode;
        this.TradePrice = TradePrice;
        this.ProductVAT = ProductVAT;
        this.Quantity = Quantity;
        this.TradeAmount = TradeAmount;
        this.VATAmount = VATAmount;
        this.DiscountAmount = DiscountAmount;
        this.FlatRate = FlatRate;
        this.FMax = FMax;
        this.FQty = FQty;
        this.OBI= OBI;
        this.BatchNo=BatchNo;
    }
}

module.exports = {
    AllTeams : AllTeams,
    Team_Dropdown :Team_Dropdown,
    tblSalesDetail : tblSalesDetail
}
