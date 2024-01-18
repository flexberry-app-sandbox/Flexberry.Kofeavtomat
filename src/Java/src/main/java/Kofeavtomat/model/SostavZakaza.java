package Kofeavtomat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kofeavtomat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставЗаказа
 */
@Entity(name = "IISKofeavtomatСоставЗаказа")
@Table(schema = "public", name = "СоставЗаказа")
public class SostavZakaza {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vxodit")
    @Convert("Vxodit")
    @Column(name = "Входит", length = 16, unique = true, nullable = false)
    private UUID _vxoditid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vxodit", insertable = false, updatable = false)
    private KofeMashina vxodit;


    public SostavZakaza() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}