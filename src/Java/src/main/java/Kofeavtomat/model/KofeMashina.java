package Kofeavtomat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kofeavtomat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: КофеМашина
 */
@Entity(name = "IISKofeavtomatКофеМашина")
@Table(schema = "public", name = "КофеМашина")
public class KofeMashina {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Состояние")
    private String состояние;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Etazh")
    @Convert("Etazh")
    @Column(name = "Этаж", length = 16, unique = true, nullable = false)
    private UUID _etazhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Etazh", insertable = false, updatable = false)
    private Etazh etazh;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Obsluzhivanie")
    @Convert("Obsluzhivanie")
    @Column(name = "Обслуживание", length = 16, unique = true, nullable = false)
    private UUID _obsluzhivanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Obsluzhivanie", insertable = false, updatable = false)
    private Obsluzhivanie obsluzhivanie;

    @OneToMany(mappedBy = "vxodit", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavZakaza> sostavzakazas;


    public KofeMashina() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }


}